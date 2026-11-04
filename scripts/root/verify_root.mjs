// Verifies the published root chain the way the wallet does, so a root that installed wallets would refuse
// is never published: a root they cannot verify stops their config refresh.
//
// signed/root.json is the root the APK carries. Each signed/root.N.json after it must be the next version and
// carry valid signatures from a threshold of the previous root's keys and of its own. An sr25519 key is a
// wallet account and signs <Bytes>payload</Bytes>. Wallet 1.3.0 checks sr25519 under the "substrate" signing
// context only, so that is what counts; a signature valid only under "bizinikiwi" is reported, not counted.
//
//   node scripts/root/verify_root.mjs              check the published chain
//   node scripts/root/verify_root.mjs FILE...      also report the signatures on proposals

import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { cryptoWaitReady as polkadotReady, sr25519Verify as substrateVerify } from '@polkadot/util-crypto';
import { cryptoWaitReady as pezkuwiReady, sr25519Verify as bizinikiwiVerify, ed25519Verify } from '@pezkuwi/util-crypto';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const SIGNED = join(REPO, 'signed');

const sha256Hex = (bytes) => createHash('sha256').update(bytes).digest('hex');
const wrapBytes = (payload) => Buffer.concat([Buffer.from('<Bytes>'), payload, Buffer.from('</Bytes>')]);

function readEnvelope(path) {
  const envelope = JSON.parse(readFileSync(path, 'utf8'));
  const payload = Buffer.from(envelope.signed, 'base64');
  return { payload, root: JSON.parse(payload.toString('utf8')), signatures: envelope.signatures };
}

function parseRoot(root) {
  if (root.type !== 'root') throw new Error(`type is ${root.type}, not root`);
  const keys = {};
  for (const [keyId, key] of Object.entries(root.keys)) {
    const bytes = Buffer.from(key.public, 'base64');
    if (bytes.length !== 32 || sha256Hex(bytes) !== keyId) throw new Error(`key ${keyId} does not match its id`);
    if (key.scheme !== 'sr25519' && key.scheme !== 'ed25519') throw new Error(`key ${keyId} has unknown scheme ${key.scheme}`);
    keys[keyId] = { scheme: key.scheme, bytes };
  }
  for (const role of ['root', 'targets']) {
    const { keyids, threshold } = root[role];
    if (threshold < 1 || threshold > keyids.length || !keyids.every((id) => id in keys)) throw new Error(`unusable ${role} role`);
  }
  return keys;
}

// keyId -> "substrate" | "bizinikiwi" | "ed25519" | null for each signature on payload
function classify(payload, signatures, keys) {
  const result = new Map();
  for (const { keyid, sig } of signatures) {
    const key = keys[keyid];
    if (!key) continue;
    const signature = Buffer.from(sig, 'base64');
    let kind = null;
    if (key.scheme === 'ed25519') {
      if (ed25519Verify(payload, signature, key.bytes)) kind = 'ed25519';
    } else if (substrateVerify(wrapBytes(payload), signature, key.bytes)) {
      kind = 'substrate';
    } else if (bizinikiwiVerify(wrapBytes(payload), signature, key.bytes)) {
      kind = 'bizinikiwi';
    }
    if (!result.get(keyid)) result.set(keyid, kind);
  }
  return result;
}

function count(classified, keyIds) {
  const accepted = keyIds.filter((id) => ['substrate', 'ed25519'].includes(classified.get(id)));
  const contextOnly = keyIds.filter((id) => classified.get(id) === 'bizinikiwi');
  return { accepted: accepted.length, contextOnly: contextOnly.length };
}

function checkNext(previous, path) {
  const next = readEnvelope(path);
  const nextKeys = parseRoot(next.root);
  if (next.root.version !== previous.root.version + 1) {
    throw new Error(`version ${next.root.version} does not follow ${previous.root.version}`);
  }
  const lines = [];
  let ok = true;
  for (const [label, keys, role] of [
    ['previous root', previous.keys, previous.root.root],
    ['its own root', nextKeys, next.root.root],
  ]) {
    const { accepted, contextOnly } = count(classify(next.payload, next.signatures, keys), role.keyids);
    const met = accepted >= role.threshold;
    ok &&= met;
    lines.push(`  ${label}: ${accepted} of ${role.threshold} required${contextOnly ? `, ${contextOnly} valid only under bizinikiwi (not accepted by wallet 1.3.0)` : ''}${met ? '' : '  <- NOT MET'}`);
  }
  return { ok, lines, next: { root: next.root, keys: nextKeys } };
}

await polkadotReady();
await pezkuwiReady();

let failed = false;
const first = readEnvelope(join(SIGNED, 'root.json'));
let current = { root: first.root, keys: parseRoot(first.root) };
console.log(`root ${current.root.version}: carried by the APK`);

for (let version = current.root.version + 1; existsSync(join(SIGNED, `root.${version}.json`)); version++) {
  const path = join(SIGNED, `root.${version}.json`);
  try {
    const { ok, lines, next } = checkNext(current, path);
    console.log(`root ${version}: ${ok ? 'accepted' : 'REFUSED'}`);
    lines.forEach((line) => console.log(line));
    if (!ok) {
      console.log(`::error::signed/root.${version}.json would be refused by installed wallets and stop their config refresh`);
      failed = true;
      break;
    }
    current = next;
  } catch (e) {
    console.log(`::error::signed/root.${version}.json: ${e.message}`);
    failed = true;
    break;
  }
}

for (const proposal of process.argv.slice(2)) {
  try {
    const { ok, lines } = checkNext(current, proposal);
    console.log(`proposal ${proposal}: ${ok ? 'ready to publish' : 'not ready'}`);
    lines.forEach((line) => console.log(line));
  } catch (e) {
    console.log(`proposal ${proposal}: ${e.message}`);
  }
}

process.exit(failed ? 1 : 0);
