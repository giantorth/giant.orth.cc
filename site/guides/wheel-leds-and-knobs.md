---
layout: guide.njk
title: Wheel LEDs & Knobs
description: Drive your wheel's RPM lights and knob rings through SimHub, and set their onboard idle effects.
tags: guide
order: 14
---

Once your wheel is added as a device, its LEDs become part of SimHub's effects
pipeline. AZOM also exposes the onboard animations the wheel plays on its own when no
telemetry is flowing. There are two places to work: the **LEDs** tab (SimHub effects) and
the **MOZA Wheel** tabs (onboard behaviour: **Inputs**, **RPM**, **Buttons**, **Knobs**,
**Sleep**, plus [Dashboard](/guides/dashboard-and-channels/) and
[Files](/guides/wheel-files/)).

## The LEDs tab: SimHub effects

Open your wheel under **Devices** and switch to **LEDs**. Each LED group on the wheel
(**Buttons lighting**, **Telemetry LEDs**, **Knob Indicators**, **Individual LEDs**) gets
its own effects profile that you can edit, import, or manage. The master brightness slider
at the top scales everything, the **Brightness limiter and balance** row caps each group
separately, and the **Connection status** line at the bottom confirms SimHub is actually
talking to the wheel.

![The Devices LEDs tab showing effects profiles for each LED group on the wheel](/docs/images/WheelLEDs.png)

This is standard SimHub LED territory: drop RPM strips, flag colours, limiter animations
and status effects onto each group. For more advanced telemetry-driven animation,
pair it with ATSR-EVO. See [Advanced LEDs with ATSR](/guides/atsr-led-profiles/) for the
ready-made MOZA profiles and import steps.

> **Combined vs Individual.** The **Individual LEDs profiles** mode lets you draw across
> the whole device for idle animations. *Combined* layers it on top of your regular
> effects; *Individual profile only* replaces them.

## RPM lights: onboard idle

The **RPM** tab (under **MOZA Wheel**) controls the shift lights. **RPM LED Mode** chooses
between **Off**, **SimHub Mode** (driven by your telemetry effects), and **Static**.

![The RPM LED configuration tab with mode, idle effect and static colours](/docs/images/WheelRPMLeds.png)

The **RPM Idle Effect** is what plays when you're not in a session (**Constant**,
**Breathing**, **Color Cycle**, **Rainbow**, **Sand Flow** or **RGB Pulse**), with an
**Idle Speed** slider. The **RPM LED Colors** row sets the static per-LED colours used when
telemetry isn't sending.

## Knobs: rings &amp; signal mode

The **Knobs** tab configures the rotary LED rings. **Knob LED Mode** and **Knob Idle
Effect** mirror the RPM controls, and **Telemetry Color Restore** puts each knob's static
colour back once a telemetry effect lets go of it. Each knob can also have its own
colour.

![The Knobs configuration tab showing per-knob colour rings and signal mode](/docs/images/WheelKnobs.png)

- **Signal Mode**: set each rotary to report as a **Button** (step clicks) or **Knob**
  (continuous), to match what the game expects.
- **Colours**: click any ring LED, or the centre swatch, to recolour it from the palette
  (two rows of standard colours over their pastel tints, plus off, white, and your last
  custom colour). Clicking a selected LED again closes its editor. **Fill ring with
  selected** paints the whole ring at once, an adjacent button fills alternating LEDs in
  the group, and **Copy this knob to all** replicates one knob's look across the others.

## Buttons: onboard idle

The **Buttons** tab is the same three controls as RPM, applied to the wheel's button
backlighting: **Button LED Mode** (Off / SimHub Mode / Static), **Button Idle Effect** with
an **Idle Speed**, and a **Button LED Colors** row for the static colours.

## Sleep: what the wheel does when you walk away

The **Sleep** tab sets the wheel's **Sleep Light**: a **Mode** (the same animation list as
the idle effects), a **Color**, a **Speed**, and a **Standby Time** of anywhere from a
minute to several hours before the wheel drops into it.

Sleep settings are stored at the wheel level, not per game, so they don't change when you
switch titles.

## Inputs: paddles and button check

The **Inputs** tab isn't about lighting at all, but it lives in the same group:

- **Live Paddles**: a live read-out of the left, right and combined analog paddle axes.
- **Active Buttons**: shows which buttons are being pressed, which is the quickest way to
  confirm the wheel is talking at all.
- **Paddle Settings**: **Paddles Mode** (Buttons / Split / Combined), paddle calibration,
  and (in Combined mode) the **Clutch Split Point** that sets the bite point. That
  slider is also bindable to a button, so you can hunt for a car's bite point on track;
  see [Controls &amp; Actions](/guides/controls-and-actions/).
