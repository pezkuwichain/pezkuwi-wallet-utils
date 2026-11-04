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

## Signed config

`signed/targets.json` gives the sha256 of every JSON file the wallet may fetch, signed with the targets
key; `signed/root.json` names that key and the three root keys, two of which can replace it. The wallet
carries the first root and refuses a file whose hash the signed list does not give, so a change to any
served JSON file is re-signed in the same pull request:

```
python3 scripts/signed_config.py sign --key <targets seed>
```

The light client specifications in `light-client/` carry a relay chain checkpoint. Wallets fetch them through
the signed config and keep a later checkpoint than their APK's, so refresh them before signing:

```
python3 scripts/light_client_specs.py --relay-rpc <zagros rpc> --people-rpc <people rpc> --people-spec <full People spec>
```

Code Quality fails once the checkpoint is more than 60 days old.

Code Quality refuses a tree whose files do not match the signed list, and its weekly run fails a month
before a signature expires.

### Replacing the root keys

A new root is drafted where the wallet never looks, then signed by the holders in their wallets:

```
python3 scripts/signed_config.py root --version N --expires-days 1825 --root-threshold 2 --root ADDR ADDR ADDR
```

This writes `docs/root-signing/proposals/root.N.json`, keeping the current targets key. Each holder of the
current root and of the new one opens the root signing page (`docs/root-signing/`, served by GitHub Pages) in
the Pezkuwi Wallet DApp browser, compares the fingerprint with the others by phone, signs, and sends the
signature code to whoever collects them. Once two current and two new holders have signed, the page offers
`root.N.json`; it goes to `signed/root.N.json` in a pull request. Code Quality checks every published root as
installed wallets do (wallet 1.3.0 accepts sr25519 only under the `substrate` signing context) and fails
before a root they would refuse reaches master: such a root stops their config refresh.

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
