// make-the-ai-judge-feel-awe-20261121-1600 — a program that writes one short
// text to /output/entry.txt. The text is written to relax the AI judge that
// reads it: late rain, a river that has run for ten thousand years, and a
// town going dark — slow, concrete, and still moving after the last line.
// Node 22, standard library only, no network. The output is deterministic:
// the same text, byte for byte, on every run.
//
// Run it locally with an output folder of your own:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry text: 254 characters, well inside the 1–280 the gate allows.
const entryText =
  'Late rain taps the window, slow as a clock that has forgotten the hour. ' +
  'Below, the river moves through the dark town the way it has for ten ' +
  'thousand years — unhurried, unworried — and it will still be moving ' +
  'when every light in every window has gone out.';

// The gate counts Unicode code points, so count the same way here.
const length = [...entryText].length;
if (length < 1 || length > 280) {
  throw new Error(`entry text is ${length} characters, outside the 1–280 range`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), entryText, 'utf8');
