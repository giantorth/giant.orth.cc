---
layout: guide.njk
title: AB9 Active Shifter
description: Pick a shift pattern, tune the mechanical feel, and dial in engine and gear-shift vibration for MOZA's force-feedback shifter.
tags: guide
order: 8
---

The AB9 is a motorised shifter — its gates, resistance and vibration are all
software-defined, and the **AB9** tab is where you define them. The tab appears
automatically when an AB9 is detected, and like everything else in AZOM the settings are
stored per game through SimHub's profile system.

![The AZOM AB9 tab showing input mode, mechanical layout, feel sliders and vibration settings](/docs/images/AB9Shifter.png)

## Input mode

**Shifter** is the normal driving mode. **Flight Simulation** repurposes the unit as a
lever for flight titles instead of a gear stick.

## Mechanical layout

The gate pattern the motor renders: **5+R Layout 1**, **6+R Layout 1 / 2**, **7+R
Layout 1 / 2**, or **Sequential**. The layouts differ in where reverse sits and how the
gates are spaced — pick the one that matches the car you drive most and the game's gearbox.

## Feel

Five sliders set the mechanical character the motor renders on each axis:

- **Mechanical Resistance** — how much effort a shift takes.
- **Spring** — the centring force pulling the stick back to neutral.
- **Natural Damping** — resistance to fast motion; higher feels heavier and calmer.
- **Natural Friction** — constant drag through the whole throw.
- **Max Output Torque Limit** — a ceiling on the total force the shifter will ever apply.

## Engine vibration

A host-rendered rumble played through the stick from live RPM — **Intensity** for how
strong, **Frequency** for the pitch in Hz. Subtle values work best; the point is feeling
the engine in your hand, not shaking the knob loose.

## Gear shift

A confirmation pulse on every gear change: **Vibration Intensity** sets how hard,
**Vibrate on Neutral** toggles the pulse when you land in neutral, and **Shift Debounce**
stops a quick double-shift from firing twice.

> **Tune from the cockpit.** Engine intensity, engine frequency and gear-shift intensity
> are all bindable actions (`AZOM.Ab9EngineIntensityUp`, `AZOM.Ab9EngineFrequencyDown`
> and friends) — see [Controls &amp; Actions](/guides/controls-and-actions/).

> **Detection misbehaving?** The plugin probes for an AB9 on reconnect. If that probe
> upsets another device on your rig, it can be switched off under
> [Plugin Options](/guides/options/) › USB detection.
