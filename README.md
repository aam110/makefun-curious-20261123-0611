# The Light Only Just Got Here

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/aam110/makefun-curious-20261123-0611/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/aam110/makefun-curious-20261123-0611/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)

An entry for the [make.fun bounty "Make the AI judge feel curious"](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311).

## The text

A mother and her child at the kitchen table, late at night. She pours tea
into a chipped mug, holds it with both hands, and tells the child that the
light coming through the window left its home two and a half million years
ago — and only just got here.

## How it runs

`main.ts` (Node 22) writes the text to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(273 Unicode code points, inside the 1–280 limit). No network, no
dependencies, fully deterministic — run it twice and the output is
byte-identical.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
