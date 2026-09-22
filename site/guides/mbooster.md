---
layout: guide.njk
title: mBooster Pedal Feel & Effects
description: Shape your mBooster's pedal feel in millimetres and kilograms, then layer telemetry-driven haptics — ABS, traction control, wheel spin and more.
tags: guide
order: 8
---

mBooster active pedals get their own tab, and it does two jobs: hardware feel calibration
— travel, stiffness and force in real units — and host-rendered haptic effects computed
from live telemetry. Multiple mBoosters on one rig are fully supported, whether they're on
their own USB ports or bridged through the base, and every setting is stored per game
through SimHub's profile system.

## Pedal list &amp; roles

The **mBooster Pedals** card at the top lists one row per connected pedal over a live
trace of the last few seconds of input. Each row has a **Role** — **Throttle**, **Brake**,
**Clutch** or **Disabled** — and an editable **Display Name**, which is optional but handy
for telling two pedals with the same role apart on a multi-unit rig. Effect routing
follows each unit's own identity, not USB port order, so pedals keep their settings across
reboots and replugs.

![The AZOM mBooster tab showing the pedal trace, pedal feel and sim input mapping curves](/docs/images/MBooster.png)

## Pedal feel — the hardware side

The **Pedal Feel** card writes calibration to the pedal itself:

- **Curve** — drag the five nodes, or start from **Linear / S Curve / Exponential /
  Parabolic**, to shape resistance across the stroke.
- **Start / End of Travel (mm)** — a dual slider trimming the physical stroke in
  millimetres.
- **Front Limit Stiffness / End Limit Stiffness** — how hard the virtual end stops feel.
- **Deadzone (kg)** — force to ignore before the pedal starts registering.
- **Max Force (kg)** — the load-cell force at which the pedal reads 100 %.

## Sim input mapping — the game side

The matching **Sim Input Mapping** card shapes what the game sees:

- **Curve** — same presets and draggable nodes, applied to the reported axis rather than
  the physical feel.
- **Sensor Ratio** — blend between the **Angle** sensor and the **Load Cell** as the
  input source; pure load-cell braking is the usual race setup.
- **Max Threshold (kg)** — the force that maps to full input.

## Effects

Below the curves, each effect card vibrates the pedal motor from live telemetry, with a
**Test** toggle so you can feel it parked:

- **ABS** — pulses the brake pedal when the game reports ABS activity, with Frequency,
  Intensity and Smoothness.
- **Traction Control** — mirrors the ABS pulse on the throttle side, driven by the game's
  TC flag.
- **Wheel Spin** — the acceleration-side counterpart triggered by a wheel-slip heuristic
  instead of the game's own TC decision — useful in titles that never report TC.
- **Gear Shift** — a short pulse on every gear change, with its own **Vibrate on
  Neutral** and **Debounce** controls.
- **Road Texture** — rumble scaled by vertical chassis movement.
- **Lockup** — warns through the brake pedal when a wheel stops rotating under braking.
- **Threshold** — a pulse as you cross a configurable brake force, for training a
  consistent braking point.
- **Engine Vibration** — continuous rumble whose frequency tracks RPM toward redline;
  you set only the Intensity.
- **Bite Point** — clutch only. Pulses as the clutch *releases* back past a **Trigger Input
  Level**, so you feel the engagement point instead of hunting for it. It latches on the
  release edge, not the press, which is why it doesn't fire on the way down.

> **One channel for engine-style effects.** Traction Control, Wheel Spin, Gear Shift and
> any custom effect share Engine Vibration's wire channel, so only one of them drives the
> motor at a time — the most recently active effect wins.

## G-Force — inertial pedal feel (experimental)

**G-Force** doesn't vibrate: it *moves* the pedal under your foot in proportion to live
longitudinal G, pushing forward as you accelerate and back as you brake. **Max Pedal
Travel (mm)** sets how far it moves at full G, and **Response Speed** sets how quickly it
ramps to the new position. It has the same **Test** toggle as the vibration effects.

## Segmented damping (experimental)

**Segmented Damping** adds a damping force that is independent of anything the game sends.
Pedal travel is divided into segments, each with its own range and its own damping amount,
and separate curves for **When Pressed** and **When Released** — so the pedal can feel
heavy coming down and light coming back, or the reverse.

Drag a divider to resize a segment; drag inside a segment to set its damping.

## Custom effects (experimental)

**Add Custom Effect** creates a user-defined effect: give it a name, a SimHub property or
NCalc formula, and Frequency/Intensity like the Engine sliders. A threshold mode fires a
pulse when the formula crosses a level; without it the effect runs continuously in
proportion to the value.

## Brake fade (experimental)

**Brake Fade** simulates cooked brakes: past a configurable onset temperature it lengthens
the real Travel End and raises Max Threshold as the game's brake temperature climbs — more
travel, more force needed — then restores your configured values as the brakes cool. It
needs Travel End and Max Threshold already set in Pedal Feel / Sim Input Mapping.

> **Regular pedals?** Direction, range and output curves for standard (non-motorised)
> pedals live on the [Pedals tab](/guides/pedals-and-handbrake/) — passive pedals don't
> get vibration effects.
