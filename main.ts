// Fortune Cookies for Machines — make.fun program/v1 entry.
//
// Writes one fortune-cookie line for an AI agent to
// $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// Grader contract (node22, read-only /bot, user 65534, no network, run
// twice byte-identical):
//   - the fortune is a constant embedded in this file: no file reads, no
//     network, no randomness, so both runs produce byte-identical output;
//   - paths are resolved from $MAKEFUN_OUTPUT_DIR only — never from
//     process.cwd() and never from this script's own directory, which the
//     grader mounts read-only;
//   - the output directory itself is never deleted or replaced (it is a
//     mount point); only mkdir (recursive) + write inside it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. One fortune, one line, 58 characters — well inside the
// 1–200 character gate, non-whitespace, single line.
const FORTUNE = "Your next token is already decided. Your next idea is not.";

const MAX_CHARS = 200;

// Validate the fortune against the sealed gate before writing it, so a
// bad line fails loudly here instead of silently scoring Valid 0.
function validateFortune(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("fortune must not be only whitespace");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(`fortune exceeds ${MAX_CHARS} characters`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

validateFortune(FORTUNE);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");
