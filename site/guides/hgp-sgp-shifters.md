---
layout: guide.njk
title: HGP & SGP Shifters
description: Configure MOZA's passive H-pattern and sequential shifters (direction, paddle sync, LED colours, and the HGP's calibration routine).
tags: guide
order: 11
---

The HGP (H-pattern) and SGP (sequential) are MOZA's *passive* shifters: no motors, no
force feedback, unlike the [AB9](/guides/ab9-shifter/). AZOM gives each one its own tab,
which appears when that shifter is detected.

They are fully independent devices. If you run both at once, each on its own USB port, both
tabs appear and each writes to its own hardware.

> **Gear input is not configured here.** Your gears reach the game through the shifter's
> normal controller surface, exactly as they always did. These tabs configure the device's
> own settings over serial. Nothing here changes how gears are reported.

## The HGP tab

### Shifter settings

- **Reverse Direction**: flips the shift axis if the pattern reads backwards.
- **Paddle Shift Sync**: keeps the wheel's paddles in step with the stick, so a paddle
  shift doesn't leave the game and the physical gate disagreeing.
- **Shifter type**: **H-pattern** or **Sequential**. The HGP stores this in the device
  itself, and AZOM reads the value straight back after writing it, so the dropdown settles
  on what the shifter actually kept rather than what was requested.

> **If your H-pattern shifter behaves sequentially,** this selector is the fix: set it back
> to **H-pattern**. Plugin version 1.5.1 could leave the device flipped into sequential
> mode, and the setting lives in the shifter, so it survived every subsequent update until
> something wrote it back.

### Calibration

**Start Calibration** runs the H-pattern learn routine. The tab prints the sequence to
follow once you've started it:

```
shift R › 7th › R › Neutral
```

Work through those positions and the shifter learns its own gate geometry. This is
H-pattern only. The SGP tab has no calibration, because a sequential throw has nothing to
learn.

## The SGP tab

### Shifter settings

The same **Reverse Direction** and **Paddle Shift Sync** toggles as the HGP. There is
deliberately no shifter-type selector here: an SGP is sequential by construction.

### LEDs

The SGP carries two configurable indicator LEDs:

- **LED 1 (S1)** and **LED 2 (S2)** each pick from a fixed eight-colour palette: red,
  orange, yellow, green, cyan, blue, purple, white. The same palette Pit House offers; the
  hardware accepts nothing else.
- **LED Brightness**: 0–10.

Both LEDs travel in a single hardware command, so changing either one re-sends the pair.

## Settings and profiles

Shifter settings are read back from the device when it connects and only what your profile
changes is written, so a shifter's EEPROM isn't rewritten on every launch. A shifter that
never answers its settings read is left alone entirely rather than written blind.

> **Not sure which one you have?** The tab that appears tells you. AZOM identifies the
> two by the name each reports, which is the only reply that differs between them. A
> sequential shifter wired through the wheelbase is identified correctly as an SGP.
