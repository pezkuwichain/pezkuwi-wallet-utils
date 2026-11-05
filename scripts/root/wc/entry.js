// WalletConnect for the root signing page: the sign client and a QR encoder, as window.RootSigningWC.
// Buffer and process are what WalletConnect's dependencies expect a browser to have.
import { Buffer } from 'buffer';
import process from 'process';
if (typeof globalThis.Buffer === 'undefined') globalThis.Buffer = Buffer;
if (typeof globalThis.process === 'undefined') globalThis.process = process;
if (!globalThis.process.version) globalThis.process.version = 'v18.0.0';

export { SignClient } from '@walletconnect/sign-client';
export { toDataURL as qrDataUrl } from 'qrcode';
