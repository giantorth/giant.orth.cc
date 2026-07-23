---
layout: guide.njk
title: Multi-Function Stalks
description: Run MOZA's stalks as a plain button box, or let AZOM drive wipers, lights and indicators in ETS2 and ATS with true stage sync.
tags: guide
order: 9
---

MOZA's multi-function stalks have two personalities in AZOM. As a **button box** they're
ordinary SimHub inputs — map them like any other buttons. In **Truck sim** mode the plugin
translates stalk positions into keyboard input for *Euro Truck Simulator 2* and *American
Truck Simulator*, tracking wiper and light stages so the stalk's physical position always
matches what's happening in the cab. Keys are only sent while the truck game is in the
foreground, so the stalks never type into anything else.

![The AZOM Stalks tab showing stalk mode, wiper and light stages and the button mapping list](/docs/images/Stalks.png)

## Stalk mode

**Button box** exposes every stalk position as a plain controller button and leaves the
rest of this tab dormant. **Truck sim (ETS2/ATS)** enables the keyboard translation
below.

## Wipers &amp; lights

ETS2 and ATS step wipers and lights with a single cycle key, so the plugin keeps count:
when you move the stalk two positions, it sends the right number of key presses to land the
game on the same stage.

- **Wiper stages / Light stages** — how many positions your game setup cycles through,
  so the counting matches.
- **Wiper key wraps around** — set this if your game binding cycles past the last stage
  back to off rather than stopping.
- **Re-sync wipers &amp; lights** — if the game and stalk drift apart (say, after a menu
  or a mission cutscene), this drives the game back to off and re-aligns the tracked
  stage.

## Button mapping

The **Button Mapping** list assigns an action to each stalk control — press one and its
button number lights up so you know which row you're editing. Each of **Btn 1–15** can
be:

- **Light stage *N*** / wiper stages — the tracked cycle positions above.
- **Indicator: left / right / cancel** — turn-signal keys.
- **Key: X** — press and release a plain keyboard key.
- **Latch: X** — hold a key down until the stalk leaves the position.
- **Release held keys** — let go of anything latched.
- **(none)** — ignore the control.

**Load ETS2/ATS defaults** fills the standard bindings in one click — start there and
adjust only what your in-game key map changes.

> **Racing titles?** Leave the stalks in Button box mode and map them like any other
> buttons in [Controls &amp; Actions](/guides/controls-and-actions/).
