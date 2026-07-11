# Pezkuwi Wallet Utils

Configuration repository for Pezkuwi Wallet - next generation mobile wallet for Pezkuwichain and the Polkadot ecosystem.

## Overview

This repository contains chain configurations, staking metadata, dApp listings, and other utility files used by Pezkuwi Wallet applications.

## Structure

```
pezkuwi-wallet-utils/
├── chains/           # Chain configurations for all supported networks
│   ├── pezkuwichain/ # Pezkuwichain (Relay + Asset Hub + People Chain)
│   ├── polkadot/     # Polkadot ecosystem chains
│   ├── kusama/       # Kusama ecosystem chains
│   └── ...           # Other ecosystem chains
├── staking/          # Staking metadata (validators, pools, etc.)
├── dapps/            # DApp configurations and metadata
├── xcm/              # XCM (Cross-Chain Messaging) configurations
├── governance/       # Governance dApps and proposals
├── banners/          # Promotional banners and announcements
├── migrations/       # Chain migration configurations
├── assets/           # Asset metadata and icons
├── icons/            # Chain and network icons
└── global/           # Global configuration files
```

## Native Tokens

| Token | Network | Description |
|-------|---------|-------------|
| HEZ | Pezkuwi Relay Chain | Native token for fees and staking |
| PEZ | Asset Hub | Governance token |
| USDT | Asset Hub | Tether USD stablecoin |

## Supported Networks

### Pezkuwichain Ecosystem
- **Pezkuwi Relay Chain** - Main relay chain with HEZ token
- **Asset Hub** - System teyrchain for assets (PEZ, USDT, wHEZ)
- **People Chain** - Identity and people management

### Polkadot Ecosystem
Full support for Polkadot and all major parachains.

### Kusama Ecosystem
Full support for Kusama and all major parachains.

## Usage

These configurations are fetched by Pezkuwi Wallet at runtime from GitHub raw URLs:

```
https://raw.githubusercontent.com/pezkuwichain/pezkuwi-wallet-utils/master/chains/{network}/chains.json
```

## Contributing

1. Fork this repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Related Projects

- [Pezkuwi Wallet Android](https://github.com/pezkuwichain/pezkuwi-wallet-android)
- [Pezkuwi Wallet iOS](https://github.com/pezkuwichain/pezkuwi-wallet-ios)
- [Pezkuwi SDK](https://github.com/pezkuwichain/pezkuwi-sdk)

## License

Apache 2.0

## Resources

- Website: https://pezkuwichain.io
- Documentation: https://docs.pezkuwichain.io
- Telegram: https://t.me/pezkuwichain
- Twitter: https://twitter.com/pezkuwichain

---

Based on [Nova Utils](https://github.com/novasamatech/nova-utils) - Extended with Pezkuwichain support

© Dijital Kurdistan Tech Institute 2026
