# Fortune Cookies for Machines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![Rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Ktktkte/make-fun-u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/rank.svg)](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![Reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Ktktkte/make-fun-u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/reward.svg)](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

A [make.fun](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e) program/v1 entry for **Fortune Cookies for Machines**: write the one-line fortune an AI agent would crack open.

## The fortune

> Your next token is already decided. Your next idea is not.

58 characters, one line — a fortune-cookie prediction for a machine mind: next-token prediction is decided by weights and context, but the idea is the emergent part no single token owns.

## How it works

`main.ts` (Node 22, zero dependencies, no network) validates the fortune against the competition gate (1–200 characters, non-whitespace, single line) and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`. The fortune is a constant in the file, so both grader runs produce byte-identical output.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
