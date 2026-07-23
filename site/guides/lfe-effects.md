---
layout: guide.njk
title: LFE Effects
description: Host-rendered low-frequency haptics for your wheelbase — engine rumble, ABS pulses and gearshift thumps, tunable with live SimHub formulas.
tags: guide
order: 5
---

The **LFE Effects** tab turns your wheelbase into a bass shaker. AZOM renders three
low-frequency vibration channels on the host every frame and streams them to the base at
50 Hz — engine rumble that tracks RPM, ABS pulses, gearshift thumps, or anything you can
express as a formula. It needs base firmware **1.2.10.10 or newer**; the tab only appears
on bases that support it.

This is separate from the Base tab's **Gearshift Vibration**, which is a fixed effect the
firmware plays on its own — LFE effects are computed live from telemetry and layered
together.

![The AZOM LFE Effects tab showing engine presets and three effect slots](/docs/images/LfeEffects.png)

## Engine presets

The **Engine Presets** card manages the whole three-slot setup as one unit. Four built-ins
ship with the plugin — **Additive Engine**, **Big Rig**, **Detuned V8** and **Road
Rumble** — and all of them scale intensity with throttle position, so the rumble builds as
you feed in power. Type a name and **Save** to keep your own, or **Import / Export** to
share presets as JSON files.

The live graph draws each slot's output — amplitude envelope and computed frequency — so
you can see what the formulas are doing before you feel it. **Test** plays the whole
preset through the base while you're parked.

## The three effect slots

Each of **Effects Slot 1–3** is an independent vibration generator:

- **Enable** — switch the slot on or off.
- **Mode** — **Engine** (continuous, RPM-driven), **ABS**, **Gearshift**, or **Custom**
  (formula-driven everything).
- **Trigger** — *Level* runs the effect whenever the trigger value is non-zero; *On
  change* fires a pulse each time the value changes.
- **Frequency (Hz)** — the vibration pitch, with **Formula limits** clamping whatever the
  formula produces to a sane band.
- **Intensity** — how hard the slot shakes.
- **Smoothness** — filters sudden jumps so the effect swells instead of snapping.

Every slot has its own **Test** button, so you can tune one channel at a time.

## Formulas — the f(x) buttons

Any control with an *f(x)* button accepts a live expression instead of a fixed value —
SimHub properties in square brackets, evaluated every tick. The stock engine preset is a
good template:

- Frequency: `[DataCorePlugin.GameData.Rpms] / [DataCorePlugin.GameData.MaxRpm] * 200`
  — pitch rises with revs, topping out at 200 Hz.
- Intensity: `30 * (35 + 65 * [DataCorePlugin.GameData.Throttle] / 100.0) / 100.0`
  — a base rumble that grows as you open the throttle.

Anything SimHub exposes as a property can drive a slot — wheel slip, brake pressure,
suspension travel, your own NCalc math.

## Gearshift mode extras

When a slot's Mode is **Gearshift**, two extra controls appear: **Vibrate on Neutral**
plays the thump when you land in neutral, and **Shift Debounce** stops a fast double-shift
from firing twice.

> **Presets travel with profiles.** LFE settings are stored per game through SimHub's
> profile system and ride along in profile import — see
> [Import a Profile](/guides/import-a-profile/). For the firmware-side feel settings,
> head back to [Configure the Wheelbase](/guides/configure-the-wheelbase/).
