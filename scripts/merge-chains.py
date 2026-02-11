#!/usr/bin/env python3
"""
Pezkuwi Wallet Chain Config Merger

This script merges Nova's chain configurations with Pezkuwi-specific chains.
Uses a blacklist to exclude broken/paused chains.

Usage:
    python3 merge-chains.py [--version v22] [--full] [--update]

Options:
    --full    Include ALL Nova chains (including broken ones) - NOT recommended
    --update  Update Nova submodule first
"""

import json
import argparse
from pathlib import Path

# Base paths
SCRIPT_DIR = Path(__file__).parent
ROOT_DIR = SCRIPT_DIR.parent
NOVA_BASE = ROOT_DIR / "nova-base"
PEZKUWI_OVERLAY = ROOT_DIR / "pezkuwi-overlay"
OUTPUT_DIR = ROOT_DIR / "chains"

# Chains with known broken RPC endpoints
BROKEN_CHAIN_KEYWORDS = [
    'aleph zero',
    'alephzero',
    'quartz',
    'invarch',
    'exosama',
    'deepbrain',
]

# These chains have broken endpoints or are not useful
EXCLUDED_CHAIN_IDS = {
    # AlephZero - DNS failures
    '70255b4d28de0fc4e1a193d7e175ad1ccef431598211c55538f1018651a0344e',
    # Quartz - DNS failures
    'cd4d732201ebe5d6b014edda071c4203e16867305332f43c2e25ae6c9a1b7e6f',
    # InvArch - PAUSED
    '31a7d8914fb31c249b972f18c115f1e22b4b039abbcb03c73b6774c5642f9efe',
    # Aleph Zero EVM - PAUSED
    'eip155:41455',
    # Darwinia Crab - DNS failure
    '86e49c195aeae7c5c4a86ced251f1a28c67b3c35d8289c387ede1776cdd88b24',
    # DeepBrain - SSL certificate mismatch
    '03aa6b475a03f8baf7f83e448513b00eaab03aefa4ed64bd1d31160dce028add',
    # Exosama - 403 Forbidden
    'eip155:2109',
}


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


def is_chain_excluded(chain: dict) -> tuple[bool, str]:
    """
    Check if a chain should be excluded.

    Returns:
        (excluded: bool, reason: str)
    """
    chain_id = chain.get('chainId', '')
    name = chain.get('name', '')
    options = chain.get('options', [])

    # Check explicit exclusion list
    if chain_id in EXCLUDED_CHAIN_IDS:
        return True, "broken RPC"

    # Check for PAUSED chains
    if 'PAUSED' in name:
        return True, "PAUSED"

    # Check for testnets (but NOT Pezkuwi testnets)
    if 'testnet' in options and 'pezkuwi' not in name.lower() and 'zagros' not in name.lower():
        return True, "testnet"

    # Check for broken chain keywords
    name_lower = name.lower()
    for keyword in BROKEN_CHAIN_KEYWORDS:
        if keyword in name_lower:
            return True, f"broken ({keyword})"

    return False, ""


def merge_chains(nova_chains: list, pezkuwi_chains: list, filter_broken: bool = True) -> tuple[list, dict]:
    """
    Merge Nova and Pezkuwi chains.

    Args:
        nova_chains: Nova's chain list
        pezkuwi_chains: Pezkuwi's chain list
        filter_broken: Whether to filter out broken chains

    Returns:
        (merged_list, stats_dict)
    """
    # Create a set of Pezkuwi chain IDs to avoid duplicates
    pezkuwi_chain_ids = {c['chainId'] for c in pezkuwi_chains}

    stats = {
        'pezkuwi': len(pezkuwi_chains),
        'nova_total': len(nova_chains),
        'nova_included': 0,
        'excluded_paused': 0,
        'excluded_testnet': 0,
        'excluded_broken': 0,
        'excluded_duplicate': 0,
    }

    nova_filtered = []
    excluded_chains = []

    for chain in nova_chains:
        chain_id = chain.get('chainId', '')

        # Skip duplicates
        if chain_id in pezkuwi_chain_ids:
            stats['excluded_duplicate'] += 1
            continue

        # Check if should be excluded
        if filter_broken:
            excluded, reason = is_chain_excluded(chain)
            if excluded:
                excluded_chains.append((chain.get('name', 'Unknown'), reason))
                if 'PAUSED' in reason:
                    stats['excluded_paused'] += 1
                elif 'testnet' in reason:
                    stats['excluded_testnet'] += 1
                else:
                    stats['excluded_broken'] += 1
                continue

        nova_filtered.append(chain)
        stats['nova_included'] += 1

    # Pezkuwi first, then Nova
    merged = pezkuwi_chains + nova_filtered
    stats['total'] = len(merged)
    stats['excluded_list'] = excluded_chains

    return merged, stats


def merge_version(version: str = "v22", filter_broken: bool = True):
    """Merge chains for a specific version."""
    print(f"\n{'='*60}")
    print(f"Merging chains for {version}")
    print(f"Mode: {'FILTERED (exclude broken)' if filter_broken else 'FULL (all chains)'}")
    print(f"{'='*60}")

    # Paths
    nova_chains_path = NOVA_BASE / "chains" / version / "chains.json"
    pezkuwi_chains_path = PEZKUWI_OVERLAY / "chains" / "pezkuwi-chains.json"
    output_path = OUTPUT_DIR / version / "chains.json"

    # Check if Nova chains exist
    if not nova_chains_path.exists():
        print(f"⚠ Nova chains not found: {nova_chains_path}")
        nova_chains_path = NOVA_BASE / "chains" / "chains.json"
        if not nova_chains_path.exists():
            print(f"✗ Nova chains not found at root level either")
            return False

    # Load Nova chains
    print(f"\nLoading Nova chains from: {nova_chains_path}")
    nova_chains = load_json(nova_chains_path)
    print(f"  → {len(nova_chains)} Nova chains available")

    # Load Pezkuwi chains
    if not pezkuwi_chains_path.exists():
        print(f"⚠ Pezkuwi chains not found: {pezkuwi_chains_path}")
        pezkuwi_chains = []
    else:
        print(f"Loading Pezkuwi chains from: {pezkuwi_chains_path}")
        pezkuwi_chains = load_json(pezkuwi_chains_path)
        print(f"  → {len(pezkuwi_chains)} Pezkuwi chains loaded")

    # Merge
    merged, stats = merge_chains(nova_chains, pezkuwi_chains, filter_broken)

    # Print stats
    print(f"\n{'─'*40}")
    print("📊 Merge Statistics:")
    print(f"{'─'*40}")
    print(f"  Pezkuwi chains:     {stats['pezkuwi']:3} (priority)")
    print(f"  Nova available:     {stats['nova_total']:3}")
    print(f"  Nova included:      {stats['nova_included']:3}")
    print(f"{'─'*40}")

    if filter_broken:
        print(f"  Excluded (PAUSED):  {stats['excluded_paused']:3}")
        print(f"  Excluded (testnet): {stats['excluded_testnet']:3}")
        print(f"  Excluded (broken):  {stats['excluded_broken']:3}")
        print(f"  Excluded (dupes):   {stats['excluded_duplicate']:3}")
        print(f"{'─'*40}")

    print(f"  TOTAL OUTPUT:       {stats['total']:3} chains")
    print(f"{'─'*40}")

    # Save
    save_json(output_path, merged)

    # Also copy to root chains.json for compatibility
    root_output = OUTPUT_DIR / "chains.json"
    save_json(root_output, merged)

    # Also save to android subdirectory (this is what the app fetches)
    android_output = OUTPUT_DIR / version / "android" / "chains.json"
    save_json(android_output, merged)

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
    parser.add_argument("--full", "-f", action="store_true", help="Include ALL chains (no filtering)")
    parser.add_argument("--all", "-a", action="store_true", help="Merge all versions")
    args = parser.parse_args()

    print("╔════════════════════════════════════════════════════════════╗")
    print("║       Pezkuwi Wallet Chain Config Merger                   ║")
    print("║       Nova Base + Pezkuwi Overlay Architecture             ║")
    print("╚════════════════════════════════════════════════════════════╝")

    # Update Nova if requested
    if args.update:
        update_nova_submodule()

    # Filter by default (unless --full specified)
    filter_broken = not args.full

    # Merge
    if args.all:
        versions = ["v21", "v22"]
        for v in versions:
            merge_version(v, filter_broken)
    else:
        merge_version(args.version, filter_broken)

    print("\n" + "="*60)
    print("✓ Merge complete!")
    print("="*60)

    if filter_broken:
        print("\n📋 Filtered mode:")
        print("   - PAUSED chains excluded")
        print("   - Testnets excluded (except Pezkuwi)")
        print("   - Broken RPC chains excluded")
        print("\n💡 To include all 98 Nova chains, run with --full flag")


if __name__ == "__main__":
    main()
