---
layout: guide.njk
title: Controls & Actions
description: Bind wheel buttons to AZOM actions for every wheelbase setting, clutch bite point, brightness, dashboard switching and more.
tags: guide
order: 18
---

AZOM exposes 200+ bindable actions. **Every setting on the Base tab** can be nudged from a
button: FFB strength, rotation, spring, damper, the equalizer bands, the output curve.
So can display brightness, dashboard switching, the clutch bite point and work mode.
Map them to wheel buttons and you can tune your base without leaving the cockpit. The
binding is done through SimHub's **Controls and events**.

## 1 · Open Controls and events

Pick **Controls and events** from the left menu and stay on the **Controls** tab. This is
the list of every button-to-action mapping on your rig. Click **New mapping** to add one.

![The Controls and events screen listing controller action mappings](/docs/images/ControlsandEvents.png)

## 2 · Bind a button to an AZOM action

The **Mapping Picker** opens. It has two halves:

- **Source** (left): the input. Press the wheel button you want to use and it
  auto-selects, or pick it from the list.
- **Target** (right): the action. Choose the **AZOM** plugin and scroll its actions:
  `AZOM.FfbStrengthUp`, `AZOM.RotationDown`, `AZOM.DisplayBrightnessUp`,
  `AZOM.DisplayToggle`, and so on. The `…Coarse` variants jump in bigger steps.

![The Mapping Picker dialog with a wheel input as source and AZOM actions as target](/docs/images/MappingPicker.png)

Set the **Input mode** (ShortPress, LongPress, etc.), use **Trigger action now** to test
it lands, and click **Ok**. Repeat for each control you want. A typical setup pairs two
buttons for FFB up/down and two more for dashboard previous/next.

> **Fine vs Coarse.** Bind the normal action to a short press and the `…Coarse` version to
> a long press of the same button, and you get both precision and speed from one input.

## All available actions

Every action is namespaced `AZOM.` and appears under the **AZOM** plugin in the Mapping
Picker's target list. Each one nudges, sets or toggles exactly what the matching control in
the plugin panel does, and persists the change.

> **Full table.** The complete list, with every range and step size (and the matching
> read-only properties), is in the
> [Properties &amp; Actions Reference](/guides/properties-and-actions/). What follows is the
> practical subset.

### Step actions

Most settings can be stepped up or down from a button. Each registers four variants. Add
the suffix to the base name:

- `…Up` / `…Down`: one **fine** step
- `…UpCoarse` / `…DownCoarse`: one **coarse** step

So `AZOM.FfbStrengthUp` raises FFB by 5 %, and `AZOM.FfbStrengthDownCoarse` drops it by
10 %. Values clamp to each setting's range.

#### Wheelbase

Every slider on the [Base tab](/guides/configure-the-wheelbase/) has a matching step action.

| Base action | Fine | Coarse | Range | Controls |
|---|---|---|---|---|
| `AZOM.FfbStrength` | ±5 | ±10 | 0–100 % | Game FFB strength |
| `AZOM.Torque` | ±5 | ±10 | 50–100 % | Base torque output |
| `AZOM.Rotation` | ±90 | ±180 | 60–2700° | Steering rotation (angle + max together) |
| `AZOM.WheelSpeedLimit` | ±5 | ±10 | 0–200 % | Maximum wheel speed |
| `AZOM.Interpolation` | ±1 | ±2 | 0–10 | FFB interpolation |
| `AZOM.GearshiftVibration` | ±1 | ±2 | 0–5 | Shift intensity |
| `AZOM.Damper` | ±5 | ±10 | 0–100 % | Wheel damper |
| `AZOM.Friction` | ±5 | ±10 | 0–100 % | Wheel friction |
| `AZOM.Inertia` | ±10 | ±50 | 100–500 | Natural inertia (wheelbase effects) |
| `AZOM.Spring` | ±5 | ±10 | 0–100 % | Wheel spring, the base's own centering force |
| `AZOM.GameDamper` | ±5 | ±10 | 0–100 % | Game damper gain |
| `AZOM.GameFriction` | ±5 | ±10 | 0–100 % | Game friction gain |
| `AZOM.GameInertia` | ±5 | ±10 | 0–100 % | Game inertia gain |
| `AZOM.GameSpring` | ±5 | ±10 | 0–100 % | Game spring gain |
| `AZOM.NaturalInertia` | ±50 | ±200 | 100–4000 | Steering wheel inertia (protection) |
| `AZOM.SoftLimitStiffness` | ±1 | ±2 | 1–10 | Soft limit stiffness |
| `AZOM.SpeedDamping` | ±5 | ±10 | 0–100 % | High-speed damping level |
| `AZOM.SpeedDampingPoint` | ±10 | ±50 | 0–400 kph | High-speed damping trigger speed |
| `AZOM.RoadSensitivity` | ±1 | ±2 | 0–10 | Road sensitivity preset (also rewrites the equalizer curve, exactly like the Base-tab preset buttons) |
| `AZOM.Equalizer1` … `AZOM.Equalizer10` | ±5 | ±25 | 0–400/500 % | Individual FFB equalizer bands |
| `AZOM.FfbCurveX1` … `X4`, `AZOM.FfbCurveY1` … `Y5` | ±5 | ±10 | 0–100 | Individual FFB output-curve nodes |

Equalizer bands are numbered by hardware register, not by frequency. Bands 1–6 are
5 / 15 / 25 / 40 / 60 / 100 Hz; on 10-band firmware bands 7–10 fill in 10 / 30 / 50 / 80 Hz.
On 6-band bases, bands 7–10 do nothing.

#### Wheel & shifter

| Base action | Fine | Coarse | Range | Controls |
|---|---|---|---|---|
| `AZOM.DisplayBrightness` | ±5 | ±10 | 0–100 % | Wheel screen brightness |
| `AZOM.ClutchSplit` | ±5 | ±10 | 0–100 % | Clutch split point (the combined-paddle bite point) |
| `AZOM.Ab9EngineIntensity` | ±5 | ±10 | 0–100 | AB9 shifter engine-vibration intensity |
| `AZOM.Ab9EngineFrequency` | ±10 | ±20 | 0–200 Hz | AB9 shifter engine-vibration frequency |
| `AZOM.Ab9GearShiftIntensity` | ±5 | ±10 | 0–100 | AB9 shifter gear-shift vibration |

> **AB9 actions** only take effect when an AB9 active-shifter profile is loaded. See the
> [AB9 Active Shifter](/guides/ab9-shifter/) guide for what they control.

> **Finding the clutch bite point on track.** `AZOM.ClutchSplit` moves the same slider as
> **Clutch Split Point** on your wheel's device page, so you can hunt for a car's bite point
> during a practice lap instead of alt-tabbing to drag it. It only applies when the wheel's
> **Paddles Mode** is set to *Combined*.

### Toggle actions

Each of these registers three variants (`…On`, `…Off` and `…Toggle`):

| Base action | Controls |
|---|---|
| `AZOM.Protection` | Hands-off protection |
| `AZOM.FfbReverse` | Force feedback reversal |
| `AZOM.SoftLimitRetain` | Soft limit's "retain game FFB" |
| `AZOM.PerformanceOutput` | Performance output (on is *Full*, off is *Reserved*) |
| `AZOM.BaseStatusLed` | The base's status LED |
| `AZOM.Bluetooth` | Wheelbase Bluetooth |

`AZOM.BaseStatusLed…` and `AZOM.Bluetooth…` are stored in the base itself rather than in a
per-game profile, so they stay put when you switch games.

### Jump to a display brightness

Eleven actions set the wheel screen to a fixed level in a single press, from
`AZOM.DisplayBrightness0` (off) through `AZOM.DisplayBrightness100`, in steps of 10
(`AZOM.DisplayBrightness50`, `AZOM.DisplayBrightness80`, and so on).

### Dashboard & telemetry

| Action | What it does |
|---|---|
| `AZOM.DashboardNext` | Switch the wheel to the next dashboard layout (wraps around) |
| `AZOM.DashboardPrev` | Switch to the previous dashboard layout |
| `AZOM.DashboardTelemetryToggle` | Toggle telemetry streaming to the active wheel page |
| `AZOM.DashboardTelemetryOn` | Start streaming telemetry to the wheel |
| `AZOM.DashboardTelemetryOff` | Stop streaming telemetry to the wheel |
| `AZOM.TestModeToggle` | Run / stop the synthetic telemetry sweep for testing the dash |

Dashboard cycling needs more than one layout loaded on the wheel; with zero or one it does
nothing.

### Display, base & LEDs

| Action | What it does |
|---|---|
| `AZOM.DisplayToggle` | Blank the wheel screen, or restore it at the previous brightness |
| `AZOM.WorkModeOn` | Put the base in its normal active mode |
| `AZOM.WorkModeOff` | Put the base into standby |
| `AZOM.WorkModeToggle` | Flip the base between active and standby |
| `AZOM.ClearLeds` | Turn off every LED the plugin is driving |
| `AZOM.CalibrateCenter` | Re-center the wheelbase (hold the wheel at physical center when triggering) |

## Reading the same settings in a dashboard

Every setting above is also published as a SimHub **property** under the same name, minus
the step suffix: `AZOM.Spring`, `AZOM.Torque`, `AZOM.ClutchSplitPoint`, `AZOM.Equalizer3`
and so on. Use them in a dashboard or overlay to show what a button just changed.

They sit alongside the live status properties: `AZOM.BaseConnected`, `AZOM.McuTemp`,
`AZOM.MotorTemp`, `AZOM.SteeringAngle`, `AZOM.Throttle`, `AZOM.Brake`, `AZOM.Clutch`,
`AZOM.LeftPaddle`, `AZOM.RightPaddle` and friends, which are read straight off the device
and update even with no game running.

A numeric setting reads `-1` when its value isn't available yet: the plugin is still
starting up, or the setting doesn't exist on your firmware (equalizer bands 7–10 on
6-band bases).

> **Properties are read-only.** A dashboard formula can *display* `AZOM.Spring`, but it
> can't set it. SimHub gives plugins no way to accept a value from a formula. Changing a
> setting always goes through an action, which means a button press. Automatic,
> telemetry-driven adjustment (say, easing off the centering force as the car slides) has
> to be built into the plugin itself.

Every property, with its type and range, is listed in the
[Properties &amp; Actions Reference](/guides/properties-and-actions/).
