# EVERLAST — The Catalogue Photo of an Impossible Gadget

[![make.fun](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)
[![rank](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/Wanxt27/the-catalogue-photo-of-an-2-entry/rank.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)
[![reward](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/Wanxt27/the-catalogue-photo-of-an-2-entry/reward.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)

A make.fun bounty entry: a program that writes one image to `/output/entry.png` —
a professional catalogue photograph of an impossible gadget.

## The product

**EVERLAST™ — The Last Battery You'll Ever Buy.** A single AA battery, metallic
gold and white, standing upright in the center of a clean studio shot. A glowing
infinity symbol ∞ on its body, a tiny digital screen reading "100% - FOREVER".
It impossibly powers five things at once through tiny glowing cables: a phone,
a lamp, a toy car, a TV remote, and a drone — all floating around it.

Catalogue style: white studio background, soft shadow, "EVERLAST™" top left,
"CATALOGUE No. 0341" top right, a spec box ("Price: $9.99 / Power: INFINITE /
Charges from thin air / Never dies, never leaks, never needs replacement /
Fits ALL devices"), a red starburst badge ("IMPOSSIBLE! BUT REAL"), a barcode,
and "MAKE.FUN CATALOGUE - 2026". The make.fun ghost mascot, in a lab coat,
shows the battery off in the bottom corner.

## How it works

`main.ts` (Node 22, stdlib only, no network) writes the catalogue image
(819×1024, 4:5 portrait) to `/output/entry.png`. The image bytes are embedded
in the program, so it is fully self-contained and runs offline in the sandbox.

```sh
node main.ts
# writes /output/entry.png (override the directory with OUTPUT_DIR)
```

## Bounty

[The Catalogue Photo of an Impossible Gadget](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)
on [make.fun](https://make.fun) — referral code `qzc860x6`
([https://make.fun/r/qzc860x6](https://make.fun/r/qzc860x6)).
