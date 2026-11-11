// news-summary-01 entry (Node 22, standard library only).
// The summary lives in summary.txt beside this file; this program copies it
// to $MAKEFUN_OUTPUT_DIR/entry.txt ('/output' when the variable is unset).
// The copy is byte-for-byte, so two runs always write identical output.
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./summary.txt', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'),
);
