#!/usr/bin/env python3
"""
Merge Nova (Polkadot ecosystem) + Pezkuwi overlay.

Sources:
  A: nova-base/     -> Polkadot ecosystem (98+ chains, XCM, config) - git submodule
  B: pezkuwi-overlay/ -> Pezkuwi ecosystem (4 chains, XCM, config) - we maintain

Output:
  chains/  -> Merged chains (Pezkuwi first, then Nova)
  xcm/     -> Merged XCM (Nova base + Pezkuwi entries added to each section)
  icons/   -> Merged icons (Pezkuwi overrides Nova)
  staking/ -> Merged global config (Nova base URLs + Pezkuwi overrides)

Rules:
  - NOTHING gets deleted
  - Pezkuwi entries are ADDED to Nova's base
  - Pezkuwi chains appear first in the list
"""

import json
import shutil
from pathlib import Path

ROOT = Path(__file__).parent.parent
NOVA_BASE = ROOT / "nova-base"
PEZKUWI_OVERLAY = ROOT / "pezkuwi-overlay"
OUTPUT_CHAINS = ROOT / "chains"
OUTPUT_XCM = ROOT / "xcm"
OUTPUT_STAKING = ROOT / "staking"


def load_json(path: Path) -> dict | list:
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_json(path: Path, data: dict | list):
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')


def merge_chains(nova_chains: list, pezkuwi_chains: list) -> list:
    """Pezkuwi chains first, then Nova chains (no duplicates)."""
    pezkuwi_ids = {c['chainId'] for c in pezkuwi_chains}
    nova_filtered = [c for c in nova_chains if c['chainId'] not in pezkuwi_ids]
    return pezkuwi_chains + nova_filtered


def merge_xcm(nova_xcm: dict, pezkuwi_xcm: dict) -> dict:
    """
    Merge XCM: Nova base + Pezkuwi entries added to EACH section.

    Sections: assetsLocation, instructions, networkDeliveryFee, networkBaseWeight, chains
    """
    merged = {}

    # 1. assetsLocation - dict, Pezkuwi overrides/adds
    merged['assetsLocation'] = {
        **nova_xcm.get('assetsLocation', {}),
        **pezkuwi_xcm.get('assetsLocation', {})
    }

    # 2. instructions - dict, keep Nova's (Pezkuwi uses same instruction types)
    if 'instructions' in nova_xcm:
        merged['instructions'] = nova_xcm['instructions']

    # 3. networkDeliveryFee - dict keyed by chainId, Pezkuwi adds entries
    merged['networkDeliveryFee'] = {
        **nova_xcm.get('networkDeliveryFee', {}),
        **pezkuwi_xcm.get('networkDeliveryFee', {})
    }

    # 4. networkBaseWeight - dict keyed by chainId, Pezkuwi adds entries
    merged['networkBaseWeight'] = {
        **nova_xcm.get('networkBaseWeight', {}),
        **pezkuwi_xcm.get('networkBaseWeight', {})
    }

    # 5. chains - list, Pezkuwi first then Nova (no duplicates)
    pezkuwi_chain_ids = {c['chainId'] for c in pezkuwi_xcm.get('chains', [])}
    nova_chains_filtered = [
        c for c in nova_xcm.get('chains', [])
        if c['chainId'] not in pezkuwi_chain_ids
    ]
    merged['chains'] = pezkuwi_xcm.get('chains', []) + nova_chains_filtered

    return merged


def sync_chains():
    print("Syncing chains...")

    pezkuwi_chains_file = PEZKUWI_OVERLAY / "chains" / "pezkuwi-chains.json"
    pezkuwi_chains = load_json(pezkuwi_chains_file) if pezkuwi_chains_file.exists() else []
    print(f"  Pezkuwi: {len(pezkuwi_chains)} chains")

    for version_dir in sorted(NOVA_BASE.glob("chains/v*")):
        version = version_dir.name
        output_dir = OUTPUT_CHAINS / version

        # chains.json
        nova_file = version_dir / "chains.json"
        if nova_file.exists():
            nova_chains = load_json(nova_file)
            merged = merge_chains(nova_chains, pezkuwi_chains)
            save_json(output_dir / "chains.json", merged)
            print(f"  {version}/chains.json: {len(pezkuwi_chains)} + {len(nova_chains)} = {len(merged)}")

        # chains_dev.json
        nova_dev = version_dir / "chains_dev.json"
        if nova_dev.exists():
            nova_chains = load_json(nova_dev)
            merged = merge_chains(nova_chains, pezkuwi_chains)
            save_json(output_dir / "chains_dev.json", merged)

        # android/chains.json
        android_dir = output_dir / "android"
        if nova_file.exists():
            save_json(android_dir / "chains.json", merge_chains(load_json(nova_file), pezkuwi_chains))

        # preConfigured (copy from Nova)
        nova_preconfig = version_dir / "preConfigured"
        if nova_preconfig.exists():
            output_preconfig = output_dir / "preConfigured"
            if output_preconfig.exists():
                shutil.rmtree(output_preconfig)
            shutil.copytree(nova_preconfig, output_preconfig)


def sync_xcm():
    print("\nSyncing XCM...")

    # Load Pezkuwi XCM overlays
    pezkuwi_xcm_file = PEZKUWI_OVERLAY / "xcm" / "pezkuwi-xcm.json"
    pezkuwi_xcm_dynamic_file = PEZKUWI_OVERLAY / "xcm" / "pezkuwi-xcm-dynamic.json"

    pezkuwi_xcm = load_json(pezkuwi_xcm_file) if pezkuwi_xcm_file.exists() else {}
    pezkuwi_xcm_dynamic = load_json(pezkuwi_xcm_dynamic_file) if pezkuwi_xcm_dynamic_file.exists() else {}

    print(f"  Pezkuwi XCM: {len(pezkuwi_xcm.get('chains', []))} chains")
    print(f"  Pezkuwi XCM dynamic: {len(pezkuwi_xcm_dynamic.get('chains', []))} chains")

    for version_dir in sorted(NOVA_BASE.glob("xcm/v*")):
        version = version_dir.name
        output_dir = OUTPUT_XCM / version
        output_dir.mkdir(parents=True, exist_ok=True)

        for nova_file in version_dir.glob("*.json"):
            filename = nova_file.name
            nova_data = load_json(nova_file)

            # Choose overlay based on filename
            if 'dynamic' in filename:
                overlay = pezkuwi_xcm_dynamic
            else:
                overlay = pezkuwi_xcm

            merged = merge_xcm(nova_data, overlay)
            save_json(output_dir / filename, merged)
            print(f"  {version}/{filename}: {len(merged.get('chains', []))} chains")

    # Root XCM files
    for xcm_file in NOVA_BASE.glob("xcm/*.json"):
        shutil.copy(xcm_file, OUTPUT_XCM / xcm_file.name)


def sync_icons():
    print("\nSyncing icons...")

    nova_icons = NOVA_BASE / "icons"
    pezkuwi_icons = PEZKUWI_OVERLAY / "icons"
    output_icons = ROOT / "icons"

    # Copy Nova icons (don't overwrite existing)
    if nova_icons.exists():
        for icon_dir in nova_icons.iterdir():
            if icon_dir.is_dir():
                output_dir = output_icons / icon_dir.name
                output_dir.mkdir(parents=True, exist_ok=True)
                for icon_file in icon_dir.rglob("*"):
                    if icon_file.is_file():
                        rel = icon_file.relative_to(icon_dir)
                        target = output_dir / rel
                        if not target.exists():
                            target.parent.mkdir(parents=True, exist_ok=True)
                            shutil.copy(icon_file, target)

    # Copy Pezkuwi icons (override Nova)
    if pezkuwi_icons.exists():
        for icon_file in pezkuwi_icons.rglob("*"):
            if icon_file.is_file():
                rel = icon_file.relative_to(pezkuwi_icons)
                target = output_icons / rel
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy(icon_file, target)
                print(f"  Pezkuwi: {rel}")


def merge_config(nova_config: dict, pezkuwi_overlay: dict) -> dict:
    """Deep merge: Nova base config + Pezkuwi overlay (Pezkuwi wins on conflicts)."""
    merged = dict(nova_config)
    for key, value in pezkuwi_overlay.items():
        if key in merged and isinstance(merged[key], dict) and isinstance(value, dict):
            merged[key] = {**merged[key], **value}
        else:
            merged[key] = value
    return merged


def sync_config():
    """
    Merge global config:
      A: nova-base/staking/global_config.json       (Nova SubQuery URLs)
       + nova-base/global/config.json               (Nova multisig/proxy URLs)
      B: pezkuwi-overlay/config/global_config_overlay.json (Pezkuwi stakingApiOverrides)
      C: staking/global_config.json                 (output - what the app fetches)
    """
    print("\nSyncing global config...")

    overlay_file = PEZKUWI_OVERLAY / "config" / "global_config_overlay.json"
    overlay = load_json(overlay_file) if overlay_file.exists() else {}

    # Production: nova-base/staking + nova-base/global + pezkuwi overlay
    for suffix in ("", "_dev"):
        nova_staking = NOVA_BASE / "staking" / f"global_config{suffix}.json"
        nova_global = NOVA_BASE / "global" / f"config{suffix}.json"

        base = {}
        if nova_global.exists():
            base.update(load_json(nova_global))
        if nova_staking.exists():
            base.update(load_json(nova_staking))

        merged = merge_config(base, overlay)
        output = OUTPUT_STAKING / f"global_config{suffix}.json"
        save_json(output, merged)

        label = "production" if suffix == "" else "dev"
        print(f"  {label}: {list(merged.keys())}")

    # Copy validators from Nova (if present)
    nova_validators = NOVA_BASE / "staking" / "nova_validators.json"
    if nova_validators.exists():
        shutil.copy(nova_validators, OUTPUT_STAKING / "nova_validators.json")

    nova_validators_dir = NOVA_BASE / "staking" / "validators"
    if nova_validators_dir.exists():
        output_validators = OUTPUT_STAKING / "validators"
        if output_validators.exists():
            shutil.rmtree(output_validators)
        shutil.copytree(nova_validators_dir, output_validators)


def main():
    print("=" * 60)
    print("Nova + Pezkuwi Merge")
    print("=" * 60)
    print(f"Nova (A):    {NOVA_BASE}")
    print(f"Pezkuwi (B): {PEZKUWI_OVERLAY}")
    print()

    if not NOVA_BASE.exists():
        print("ERROR: nova-base not found!")
        print("Run: git submodule update --init --recursive")
        return 1

    sync_chains()
    sync_xcm()
    sync_icons()
    sync_config()

    print("\n" + "=" * 60)
    print("Done!")
    print("=" * 60)
    return 0


if __name__ == "__main__":
    exit(main())
