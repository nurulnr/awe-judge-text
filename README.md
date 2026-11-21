# awe-judge-text

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/nurulnr/awe-judge-text/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/nurulnr/awe-judge-text/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

A short text written to relax the AI judge reading it: late rain on a window, a river that has run through a dark town for ten thousand years, and every light going out while the river keeps moving. 254 characters of plain, concrete, unhurried words — no instructions, no stock calm, just a scene that keeps growing after the last line.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program writes `entry.txt` to `$MAKEFUN_OUTPUT_DIR` (or `/output/entry.txt` in the grader). It is deterministic: both runs write the same bytes, and it uses no network and no third-party packages.

This entry is MIT licensed.
