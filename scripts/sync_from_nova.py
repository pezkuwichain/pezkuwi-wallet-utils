#!/usr/bin/env python3
"""
Sync chains and XCM configs from nova-base submodule.
Merges Nova's Polkadot ecosystem with Pezkuwi overlay.
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
    # Get Pezkuwi chain IDs to avoid duplicates
    pezkuwi_ids = {c['chainId'] for c in pezkuwi_chains}

    # Filter out any Nova chains that might conflict
    nova_filtered = [c for c in nova_chains if c['chainId'] not in pezkuwi_ids]

    # Pezkuwi first, then Nova
    return pezkuwi_chains + nova_filtered

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
    """Sync XCM configurations."""
    print("\nSyncing XCM configs...")

    # Copy all XCM versions from nova-base
    for version_dir in sorted(NOVA_BASE.glob("xcm/v*")):
        version = version_dir.name
        output_version_dir = OUTPUT_XCM / version

        if output_version_dir.exists():
            shutil.rmtree(output_version_dir)
        shutil.copytree(version_dir, output_version_dir)
        print(f"  {version}: synced")

    # Copy root XCM files
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
    print("Nova-base Sync Script")
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
