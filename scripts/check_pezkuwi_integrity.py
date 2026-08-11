#!/usr/bin/env python3
"""Refuse the four regressions this repo has already had.

Each check below exists because the thing it forbids happened, was fixed, and in two
cases came back. They are cheap; the failures they catch are not.

Run from the repository root. Exits non-zero on the first category that fails, after
reporting every problem it found.
"""
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP_CHAINS = ROOT / "chains" / "v22" / "android" / "chains.json"
AH = "Pezkuwi Asset Hub"

errors: list[str] = []


def load(path: Path):
    with path.open(encoding="utf-8") as fh:
        return json.load(fh)


def asset_hub_assets(doc):
    for chain in doc:
        if chain.get("name") == AH:
            yield from chain.get("assets", [])


def extras(asset):
    return asset.get("typeExtras") or {}


# ── 1. Only assets that exist on chain may be declared ───────────────────────
#
# 1001/1002/1003 were declared as DOT/ETH/BTC with icons pointing at Nova's own repo —
# copied from a template, never created on Pezkuwi Asset Hub. Queried 2026-08-11 against
# wss://asset-hub-rpc.pezkuwichain.io, assets.asset() returns None for all three; only
# 1 (PEZ) and 1000 (wUSDT) are Live. Removed twice, back twice.
GHOST = {"1001", "1002", "1003"}
for name in ("chains/chains.json",
             "chains/v22/android/chains.json",
             "chains/v22/android/chains_minimal.json"):
    path = ROOT / name
    if not path.exists():
        continue
    bad = [a.get("symbol") for a in asset_hub_assets(load(path))
           if str(extras(a).get("assetId", "")) in GHOST]
    if bad:
        errors.append(
            f"{name}: declares Asset Hub assets that do not exist on chain: {bad}"
        )

# ── 2. Sufficient assets must say so ─────────────────────────────────────────
#
# Absent, LocalToDomainChainMapper resolves isSufficient to false, the wallet's
# DeadRecipientValidation runs at ERROR level, and every transfer to an account holding
# no HEZ is refused — which is every fresh deposit address, so nobody can fund an
# exchange account. Both assets are sufficient=true on chain.
if APP_CHAINS.exists():
    declared = {
        str(extras(a).get("assetId"))
        for a in asset_hub_assets(load(APP_CHAINS))
        if extras(a).get("isSufficient") is True
    }
    missing = {"1", "1000"} - declared
    if missing:
        errors.append(
            f"{APP_CHAINS.name}: Asset Hub assets {sorted(missing)} must declare "
            f"isSufficient: true — the chain says they are sufficient"
        )

# ── 3. Assets are served from a branch that is actually served ───────────────
#
# 252 icon references once pointed at pending/post-fix-release. Every file they named
# also existed on master, so the dependency bought nothing — and would have broken
# silently the day that branch was tidied away.
grep = subprocess.run(
    [
        "grep",
        "-rlE",
        r"pezkuwi-wallet-utils/(pending|feature|fix|test)/",
        str(ROOT / "chains"),
    ],
    capture_output=True,
    text=True,
)
if grep.stdout.strip():
    files = grep.stdout.strip().splitlines()
    errors.append(
        f"{len(files)} file(s) under chains/ reference a working branch for "
        f"assets; use master, e.g. {Path(files[0]).name}"
    )

# ── 4. A published fixture matches its source ────────────────────────────────
#
# sync_from_nova.py does not copy tests/, so these two are kept in step by hand and
# nothing noticed if they drifted.
for fixture in ("pezkuwi_assets_for_testBalance.json",):
    src = ROOT / "pezkuwi-overlay" / "tests" / fixture
    pub = ROOT / "tests" / fixture
    if src.exists() and pub.exists() and src.read_bytes() != pub.read_bytes():
        errors.append(
            f"tests/{fixture} has drifted from pezkuwi-overlay/tests/{fixture}"
        )

if errors:
    for e in errors:
        print(f"::error::{e}")
    print(f"\n{len(errors)} integrity problem(s).", file=sys.stderr)
    sys.exit(1)

print("Pezkuwi integrity: on-chain assets only, sufficiency declared, "
      "assets served from master, fixture in step with its source.")
