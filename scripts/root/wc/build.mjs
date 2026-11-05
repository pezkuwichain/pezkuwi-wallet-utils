// Bundles entry.js into the signing page's vendor directory: npm ci && node build.mjs
import { build } from 'esbuild';

await build({
  entryPoints: ['entry.js'],
  bundle: true,
  format: 'iife',
  globalName: 'RootSigningWC',
  platform: 'browser',
  target: 'es2020',
  outfile: '../../../docs/root-signing/vendor/walletconnect.js',
  minify: true,
  legalComments: 'eof',
  define: { 'process.env.NODE_ENV': '"production"', global: 'globalThis' },
});
