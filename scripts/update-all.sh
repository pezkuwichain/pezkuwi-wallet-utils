#!/bin/bash
# Pezkuwi Wallet Utils - Update Script
# Updates Nova submodule and re-merges all chain configs

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

echo "╔══════════════════════════════════════════════════╗"
echo "║     Pezkuwi Wallet Utils - Full Update           ║"
echo "╚══════════════════════════════════════════════════╝"

cd "$ROOT_DIR"

# Step 1: Update Nova submodule
echo ""
echo "Step 1: Updating Nova submodule..."
git submodule update --remote nova-base
echo "✓ Nova updated to latest"

# Step 2: Show Nova version info
echo ""
echo "Step 2: Nova version info..."
cd nova-base
NOVA_COMMIT=$(git rev-parse --short HEAD)
NOVA_DATE=$(git log -1 --format=%ci)
echo "  Commit: $NOVA_COMMIT"
echo "  Date: $NOVA_DATE"
cd ..

# Step 3: Merge chains
echo ""
echo "Step 3: Merging chain configs..."
python3 scripts/merge-chains.py --version v22

# Step 4: Summary
echo ""
echo "╔══════════════════════════════════════════════════╗"
echo "║                 Update Complete!                 ║"
echo "╚══════════════════════════════════════════════════╝"
echo ""
echo "Nova version: $NOVA_COMMIT ($NOVA_DATE)"
echo ""
echo "Next steps:"
echo "  1. Review changes: git diff chains/"
echo "  2. Test the wallet"
echo "  3. Commit: git add -A && git commit -m 'chore: sync with Nova $NOVA_COMMIT'"
