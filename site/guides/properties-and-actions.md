---
layout: guide.njk
title: Properties & Actions Reference
description: Every AZOM.* SimHub property and bindable action, with types, ranges and step sizes.
tags: guide
order: 20
---

The complete reference for what AZOM publishes to SimHub. **Properties** are read-only
values you can show in a dashboard, overlay or formula; **actions** are the bindable
commands that change a setting from a button.

For how to bind an action to a wheel button, see
[Controls &amp; Actions](/guides/controls-and-actions/). This page is the full table.

## Properties

### Status &amp; live input

Populated directly from the device, so they update even when no game is running.

| Property | Type | Description |
|---|---|---|
| `AZOM.BaseConnected` | bool | Wheelbase connection status |
| `AZOM.BaseState` | int | Wheelbase state |
| `AZOM.McuTemp` | double | MCU temperature (°C or °F, per the temperature-unit setting) |
| `AZOM.MosfetTemp` | double | MOSFET temperature (°C or °F, per the temperature-unit setting) |
| `AZOM.MotorTemp` | double | Motor temperature (°C or °F, per the temperature-unit setting) |
| `AZOM.CurrentTorque` | double | Live motor torque in Nm, unsigned: direction is dropped, so this is the magnitude whichever way the base is pulling. Refreshed at 5 Hz whether or not the settings panel is open |
| `AZOM.CurrentTorqueRaw` | double | The same live torque in Nm, signed: the sign is the direction the base is pulling |
| `AZOM.MaxTorque` | double | Highest `AZOM.CurrentTorque` seen this session, in Nm. Resets when a game starts |
| `AZOM.TorqueLimit` | double | The wheelbase's rated peak torque in Nm (R9 = 9, R16 = 16, R25 = 25 …); `-1` if the base model isn't recognised. Fixed per base. For your configured output limit, see `AZOM.Torque` |
| `AZOM.MaxAngle` | int | Max steering angle (degrees) |
| `AZOM.ClutchSplitPoint` | int | Clutch split point (%) for the current wheel, as shown on the wheel device page (Paddles Mode = Combined) |
| `AZOM.HidConnected` | bool | Whether a device HID surface is being read (live input is available) |
| `AZOM.SteeringAngle` | double | Live steering angle in degrees (0 = center, ± = each lock direction); 0 until max-angle is known |
| `AZOM.SteeringPosition` | double | Live steering as 0–100 (0 = full lock, 50 = center, 100 = full lock); -1 when unknown |
| `AZOM.Throttle` | int | Throttle pedal position (0–100) |
| `AZOM.Brake` | int | Brake pedal position (0–100) |
| `AZOM.Clutch` | int | Clutch pedal position (0–100) |
| `AZOM.Handbrake` | int | Handbrake position (0–100) |
| `AZOM.LeftPaddle` | int | Left analog paddle position (0–100) |
| `AZOM.RightPaddle` | int | Right analog paddle position (0–100) |
| `AZOM.CombinedPaddle` | int | Combined analog paddle axis position (0–100) |
| `AZOM.Ab9Connected` | bool | AB9 active shifter presence |
| `AZOM.Ab9Layout` | string | AB9 mechanical layout of the active profile: `5+R Layout 1`, `6+R Layout 1`, `6+R Layout 2`, `7+R Layout 1`, `7+R Layout 2`, or `Sequential` |

### Dashboard telemetry

| Property | Type | Description |
|---|---|---|
| `AZOM.TelemetryState` | string | Telemetry pipeline phase: `Idle`, `SilenceWait`, `Starting`, `Active`, `HotSwitchBurst`, `Recovery` or `Parked` |
| `AZOM.DashboardBound` | bool | Best-effort "telemetry is flowing" flag (true when the phase is `Active`) |

> `AZOM.DashboardBound` is best-effort: there is no wheel-side commit signal, so it can
> read true while a wheel silently ignores the binding. Treat it as a health indicator,
> not a guarantee.

### Wheelbase settings

Every wheelbase setting on the plugin's [Base tab](/guides/configure-the-wheelbase/) is
also a property, in the same units the slider shows. Each has a matching set of actions
below. Values track what the base reported on its last settings read, so they hold their
defaults until the base answers after connect.

The numeric ones read `-1` when the value isn't available: the plugin is still loading,
or the setting doesn't exist on this firmware (equalizer bands 7–10 on 6-band bases).

| Property | Type | Range | Description |
|---|---|---|---|
| `AZOM.FfbStrength` | int | 0–100 | Game FFB strength (%) |
| `AZOM.Torque` | int | 50–100 | Base torque output limit (%): the setting, not the rating. See `AZOM.TorqueLimit` |
| `AZOM.Rotation` | int | 60–2700 | Wheel rotation angle (degrees) |
| `AZOM.WheelSpeedLimit` | int | 0–200 | Maximum wheel speed (%) |
| `AZOM.Interpolation` | int | 0–10 | FFB interpolation |
| `AZOM.GearshiftVibration` | int | 0–5 | Base gear-shift vibration intensity |
| `AZOM.Damper` | int | 0–100 | Wheel damper (%) |
| `AZOM.Friction` | int | 0–100 | Wheel friction (%) |
| `AZOM.Inertia` | int | 100–500 | Natural inertia (Wheelbase Effects) |
| `AZOM.Spring` | int | 0–100 | Wheel spring: the base's own centering force (%) |
| `AZOM.GameDamper` | int | 0–100 | Game damper effect gain (%) |
| `AZOM.GameFriction` | int | 0–100 | Game friction effect gain (%) |
| `AZOM.GameInertia` | int | 0–100 | Game inertia effect gain (%) |
| `AZOM.GameSpring` | int | 0–100 | Game spring effect gain (%) |
| `AZOM.NaturalInertia` | int | 100–4000 | Steering wheel inertia (Protection) |
| `AZOM.SoftLimitStiffness` | int | 1–10 | Soft limit stiffness |
| `AZOM.SpeedDamping` | int | 0–100 | High-speed damping level (%) |
| `AZOM.SpeedDampingPoint` | int | 0–400 | High-speed damping trigger speed (kph) |
| `AZOM.RoadSensitivity` | int | 0–10 | Road sensitivity preset index; -1 until the base reports it |
| `AZOM.Equalizer1` … `AZOM.Equalizer10` | int | 0–400/500 | FFB equalizer bands, in **register** order. Bands 7–10 read -1 on 6-band firmware. Band 6 (100 Hz) caps at 100 on 10-band firmware, the rest at 500; all six cap at 400 on legacy firmware |
| `AZOM.FfbCurveX1` … `X4`, `AZOM.FfbCurveY1` … `Y5` | int | 0–100 | FFB output curve node positions |
| `AZOM.Protection` | bool | | Hands-off protection enabled |
| `AZOM.FfbReverse` | bool | | Force feedback reversal enabled |
| `AZOM.SoftLimitRetain` | bool | | Soft limit "retain game FFB" enabled |
| `AZOM.PerformanceOutput` | bool | | Performance output on full (false = reserved) |
| `AZOM.BaseStatusLed` | bool | | Base status LED on |
| `AZOM.Bluetooth` | bool | | Bluetooth on |
| `AZOM.WorkMode` | int | 0/1 | 0 = base running, 1 = standby |

The equalizer bands are numbered by hardware register, which is **not** frequency order on
10-band firmware. Register order maps to 5/15/25/40/60/100 Hz for bands 1–6 and
10/30/50/80 Hz for bands 7–10.

> **Properties are read-only.** A dashboard formula can *display* `AZOM.Spring`, but it
> can't set it. SimHub gives plugins no way to accept a value from a formula. Changing a
> setting always goes through an action, which means a button press.

## Actions

Bindable under SimHub's **Controls and events**, or from dashboard controls. They change
the same settings as the sliders and toggles in the plugin UI, push to hardware
immediately, and persist to the active profile.

### Step actions

Each *step* setting registers four actions: `…Up` / `…Down` apply a fine step, and
`…UpCoarse` / `…DownCoarse` apply a coarse step. Values clamp to the slider range.

| Action | Range | Fine | Coarse | Effect |
|---|---|---|---|---|
| `AZOM.FfbStrengthUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100% | ±5 | ±10 | Wheelbase FFB strength |
| `AZOM.TorqueUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 50–100% | ±5 | ±10 | Wheelbase torque limit |
| `AZOM.RotationUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 60–2700° | ±90° | ±180° | Steering rotation (max angle) |
| `AZOM.WheelSpeedLimitUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–200% | ±5 | ±10 | Maximum wheel speed |
| `AZOM.InterpolationUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–10 | ±1 | ±2 | FFB interpolation |
| `AZOM.GearshiftVibrationUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–5 | ±1 | ±2 | Base gear-shift vibration intensity |
| `AZOM.DamperUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100% | ±5 | ±10 | Wheel damper |
| `AZOM.FrictionUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100% | ±5 | ±10 | Wheel friction |
| `AZOM.InertiaUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 100–500 | ±10 | ±50 | Natural inertia (Wheelbase Effects) |
| `AZOM.SpringUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100% | ±5 | ±10 | Wheel spring: the base's own centering force |
| `AZOM.GameDamperUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100% | ±5 | ±10 | Game damper effect gain |
| `AZOM.GameFrictionUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100% | ±5 | ±10 | Game friction effect gain |
| `AZOM.GameInertiaUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100% | ±5 | ±10 | Game inertia effect gain |
| `AZOM.GameSpringUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100% | ±5 | ±10 | Game spring effect gain |
| `AZOM.NaturalInertiaUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 100–4000 | ±50 | ±200 | Steering wheel inertia (Protection) |
| `AZOM.SoftLimitStiffnessUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 1–10 | ±1 | ±2 | Soft limit stiffness |
| `AZOM.SpeedDampingUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100% | ±5 | ±10 | High-speed damping level |
| `AZOM.SpeedDampingPointUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–400 kph | ±10 | ±50 | High-speed damping trigger speed |
| `AZOM.RoadSensitivityUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–10 | ±1 | ±2 | Road sensitivity preset (also rewrites the FFB equalizer curve, exactly like the Base-tab preset buttons) |
| `AZOM.Equalizer1Up` … `AZOM.Equalizer10…DownCoarse` | 0–400/500% | ±5 | ±25 | FFB equalizer bands, in register order (see the property table) |
| `AZOM.FfbCurveX1Up` … `AZOM.FfbCurveY5…DownCoarse` | 0–100 | ±5 | ±10 | FFB output curve node positions |
| `AZOM.ClutchSplitUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100% | ±5 | ±10 | Clutch split point: the combined-paddle bite point (Paddles Mode = Combined) |
| `AZOM.Ab9EngineIntensityUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100 | ±5 | ±10 | AB9 engine-vibration intensity |
| `AZOM.Ab9EngineFrequencyUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–200 Hz | ±10 | ±20 | AB9 engine-vibration frequency |
| `AZOM.Ab9GearShiftIntensityUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100 | ±5 | ±10 | AB9 gear-shift vibration intensity |
| `AZOM.DisplayBrightnessUp` / `…Down` / `…UpCoarse` / `…DownCoarse` | 0–100% | ±5 | ±10 | Wheel screen display brightness |

> **Flash-friendly.** Wheelbase settings live in the base's parameter store, which is
> flash. A step action that would leave the value unchanged (already at the top or bottom
> of its range) writes nothing, so holding a bound button at a limit costs no extra flash
> writes.

### Toggle actions

Each wheelbase *toggle* has three actions (`…On`, `…Off` and `…Toggle`):

| Action | Effect |
|---|---|
| `AZOM.ProtectionOn` / `…Off` / `…Toggle` | Hands-off protection |
| `AZOM.FfbReverseOn` / `…Off` / `…Toggle` | Force feedback reversal |
| `AZOM.SoftLimitRetainOn` / `…Off` / `…Toggle` | Soft limit "retain game FFB" |
| `AZOM.PerformanceOutputOn` / `…Off` / `…Toggle` | Performance output (on = full, off = reserved) |
| `AZOM.BaseStatusLedOn` / `…Off` / `…Toggle` | Base status LED |
| `AZOM.BluetoothOn` / `…Off` / `…Toggle` | Wheelbase Bluetooth |

`AZOM.BaseStatusLed*` and `AZOM.Bluetooth*` are stored in the base itself and are not part
of a per-game profile, so they don't change when you switch games.

### Direct-set, dashboard and device actions

| Action | Effect |
|---|---|
| `AZOM.DisplayBrightness0` … `AZOM.DisplayBrightness100` | Set wheel screen display brightness to a fixed level (0–100% in steps of 10) |
| `AZOM.WorkModeOff` | Turn off the wheelbase work mode (puts the base into standby) |
| `AZOM.WorkModeOn` | Turn on the wheelbase work mode (normal active state) |
| `AZOM.WorkModeToggle` | Flip the wheelbase between standby and its normal active state |
| `AZOM.Ab9LayoutNext` | Switch the AB9 shifter to the next mechanical layout (wraps around) |
| `AZOM.Ab9LayoutPrev` | Switch the AB9 shifter to the previous mechanical layout (wraps around) |
| `AZOM.Ab9Layout5R1` / `…6R1` / `…6R2` / `…7R1` / `…7R2` / `…Sequential` | Set the AB9 mechanical layout directly |
| `AZOM.DashboardNext` | Switch the wheel's displayed dashboard to the next enabled slot (wraps around) |
| `AZOM.DashboardPrev` | Switch the wheel's displayed dashboard to the previous enabled slot (wraps around) |
| `AZOM.DashboardTelemetryToggle` | Toggle dashboard telemetry on/off for the active wheel page |
| `AZOM.DashboardTelemetryOn` | Enable dashboard telemetry for the active wheel page |
| `AZOM.DashboardTelemetryOff` | Disable dashboard telemetry for the active wheel page |
| `AZOM.DisplayToggle` | Toggle the wheel screen on/off (remembers the on-brightness so toggling back on restores it) |
| `AZOM.TestModeToggle` | Toggle telemetry test mode (synthetic signal sweep) for the active wheel page |
| `AZOM.ClearLeds` | Blank all wheel and dash LEDs |
| `AZOM.CalibrateCenter` | Re-center the wheelbase (same as the Calibrate Center button; hold the wheel at physical center when triggering) |

### Diagnostic actions

| Action | Effect |
|---|---|
| `AZOM.Fsr1ProbeToggle` | Turn the FSR V1 single-byte payload probe on or off |
| `AZOM.Fsr1ProbeNext` / `…Prev` | Step the probed payload offset up or down |

These exist to walk an FSR V1 dashboard's payload boundaries by hand while watching the
screen. The ◀ / ▶ buttons on the Dashboard Telemetry card do the same thing. There is no
reason to bind them unless you're helping debug that wheel.
