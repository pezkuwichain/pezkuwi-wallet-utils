#!/usr/bin/env python3
"""
Pezkuwi Wallet Chain Config Merger

This script merges Nova's chain configurations with Pezkuwi-specific chains.
Nova configs are used as the base, Pezkuwi chains are prepended (priority).

Usage:
    python3 merge-chains.py [--version v22] [--output chains/v22/chains.json]
"""

import json
import os
import argparse
from pathlib import Path

# Base paths
SCRIPT_DIR = Path(__file__).parent
ROOT_DIR = SCRIPT_DIR.parent
NOVA_BASE = ROOT_DIR / "nova-base"
PEZKUWI_OVERLAY = ROOT_DIR / "pezkuwi-overlay"
OUTPUT_DIR = ROOT_DIR / "chains"


def load_json(path: Path) -> list | dict:
    """Load JSON file."""
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_json(path: Path, data: list | dict, indent: int = 2):
    """Save JSON file."""
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=indent, ensure_ascii=False)
    print(f"✓ Saved: {path}")


def merge_chains(nova_chains: list, pezkuwi_chains: list) -> list:
    """
    Merge Nova and Pezkuwi chains.
    Pezkuwi chains are prepended to appear first in the wallet.
    Duplicate chainIds are handled (Pezkuwi takes priority).
    """
    # Create a set of Pezkuwi chain IDs to avoid duplicates
    pezkuwi_chain_ids = {c['chainId'] for c in pezkuwi_chains}

    # Filter out any Nova chains that might conflict with Pezkuwi
    nova_filtered = [c for c in nova_chains if c['chainId'] not in pezkuwi_chain_ids]

    # Pezkuwi first, then Nova
    merged = pezkuwi_chains + nova_filtered

    return merged


def merge_version(version: str = "v22"):
    """Merge chains for a specific version."""
    print(f"\n{'='*50}")
    print(f"Merging chains for {version}")
    print(f"{'='*50}")

    # Paths
    nova_chains_path = NOVA_BASE / "chains" / version / "chains.json"
    pezkuwi_chains_path = PEZKUWI_OVERLAY / "chains" / "pezkuwi-chains.json"
    output_path = OUTPUT_DIR / version / "chains.json"

    # Check if Nova chains exist
    if not nova_chains_path.exists():
        print(f"⚠ Nova chains not found: {nova_chains_path}")
        # Try root level chains.json
        nova_chains_path = NOVA_BASE / "chains" / "chains.json"
        if not nova_chains_path.exists():
            print(f"✗ Nova chains not found at root level either")
            return False

    # Load Nova chains
    print(f"Loading Nova chains from: {nova_chains_path}")
    nova_chains = load_json(nova_chains_path)
    print(f"  → {len(nova_chains)} Nova chains loaded")

    # Load Pezkuwi chains
    if not pezkuwi_chains_path.exists():
        print(f"⚠ Pezkuwi chains not found: {pezkuwi_chains_path}")
        pezkuwi_chains = []
    else:
        print(f"Loading Pezkuwi chains from: {pezkuwi_chains_path}")
        pezkuwi_chains = load_json(pezkuwi_chains_path)
        print(f"  → {len(pezkuwi_chains)} Pezkuwi chains loaded")

    # Merge
    merged = merge_chains(nova_chains, pezkuwi_chains)
    print(f"\nMerged result: {len(merged)} total chains")
    print(f"  - Pezkuwi chains: {len(pezkuwi_chains)} (priority)")
    print(f"  - Nova chains: {len(merged) - len(pezkuwi_chains)}")

    # Save
    save_json(output_path, merged)

    # Also copy to root chains.json for compatibility
    root_output = OUTPUT_DIR / "chains.json"
    save_json(root_output, merged)

    return True


def update_nova_submodule():
    """Pull latest Nova changes."""
    import subprocess
    print("\nUpdating Nova submodule...")
    try:
        result = subprocess.run(
            ["git", "submodule", "update", "--remote", "nova-base"],
            cwd=ROOT_DIR,
            capture_output=True,
            text=True
        )
        if result.returncode == 0:
            print("✓ Nova submodule updated")
        else:
            print(f"⚠ Update warning: {result.stderr}")
    except Exception as e:
        print(f"✗ Failed to update submodule: {e}")


def main():
    parser = argparse.ArgumentParser(description="Merge Nova and Pezkuwi chain configs")
    parser.add_argument("--version", "-v", default="v22", help="Chain config version (default: v22)")
    parser.add_argument("--update", "-u", action="store_true", help="Update Nova submodule first")
    parser.add_argument("--all", "-a", action="store_true", help="Merge all versions")
    args = parser.parse_args()

    print("╔══════════════════════════════════════════════════╗")
    print("║     Pezkuwi Wallet Chain Config Merger           ║")
    print("╚══════════════════════════════════════════════════╝")

    # Update Nova if requested
    if args.update:
        update_nova_submodule()

    # Merge
    if args.all:
        versions = ["v21", "v22"]
        for v in versions:
            merge_version(v)
    else:
        merge_version(args.version)

    print("\n✓ Merge complete!")
    print("\nPezkuwi chains will appear FIRST in the wallet.")
    print("Nova ecosystem chains follow after Pezkuwi.")


if __name__ == "__main__":
    main()
