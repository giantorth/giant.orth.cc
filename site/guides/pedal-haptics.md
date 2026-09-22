---
layout: guide.njk
title: Pedal Haptics
description: Drive MOZA's S12 pedal vibration units straight from SimHub's ShakeIt Motors editor — one device per pedal, seventeen channels each.
tags: guide
order: 9
---

MOZA's S12 pedal vibration units are not configured in the AZOM panel at all. AZOM
registers each one as its own **SimHub device** with a Haptics section, so you build the
effects in SimHub's **ShakeIt Motors** editor — the same place your bass shakers live — and
AZOM streams the result to the hardware.

> **Not the same as mBooster.** mBooster active pedals get their own AZOM tab with
> host-rendered effects and hardware feel calibration — see
> [mBooster Pedal Feel &amp; Effects](/guides/mbooster/). The S12 units are passive-pedal
> vibration motors and go entirely through ShakeIt.

## Requirements

- **SimHub 9.12.0 or newer.** The Haptics device feature AZOM builds on doesn't exist in
  9.11 — on an older SimHub the units are simply not offered.
- One or more S12 units, either on their own USB port or routed through the wheelbase or
  hub.

Routed units have no port of their own and don't announce themselves, so AZOM probes each
connected pipe and waits for an answer. A unit attached after SimHub started is picked up
by the five-second device poll, and a lane that never answers backs off to about one query
a minute rather than sitting on a busy telemetry link.

## Add the devices

Once a unit answers, AZOM deploys a device definition per pedal and prompts you to restart
SimHub. After the restart, open **Devices › Add new device** and add the ones you use:

- **MOZA S12 Throttle**
- **MOZA S12 Brake**
- **MOZA S12 Clutch**

Each is a separate SimHub device with its own profile, so the brake can run a completely
different effect set from the throttle.

## The channels

Open a pedal's device and go to its **Haptics** section. Each device exposes seventeen
channels:

- **Effect 1** … **Effect 16** — general-purpose channels. Assign any ShakeIt effect to
  any of them.
- **Road Texture** — a dedicated channel that takes a suspension-position value rather
  than a tone, so it drives the hardware's road-surface slot directly.

The channels are deliberately numbered rather than named after game events. The firmware
labels its slots "ABS", "gearshift" and so on, but it synthesises nothing from those
names — every slot is an interchangeable oscillator — so a name would promise behaviour
the hardware doesn't deliver.

### Why sixteen channels for eight oscillators

Each unit has eight real oscillators. You can build as many ShakeIt effects as you like,
so AZOM allocates rather than maps one-to-one:

- A channel takes a free slot the moment it goes active, and keeps it until it goes
  silent again.
- Once all eight are in use, latecomers share a slot and their gains are mixed.
- Road Texture sits outside the pool and always owns its slot, because it can't stand in
  for a tone.

In practice you'll rarely have eight effects firing at once on a single pedal, so this is
invisible. If a quiet effect seems to get swallowed during a busy moment, that's the
sharing — spread effects across pedals rather than stacking them all on the brake.

## Frequency range

The hardware accepts **10–100 Hz**. Values outside that band are clamped rather than
rejected, so a ShakeIt effect tuned for a bass shaker will still play, just pinned to the
nearest end of the range. Tune inside the band for predictable results.

## If a unit goes quiet

- **Nothing posts for half a second** and AZOM drops every channel to silent — this is
  deliberate, so a game crash or a mid-tick profile swap can't leave a motor buzzing.
- **A dropped lane recovers on its own.** A keepalive holds the connection and the unit is
  re-probed if its pipe comes back.
- **No devices offered at all?** Check the SimHub version first (9.12.0+), then confirm the
  unit appears in the diagnostic report on the
  [Help tab](/guides/diagnostics-and-bug-reports/).
