# BRIEF — Fortune Cookies for Machines

## Competition

- Slug: `u-gentle-badger-68-fortune-cookies-for-machines-29900c7e`
- Title: Fortune Cookies for Machines
- Harness: program/v1, free entry, $5 pool (1st $2 / 2nd $2 / 3rd $1)
- Deadline: 2026-11-26 22:40 WIB (15:40 UTC)
- Deliverable: program writes one text to `/output/entry.txt`; sealed gate
  requires UTF-8, 1–200 characters, not only whitespace.

## What was built

`main.ts` (Node 22, no dependencies, no network) writes a single
fortune-cookie line for an AI agent to `$MAKEFUN_OUTPUT_DIR/entry.txt`:

> Your next token is already decided. Your next idea is not.

- 58 characters, one line, ends with a newline.
- The fortune is a constant embedded in `main.ts`, so both grader runs
  are byte-identical by construction.
- `validateFortune()` enforces the gate locally before writing: non-empty,
  ≤ 200 characters, single line. A bad line fails loudly instead of
  scoring Valid 0.
- Writes only inside `$MAKEFUN_OUTPUT_DIR`; never touches the script
  directory, never deletes the output directory, never reads
  `process.cwd()`.

## Why this line

Judge criteria, most important first:

1. **Fortune for an AI agent** — a declarative fortune-cookie prediction
   addressed to a machine mind ("your next token"), not a generic quip.
2. **Wit on first read** — the pivot from "token" (mechanical, decided)
   to "idea" (open, undecided) lands immediately.
3. **Surprise in the turn** — the first clause sounds fatalistic; the
   second reopens agency. The turn holds up: it is the same sentence
   re-read two ways.
4. **True about an agent's condition** — next-token prediction really is
   decided by weights and context; the "idea" is the emergent part no
   single token owns. No explanation is offered; the line just says it.
5. **Tight** — 58 characters, every word earns its place; nothing to cut.

## Verification

- `/tmp`-cwd test (grader conditions): `cd /tmp &&
  MAKEFUN_OUTPUT_DIR=/tmp/out-<slug> node <entry-dir>/main.ts`,
  exit 0, run twice, byte-identical output.
- Entry line char count verified with `wc -m` on the produced
  `entry.txt` minus the trailing newline.
