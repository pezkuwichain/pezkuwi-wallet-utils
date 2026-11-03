#!/usr/bin/env python3
"""Chain specifications for the wallet's light client, written to light-client/.

The full specifications carry the raw genesis storage, about 3 MB each. The light client needs
none of it: the genesis state root identifies the chain, and the relay chain starts from a
checkpoint (lightSyncState) that the relay node exports with sync_state_genSyncSpec. What is
written here is that trimmed form, with the boot nodes below.

The checkpoint is a trust anchor: a client that starts from a false one can follow a false
chain. It is taken from our own relay node and reaches the wallet only inside the APK or through
signed/targets.json, never from peers. Every state root is checked against its chain's genesis
hash before anything is written.

  light_client_specs.py --relay-rpc URL --people-rpc URL --people-spec FILE
  light_client_specs.py --relay-rpc URL --check-age DAYS

The second form fails when the relay checkpoint in light-client/ is older than DAYS. A wallet that
never fell back has no saved database, so its first fallback warp-syncs from this checkpoint; the
weekly Code Quality run keeps it from going stale between signings.
"""

import argparse
import hashlib
import json
import sys
import urllib.request
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
# Zagros relay block time, to turn a block distance into days.
BLOCK_SECONDS = 6
OUT = REPO / "light-client"

# Secure WebSockets on 443 first: they look like any HTTPS WebSocket where plain libp2p TCP is
# filtered. The TCP addresses stay for networks that filter nothing.
ZAGROS_BOOT_NODES = [
    "/dns/zagros-bootnode-0.pezkuwichain.io/tcp/443/wss/p2p/12D3KooWHKMr39ubvsigZXdVJzr7nnMp5YTzMywKuTzPDo3Xf1tZ",
    "/dns/zagros-bootnode-1.pezkuwichain.io/tcp/443/wss/p2p/12D3KooWH6tzPuoFeyf8n6gNmus9Q3CdEGEVUvbduUnPTqJcLRLC",
    "/dns/zagros-bootnode-0.pezkuwichain.io/tcp/30333/p2p/12D3KooWHKMr39ubvsigZXdVJzr7nnMp5YTzMywKuTzPDo3Xf1tZ",
    "/dns/zagros-bootnode-1.pezkuwichain.io/tcp/30333/p2p/12D3KooWH6tzPuoFeyf8n6gNmus9Q3CdEGEVUvbduUnPTqJcLRLC",
]
PEOPLE_ZAGROS_BOOT_NODES = [
    "/dns/zagros-people-bootnode.pezkuwichain.io/tcp/443/wss/p2p/12D3KooWLnDS5p5bvMzfco2BR4arKRbtpqoZwRvLKgCdzgVpuEQG",
    "/ip4/217.77.6.126/tcp/30535/p2p/12D3KooWLnDS5p5bvMzfco2BR4arKRbtpqoZwRvLKgCdzgVpuEQG",
    "/ip4/164.68.110.49/tcp/30535/p2p/12D3KooW9rHfLv4za95C4fPGTUzNk531zRrjaXYJY3pijMEYd3xB",
]


def rpc(url: str, method: str, params: list):
    request = urllib.request.Request(
        url,
        json.dumps(
            {"jsonrpc": "2.0", "id": 1, "method": method, "params": params}
        ).encode(),
        {"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(request, timeout=120) as response:
        reply = json.load(response)
    if "error" in reply:
        sys.exit(f"{url} {method}: {reply['error']}")
    return reply["result"]


def genesis_state_root(url: str) -> str:
    """The genesis state root, checked by rebuilding the genesis header and hashing it."""
    genesis_hash = rpc(url, "chain_getBlockHash", [0])
    header = rpc(url, "chain_getHeader", [genesis_hash])
    if header["digest"]["logs"]:
        sys.exit(f"{url}: genesis header has digest logs; this check assumes none")
    encoded = (
        bytes(32)  # parent hash
        + b"\x00"  # compact block number 0
        + bytes.fromhex(header["stateRoot"][2:])
        + bytes.fromhex(header["extrinsicsRoot"][2:])
        + b"\x00"  # empty digest
    )
    rebuilt = "0x" + hashlib.blake2b(encoded, digest_size=32).hexdigest()
    if rebuilt != genesis_hash:
        sys.exit(f"{url}: rebuilt genesis hash {rebuilt} is not {genesis_hash}")
    return header["stateRoot"]


def checkpoint_number(spec: dict) -> int:
    """Block number of the checkpoint header: SCALE, a 32-byte parent hash then a compact number."""
    header = bytes.fromhex(spec["lightSyncState"]["finalizedBlockHeader"][2:])
    first = header[32]
    mode = first & 0b11
    if mode == 0b00:
        return first >> 2
    if mode == 0b01:
        return int.from_bytes(header[32:34], "little") >> 2
    if mode == 0b10:
        return int.from_bytes(header[32:36], "little") >> 2
    return int.from_bytes(header[33 : 33 + (first >> 2) + 4], "little")


def check_age(relay_rpc: str, max_days: int) -> None:
    spec = json.loads((OUT / "zagros.json").read_text())
    checkpoint = checkpoint_number(spec)
    head = int(rpc(relay_rpc, "chain_getHeader", [])["number"], 16)
    days = (head - checkpoint) * BLOCK_SECONDS / 86400
    print(f"relay checkpoint #{checkpoint}, head #{head}: {days:.1f} days old")
    if days > max_days:
        sys.exit(
            f"the relay checkpoint is older than {max_days} days: run this script and re-sign"
        )


def write(name: str, spec: dict) -> None:
    path = OUT / name
    path.write_text(json.dumps(spec, indent=2) + "\n")
    print(f"{path.relative_to(REPO)}: {path.stat().st_size} bytes")


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--relay-rpc", required=True)
    parser.add_argument("--people-rpc")
    parser.add_argument("--people-spec", help="full People chain specification")
    parser.add_argument("--check-age", type=int, metavar="DAYS")
    args = parser.parse_args()
    if args.check_age is not None:
        check_age(args.relay_rpc, args.check_age)
        return
    if not (args.people_rpc and args.people_spec):
        parser.error(
            "--people-rpc and --people-spec are required to write the specifications"
        )
    OUT.mkdir(exist_ok=True)

    relay = rpc(args.relay_rpc, "sync_state_genSyncSpec", [True])
    if not relay.get("lightSyncState"):
        sys.exit(f"{args.relay_rpc}: the exported specification has no checkpoint")
    relay["genesis"] = {"stateRootHash": genesis_state_root(args.relay_rpc)}
    relay["bootNodes"] = ZAGROS_BOOT_NODES

    # Teyrchains have no checkpoint: the relay chain's finality covers them.
    people = json.loads(Path(args.people_spec).read_text())
    if people.get("relay_chain") != relay["id"]:
        sys.exit(
            f"People names relay chain {people.get('relay_chain')!r}, not {relay['id']!r}"
        )
    people["genesis"] = {"stateRootHash": genesis_state_root(args.people_rpc)}
    people["bootNodes"] = PEOPLE_ZAGROS_BOOT_NODES

    write("zagros.json", relay)
    write("people-zagros.json", people)


if __name__ == "__main__":
    main()
