#!/usr/bin/env python3
"""Signed config metadata for the wallet, after TUF.

signed/root.json names the keys: a threshold of root keys may replace the root, the targets key signs
signed/targets.json, which gives the sha256 of every config file the wallet may load. The wallet ships the
first root inside the APK and refuses a config file whose hash the signed targets list does not give.

Every metadata file is an envelope {"signed": base64(payload), "signatures": [{"keyid", "sig"}]}; keyid is the
hex sha256 of the 32-byte public key. An ed25519 key signs the payload bytes. An sr25519 key is a person's
wallet account and signs through the wallet's message signing, which wraps the bytes as <Bytes>payload</Bytes>.

  signed_config.py root    --version N --expires-days D --root-threshold T --root ADDR... --targets-pub FILE
  signed_config.py sign    --key SEED_FILE [--expires-days D]
  signed_config.py check   [--min-days D]
"""

import argparse
import base64
import hashlib
import json
import subprocess
import sys
import time
from pathlib import Path

from cryptography.exceptions import InvalidSignature
from cryptography.hazmat.primitives.asymmetric.ed25519 import (
    Ed25519PrivateKey,
    Ed25519PublicKey,
)
from cryptography.hazmat.primitives.serialization import Encoding, PublicFormat

REPO = Path(__file__).resolve().parent.parent
ROOT_FILE = REPO / "signed" / "root.json"
TARGETS_FILE = REPO / "signed" / "targets.json"

# Everything the wallet may fetch from this repository is JSON outside these trees; the wallet
# refuses any other JSON file from here, so a tree is only left out when nothing reads it.
UNSERVED = ("nova-base/", "pezkuwi-overlay/", "docs/", "signed/")

BASE58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
DAY = 86400


def key_id(public: bytes) -> str:
    return hashlib.sha256(public).hexdigest()


def ss58_public_key(address: str) -> bytes:
    """The 32-byte account key of a single-byte-prefix SS58 address, checksum verified."""
    n = 0
    for c in address:
        n = n * 58 + BASE58.index(c)
    raw = n.to_bytes(35, "big")
    if raw[0] >= 64:
        raise ValueError(f"{address}: only single-byte SS58 prefixes are handled")
    checksum = hashlib.blake2b(b"SS58PRE" + raw[:33], digest_size=64).digest()[:2]
    if checksum != raw[33:]:
        raise ValueError(f"{address}: bad SS58 checksum")
    return raw[1:33]


def canonical(payload: dict) -> bytes:
    return json.dumps(payload, sort_keys=True, separators=(",", ":")).encode()


def envelope(payload: bytes, signatures: list) -> str:
    return (
        json.dumps(
            {"signed": base64.b64encode(payload).decode(), "signatures": signatures},
            indent=1,
        )
        + "\n"
    )


def read_envelope(path: Path):
    env = json.loads(path.read_text())
    payload = base64.b64decode(env["signed"])
    return payload, json.loads(payload), env["signatures"]


def root_file(version: int) -> Path:
    """Root 1 is the one the APK carries; each later root is published beside it, for the wallet to follow."""
    return ROOT_FILE if version == 1 else ROOT_FILE.with_name(f"root.{version}.json")


def current_root() -> dict:
    """The newest published root. Signatures on later roots are the wallet's to check, not this tool's."""
    _, root, _ = read_envelope(ROOT_FILE)
    while root_file(root["version"] + 1).exists():
        _, root, _ = read_envelope(root_file(root["version"] + 1))
    return root


def served_files() -> dict:
    """Repository path -> sha256 of every tracked JSON file the wallet may fetch."""
    tracked = subprocess.run(
        ["git", "-C", str(REPO), "ls-files", "-z", "*.json"],
        check=True,
        capture_output=True,
    ).stdout.split(b"\0")
    files = {}
    for name in sorted(p.decode() for p in tracked if p):
        if not name.startswith(UNSERVED):
            files[name] = hashlib.sha256((REPO / name).read_bytes()).hexdigest()
    return files


def cmd_root(args):
    keys = {}
    root_ids = []
    for address in args.root:
        public = ss58_public_key(address)
        keys[key_id(public)] = {
            "scheme": "sr25519",
            "public": base64.b64encode(public).decode(),
        }
        root_ids.append(key_id(public))
    targets_public = base64.b64decode(Path(args.targets_pub).read_text().strip())
    if len(targets_public) != 32:
        sys.exit("targets public key must be 32 bytes")
    keys[key_id(targets_public)] = {
        "scheme": "ed25519",
        "public": base64.b64encode(targets_public).decode(),
    }
    if not 1 <= args.root_threshold <= len(root_ids):
        sys.exit("root threshold out of range")

    payload = {
        "type": "root",
        "version": args.version,
        "expires": int(time.time()) + args.expires_days * DAY,
        "keys": keys,
        "root": {"keyids": sorted(root_ids), "threshold": args.root_threshold},
        "targets": {"keyids": [key_id(targets_public)], "threshold": 1},
    }
    path = root_file(args.version)
    path.parent.mkdir(exist_ok=True)
    # The first root is trusted because the APK carries it; a later one needs the signatures of a threshold
    # of the previous root keys and of its own, collected from the holders' wallets and added to this file
    # before it is published.
    path.write_text(envelope(canonical(payload), []))
    print(f"wrote {path.relative_to(REPO)} version {args.version}")


def cmd_sign(args):
    private = Ed25519PrivateKey.from_private_bytes(
        bytes.fromhex(Path(args.key).read_text().strip())
    )
    public = private.public_key().public_bytes(Encoding.Raw, PublicFormat.Raw)
    root = current_root()
    if key_id(public) not in root["targets"]["keyids"]:
        sys.exit(f"key {key_id(public)} is not a targets key of root {root['version']}")

    version = 1
    if TARGETS_FILE.exists():
        version = read_envelope(TARGETS_FILE)[1]["version"] + 1
    payload = canonical(
        {
            "type": "targets",
            "version": version,
            "expires": int(time.time()) + args.expires_days * DAY,
            "files": served_files(),
        }
    )
    signature = private.sign(payload)
    TARGETS_FILE.write_text(
        envelope(
            payload,
            [{"keyid": key_id(public), "sig": base64.b64encode(signature).decode()}],
        )
    )
    print(
        f"signed {TARGETS_FILE.relative_to(REPO)} version {version}, {len(json.loads(payload)['files'])} files"
    )


def cmd_check(args):
    errors = []
    root = current_root()
    payload, targets, signatures = read_envelope(TARGETS_FILE)
    now = int(time.time())

    valid = set()
    for sig in signatures:
        key = root["keys"].get(sig["keyid"])
        if (
            sig["keyid"] not in root["targets"]["keyids"]
            or key is None
            or key["scheme"] != "ed25519"
        ):
            continue
        try:
            Ed25519PublicKey.from_public_bytes(base64.b64decode(key["public"])).verify(
                base64.b64decode(sig["sig"]), payload
            )
            valid.add(sig["keyid"])
        except InvalidSignature:
            pass
    if len(valid) < root["targets"]["threshold"]:
        errors.append(
            f"targets: {len(valid)} of {root['targets']['threshold']} required signatures"
        )

    for what, meta in (("root", root), ("targets", targets)):
        days = (meta["expires"] - now) // DAY
        if days < args.min_days:
            errors.append(
                f"{what} {meta['version']} expires in {days} days (re-sign before {args.min_days})"
            )

    signed = targets["files"]
    actual = served_files()
    for name in sorted(actual.keys() | signed.keys()):
        if name not in signed:
            errors.append(f"{name}: not in targets")
        elif name not in actual:
            errors.append(f"{name}: in targets but not in the tree")
        elif signed[name] != actual[name]:
            errors.append(f"{name}: hash differs from targets")

    for e in errors:
        print(f"::error::{e}")
    if errors:
        print("Run: python3 scripts/signed_config.py sign --key <targets seed>")
        sys.exit(1)
    print(
        f"targets {targets['version']} signed, {len(signed)} files match, root {root['version']}"
    )


def main():
    parser = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    )
    sub = parser.add_subparsers(dest="command", required=True)

    root = sub.add_parser("root")
    root.add_argument("--version", type=int, required=True)
    root.add_argument("--expires-days", type=int, required=True)
    root.add_argument("--root-threshold", type=int, required=True)
    root.add_argument("--root", nargs="+", required=True)
    root.add_argument("--targets-pub", required=True)
    root.set_defaults(run=cmd_root)

    sign = sub.add_parser("sign")
    sign.add_argument("--key", required=True)
    sign.add_argument("--expires-days", type=int, default=365)
    sign.set_defaults(run=cmd_sign)

    check = sub.add_parser("check")
    check.add_argument("--min-days", type=int, default=30)
    check.set_defaults(run=cmd_check)

    args = parser.parse_args()
    args.run(args)


if __name__ == "__main__":
    main()
