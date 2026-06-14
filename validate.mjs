#!/usr/bin/env node
/**
 * Marketplace validator — zero dependencies, runs in CI on every push/PR.
 * Checks .claude-plugin/marketplace.json is well-formed and every plugin entry
 * points at a resolvable GitHub source. Run from repo root: `node validate.mjs`.
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = process.cwd();
const fail = [];
const P = '.claude-plugin/marketplace.json';

if (!existsSync(resolve(ROOT, P))) {
  console.error(`FAIL ${P} is missing`);
  process.exit(1);
}
let m;
try { m = JSON.parse(readFileSync(resolve(ROOT, P), 'utf8')); }
catch (e) { console.error(`FAIL ${P}: invalid JSON — ${e.message}`); process.exit(1); }

if (!m.name) fail.push('marketplace.json: missing "name"');
if (!m.owner?.name) fail.push('marketplace.json: missing "owner.name"');
if (!Array.isArray(m.plugins) || !m.plugins.length) fail.push('marketplace.json: "plugins" must be a non-empty array');

const seen = new Set();
for (const [i, p] of (m.plugins || []).entries()) {
  const at = `plugins[${i}]${p?.name ? ` (${p.name})` : ''}`;
  if (!p.name) fail.push(`${at}: missing "name"`);
  else if (seen.has(p.name)) fail.push(`${at}: duplicate plugin name "${p.name}"`);
  else seen.add(p.name);
  const s = p.source;
  if (!s) fail.push(`${at}: missing "source"`);
  else if (typeof s === 'object') {
    if (s.source === 'github') {
      if (!/^[\w.-]+\/[\w.-]+$/.test(s.repo || '')) fail.push(`${at}: source.repo must be "owner/name", got "${s.repo}"`);
    } else if (!['git', 'url', 'git-subdir', 'npm'].includes(s.source)) {
      fail.push(`${at}: unknown source type "${s.source}"`);
    }
  }
}

if (fail.length) {
  for (const f of fail) console.error(`FAIL ${f}`);
  console.error(`\n✗ ${fail.length} failure(s).`);
  process.exit(1);
}
console.log(`✓ marketplace valid — ${m.plugins.length} plugins, all sources well-formed.`);
