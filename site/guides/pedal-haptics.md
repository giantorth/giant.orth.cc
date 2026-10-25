---
layout: guide.njk
title: Pedal Haptics
description: Drive MOZA's S12 pedal vibration units from SimHub's ShakeIt editor — one device per pedal.
tags: guide
order: 9
---

MOZA's S12 pedal vibration units aren't set up in the AZOM panel. Each pedal shows up as
its own **SimHub device**, and you build its effects in SimHub's **ShakeIt** editor, the
same way you would for a bass shaker.

## Requirements

- **SimHub 9.12.0 or newer.** On older SimHub the pedals aren't offered as devices.
- One or more S12 units, plugged in directly or through the wheelbase.

## Add the devices

When AZOM finds a unit it prompts you to restart SimHub. After the restart, open
**Devices › Add new device** and add the pedals you use: **MOZA S12 Throttle**, **MOZA S12
Brake** and/or **MOZA S12 Clutch**. Each has its own profile, so every pedal can run a
different set of effects.

## Set up effects

Open a pedal's device and go to its **Haptics** tab. Switch on the effects you want and set
their volume — AZOM routes them to the pedal automatically.

![The MOZA S12 Brake device's Haptics tab in SimHub with ShakeIt effects enabled](/docs/images/PedalHaptics.png)

A few things to know:

- **10–100 Hz only.** Frequencies outside that range are clamped to the nearest end.
- **Eight effects at a time per pedal.** If more than eight are active at once they share
  and mix, so a quiet one can get lost. Spread effects across pedals rather than stacking
  them all on the brake.

## Troubleshooting

- **No S12 devices offered?** Check you're on SimHub 9.12.0+, then check the unit is listed
  in the diagnostic report on the [Help tab](/guides/diagnostics-and-bug-reports/).
- **Plugged a unit in after starting SimHub?** It's picked up within a few seconds.
