---
layout: guide.njk
title: Configure the Wheelbase
description: A tour of the Base tab — rotation, FFB strength, damping, the equalizer and the output curve.
tags: guide
order: 5
---

The **Base** tab is mission control for your wheelbase. Everything Pithouse exposes for
force feedback lives here, plus a few extras, and every value is stored per game through
SimHub's profile system. Here's what each section does.

![The AZOM Base tab inside SimHub showing steering angle, temperatures, core settings and effects](/docs/images/BasePage.png)

## Status strip

The top strip is live stats of your wheelbase. The dial shows real-time **steering
angle**; **Calibrate Center** re-zeros it if your wheel drifts off centre. The two graphs
track base health — **MCU / MOSFET / motor** temperatures (in whichever unit SimHub is set
to) and serial **inbound / outbound** throughput against the link's **capacity** — so you
can spot a hot or saturated base at a glance. The temperature history runs for the whole
SimHub session, not just while the panel is open.

> **Performance Output — Reserved vs Full.** *Full* unlocks the base's complete torque
> range; *Reserved* holds some in reserve for longevity and a cooler motor.

## Core settings

- **Wheel Rotation Angle** — total lock-to-lock degrees (e.g. 900°). Match it to the car
  or let your per-game profile set it.
- **Game FFB Strength** — overall force scaling. This is the dial most people actually
  tune; raise it until strong moments just clip, then back off.
- **Base Torque Output** — hard ceiling on torque the base will ever deliver.
- **Maximum Wheel Speed** — caps how fast the wheel can spin itself, a safety and feel
  control.
- **Interpolation** — smooths the incoming FFB signal; 0 is raw, higher values trade a
  little latency for less grain.
- **Restart Wheelbase** — reboots the base without touching your USB cables; force
  feedback drops briefly while it comes back.

## Gearshift vibration

A bump pulsed through the wheel on every shift. **Shift Intensity** sets how hard,
**Shift Debounce** stops a fast shift from double-firing, and **Vibrate on Neutral**
toggles the effect when you land in neutral.

> **Want more base haptics?** Engine rumble, ABS pulses and formula-driven vibration
> through the wheelbase live on the [LFE Effects](/guides/lfe-effects/) tab.

## Wheelbase effects vs game effects

The left column (**Wheel Damper / Friction / Inertia / Spring**) is feel the *base* adds
on its own. The right column (**Game** equivalents) scales those same effects when the
*game* requests them. Keep game effects near 100% so titles feel as intended, and use the
wheelbase column to add your own baseline weight.

## High-speed damping

Two sliders that add damping once the wheel is actually moving quickly: **Damping Level**
sets how much, and **Trigger Speed** sets the speed above which it starts applying. Useful
for calming a light wheel in fast direction changes without weighing down slow steering.

## Protection &amp; soft limit

**Hands-Off Protection** eases the wheel down safely when you let go, and **Steering Wheel
Inertia** models the physical mass. **Soft Limit** adds a rising resistance wall as you
approach the rotation limit — raise **Stiffness** for a firmer end stop.

## FFB equalizer &amp; output curve

The two graphs at the bottom are the fine-tuning tools:

- **FFB Equalizer** — per-band gain across the frequency range. 100% is neutral, 400% is
  maximum boost; lift the low bands for more road texture, drop the highs to tame grain.
  **Linear** flattens it in one click, and the **Sensitivity** row (0–10) writes a canned
  curve for each preset level — a quick way to find a starting shape before hand-tuning.
  Bases on newer firmware expose ten bands; older ones expose six.
- **FFB Output Curve** — drag the five nodes to reshape how input force maps to output.
  **Linear** is faithful; **S Curve** softens the centre; **Exponential** and **Parabolic**
  trade centre detail for stronger peaks.

> **Tip:** Rather than build this by hand, import a community preset as a baseline and
> tweak from there — see [Import a Profile](/guides/import-a-profile/).

## Miscellaneous

The odds and ends that live in the base rather than in a profile:

- **Force Feedback Reversal** — flips the direction of force feedback.
- **Base Status LED** — the base's own status light.
- **Bluetooth** — the wheelbase's Bluetooth radio.
- **Standby Mode** and **Standby after** — put the base into standby now, or have it drop
  there on its own after 1 minute to 1 hour of inactivity (or never).

> Base Status LED and Bluetooth are stored in the base itself, not in a per-game profile,
> so they stay put when you switch games.

## Adjust any of it from a wheel button

Every setting on this tab has a matching bindable action, so you can nudge rotation, FFB
strength, spring, damping — even individual equalizer bands — without alt-tabbing out of
the sim. Each one is also readable as a property for your dashboard. See
[Controls &amp; Actions](/guides/controls-and-actions/).
