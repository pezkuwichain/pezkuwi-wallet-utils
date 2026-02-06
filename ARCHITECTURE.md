# Pezkuwi Wallet Utils - Architecture

## Nova Base + Pezkuwi Overlay

This repository uses a **layered architecture** that automatically syncs with Nova Wallet's chain configurations while maintaining Pezkuwi-specific customizations.

```
┌─────────────────────────────────────────────────────────┐
│                  pezkuwi-wallet-utils                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  nova-base/              (Git Submodule - AUTO SYNC)    │
│  ├── chains/v22/chains.json   → 98+ Polkadot chains     │
│  ├── icons/                   → Chain icons             │
│  └── ...                      → Other Nova configs      │
│                                                          │
│  pezkuwi-overlay/        (Manual - Pezkuwi Team)        │
│  ├── chains/pezkuwi-chains.json  → 3 Pezkuwi chains     │
│  ├── icons/                       → Pezkuwi icons       │
│  ├── types/                       → Custom type defs    │
│  └── config/                      → Overrides           │
│                                                          │
│  chains/v22/chains.json  (Generated - DO NOT EDIT)      │
│  └── Merged: Pezkuwi (first) + Nova chains              │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Directory Structure

```
pezkuwi-wallet-utils/
├── nova-base/                 # Git submodule (READ-ONLY)
│   └── chains/v22/chains.json # Nova's official chain configs
│
├── pezkuwi-overlay/           # Pezkuwi-specific configs
│   ├── chains/
│   │   └── pezkuwi-chains.json  # Pezkuwi, Asset Hub, People
│   ├── icons/                   # Pezkuwi chain/token icons
│   ├── types/                   # pezsp_* type definitions
│   └── config/                  # API overrides, settings
│
├── chains/                    # GENERATED (merged output)
│   ├── v22/chains.json        # Combined chains
│   └── chains.json            # Root copy for compatibility
│
├── scripts/
│   ├── merge-chains.py        # Merge script
│   └── update-all.sh          # Full update script
│
└── icons/, global/, etc.      # Other wallet configs
```

## How It Works

### 1. Nova Base (Automatic)
- Nova's `nova-utils` repo is added as a git submodule
- Contains all Polkadot ecosystem chains (DOT, KSM, Acala, Moonbeam, etc.)
- Updates pulled automatically with `git submodule update --remote`

### 2. Pezkuwi Overlay (Manual)
- Contains ONLY Pezkuwi-specific configurations
- Managed by Pezkuwi team
- Files here override or extend Nova configs

### 3. Merge Process
- `scripts/merge-chains.py` combines both sources
- Pezkuwi chains are placed FIRST (appear at top of wallet)
- Nova chains follow after
- Output goes to `chains/v22/chains.json`

## Usage

### Update Everything (Recommended)
```bash
./scripts/update-all.sh
```

This will:
1. Pull latest Nova changes
2. Re-merge chain configs
3. Show summary

### Manual Merge
```bash
python3 scripts/merge-chains.py --version v22
```

### Update Nova Only
```bash
git submodule update --remote nova-base
```

## Adding/Modifying Pezkuwi Chains

Edit `pezkuwi-overlay/chains/pezkuwi-chains.json`:

```json
[
  {
    "chainId": "bb4a61ab...",
    "name": "Pezkuwi",
    "nodes": [...],
    "assets": [...]
  }
]
```

Then run the merge script.

## Benefits

| Aspect | Before | After |
|--------|--------|-------|
| Chain maintenance | Manual (102 chains) | Auto (3 chains) |
| Nova updates | Manual copy-paste | `git submodule update` |
| Security patches | Manual tracking | Automatic |
| Pezkuwi focus | Diluted | Clear separation |

## Important Notes

1. **Never edit `chains/v22/chains.json` directly** - it's auto-generated
2. **Pezkuwi changes go in `pezkuwi-overlay/`**
3. **Run merge after any changes**
4. **Commit submodule updates** to track Nova version

## CI/CD Integration

Add to your build pipeline:
```yaml
- name: Update Nova & Merge
  run: |
    git submodule update --init --remote
    python3 scripts/merge-chains.py --version v22
```
