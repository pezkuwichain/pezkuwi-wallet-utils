#!/usr/bin/env python3
"""
Sync and merge Nova-base with Pezkuwi overlay.

Architecture:
- nova-base/     : Git submodule with Nova's Polkadot ecosystem (98+ chains)
- pezkuwi-overlay/ : Pezkuwi ecosystem configs (3 chains + XCM)
- Output dirs    : Merged configs ready for wallet use

Merge rules:
- Chains: Pezkuwi chains first, then Nova chains
- XCM: Pezkuwi XCM entries merged with Nova XCM (Pezkuwi takes priority)
- Icons: Pezkuwi icons override Nova icons
- NOTHING GETS DELETED - only merge operations
"""

import json
import shutil
from pathlib import Path

# Paths
ROOT = Path(__file__).parent.parent
NOVA_BASE = ROOT / "nova-base"
PEZKUWI_OVERLAY = ROOT / "pezkuwi-overlay"
OUTPUT_CHAINS = ROOT / "chains"
OUTPUT_XCM = ROOT / "xcm"


def load_json(path: Path) -> list | dict:
    """Load JSON file."""
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_json(path: Path, data: list | dict):
    """Save JSON file with pretty formatting."""
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')


def merge_chains(nova_chains: list, pezkuwi_chains: list) -> list:
    """
    Merge chains: Pezkuwi chains first, then Nova chains.
    Pezkuwi chains take priority (appear first in list).
    """
    pezkuwi_ids = {c['chainId'] for c in pezkuwi_chains}
    nova_filtered = [c for c in nova_chains if c['chainId'] not in pezkuwi_ids]
    return pezkuwi_chains + nova_filtered


def merge_xcm(nova_xcm: dict, pezkuwi_xcm: dict) -> dict:
    """
    Merge XCM configs: Pezkuwi entries take priority.

    Structure:
    - assetsLocation: dict of asset locations (merge, Pezkuwi overrides)
    - chains: list of chain configs (Pezkuwi first, then Nova)
    - instructions: dict (keep from Nova, Pezkuwi can override)
    """
    merged = {}

    # Merge assetsLocation (Pezkuwi overrides Nova)
    merged['assetsLocation'] = {
        **nova_xcm.get('assetsLocation', {}),
        **pezkuwi_xcm.get('assetsLocation', {})
    }

    # Merge instructions if present (Pezkuwi overrides Nova)
    if 'instructions' in nova_xcm or 'instructions' in pezkuwi_xcm:
        merged['instructions'] = {
            **nova_xcm.get('instructions', {}),
            **pezkuwi_xcm.get('instructions', {})
        }

    # Merge chains: Pezkuwi first, then Nova (no duplicates)
    pezkuwi_chain_ids = {c['chainId'] for c in pezkuwi_xcm.get('chains', [])}
    nova_chains_filtered = [
        c for c in nova_xcm.get('chains', [])
        if c['chainId'] not in pezkuwi_chain_ids
    ]
    merged['chains'] = pezkuwi_xcm.get('chains', []) + nova_chains_filtered

    return merged


def sync_chains():
    """Sync chain configurations."""
    print("Syncing chains...")

    # Load Pezkuwi overlay chains
    pezkuwi_chains_file = PEZKUWI_OVERLAY / "chains" / "pezkuwi-chains.json"
    pezkuwi_chains = load_json(pezkuwi_chains_file) if pezkuwi_chains_file.exists() else []
    print(f"  Loaded {len(pezkuwi_chains)} Pezkuwi chains")

    # Sync each version
    for version_dir in sorted(NOVA_BASE.glob("chains/v*")):
        version = version_dir.name
        output_version_dir = OUTPUT_CHAINS / version

        # Sync chains.json
        nova_chains_file = version_dir / "chains.json"
        if nova_chains_file.exists():
            nova_chains = load_json(nova_chains_file)
            merged = merge_chains(nova_chains, pezkuwi_chains)
            save_json(output_version_dir / "chains.json", merged)
            print(f"  {version}/chains.json: {len(merged)} chains ({len(pezkuwi_chains)} Pezkuwi + {len(nova_chains)} Nova)")

        # Sync chains_dev.json
        nova_dev_file = version_dir / "chains_dev.json"
        if nova_dev_file.exists():
            nova_dev = load_json(nova_dev_file)
            merged_dev = merge_chains(nova_dev, pezkuwi_chains)
            save_json(output_version_dir / "chains_dev.json", merged_dev)
            print(f"  {version}/chains_dev.json: {len(merged_dev)} chains")

        # Copy preConfigured directory if exists
        nova_preconfig = version_dir / "preConfigured"
        if nova_preconfig.exists():
            output_preconfig = output_version_dir / "preConfigured"
            if output_preconfig.exists():
                shutil.rmtree(output_preconfig)
            shutil.copytree(nova_preconfig, output_preconfig)
            print(f"  {version}/preConfigured: copied")

        # Create android subdirectory with same merged chains
        android_dir = output_version_dir / "android"
        android_dir.mkdir(parents=True, exist_ok=True)
        if nova_chains_file.exists():
            save_json(android_dir / "chains.json", merged)
            print(f"  {version}/android/chains.json: created")


def sync_xcm():
    """Sync XCM configurations by MERGING Nova and Pezkuwi."""
    print("\nSyncing XCM configs...")

    # Load Pezkuwi XCM configs
    pezkuwi_xcm_file = PEZKUWI_OVERLAY / "xcm" / "pezkuwi-xcm.json"
    pezkuwi_xcm_dynamic_file = PEZKUWI_OVERLAY / "xcm" / "pezkuwi-xcm-dynamic.json"

    pezkuwi_xcm = load_json(pezkuwi_xcm_file) if pezkuwi_xcm_file.exists() else {}
    pezkuwi_xcm_dynamic = load_json(pezkuwi_xcm_dynamic_file) if pezkuwi_xcm_dynamic_file.exists() else {}

    print(f"  Pezkuwi XCM: {len(pezkuwi_xcm.get('chains', []))} chains, {len(pezkuwi_xcm.get('assetsLocation', {}))} assets")

    # Sync each XCM version
    for version_dir in sorted(NOVA_BASE.glob("xcm/v*")):
        version = version_dir.name
        output_version_dir = OUTPUT_XCM / version
        output_version_dir.mkdir(parents=True, exist_ok=True)

        # Process each JSON file in the version directory
        for nova_file in version_dir.glob("*.json"):
            filename = nova_file.name
            nova_data = load_json(nova_file)

            # Choose appropriate Pezkuwi overlay based on filename
            if 'dynamic' in filename:
                pezkuwi_data = pezkuwi_xcm_dynamic
            else:
                pezkuwi_data = pezkuwi_xcm

            # Merge Nova + Pezkuwi
            merged = merge_xcm(nova_data, pezkuwi_data)
            save_json(output_version_dir / filename, merged)
            print(f"  {version}/{filename}: merged ({len(merged.get('chains', []))} chains)")

    # Copy root XCM files (these don't need Pezkuwi merge)
    for xcm_file in NOVA_BASE.glob("xcm/*.json"):
        shutil.copy(xcm_file, OUTPUT_XCM / xcm_file.name)
        print(f"  {xcm_file.name}: copied")


def sync_icons():
    """Sync icon files from nova-base, preserving Pezkuwi icons."""
    print("\nSyncing icons...")

    nova_icons = NOVA_BASE / "icons"
    pezkuwi_icons = PEZKUWI_OVERLAY / "icons"
    output_icons = ROOT / "icons"

    # Copy Nova icons
    for icon_dir in nova_icons.iterdir():
        if icon_dir.is_dir():
            output_dir = output_icons / icon_dir.name
            if not output_dir.exists():
                shutil.copytree(icon_dir, output_dir)
            else:
                # Merge - copy Nova files that don't exist
                for icon_file in icon_dir.rglob("*"):
                    if icon_file.is_file():
                        rel_path = icon_file.relative_to(icon_dir)
                        target = output_dir / rel_path
                        if not target.exists():
                            target.parent.mkdir(parents=True, exist_ok=True)
                            shutil.copy(icon_file, target)

    # Copy Pezkuwi icons (override Nova if exists)
    if pezkuwi_icons.exists():
        for icon_file in pezkuwi_icons.rglob("*"):
            if icon_file.is_file():
                rel_path = icon_file.relative_to(pezkuwi_icons)
                target = output_icons / rel_path
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy(icon_file, target)
                print(f"  Pezkuwi icon: {rel_path}")


def main():
    print("=" * 60)
    print("Nova-base + Pezkuwi Overlay Sync")
    print("=" * 60)
    print(f"Nova-base: {NOVA_BASE}")
    print(f"Pezkuwi overlay: {PEZKUWI_OVERLAY}")
    print()

    if not NOVA_BASE.exists():
        print("ERROR: nova-base submodule not found!")
        print("Run: git submodule update --init --recursive")
        return 1

    sync_chains()
    sync_xcm()
    sync_icons()

    print("\n" + "=" * 60)
    print("Sync complete!")
    print("=" * 60)
    return 0


if __name__ == "__main__":
    exit(main())
