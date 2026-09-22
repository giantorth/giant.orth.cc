---
layout: guide.njk
title: Dashboard & Channels
description: Stream live telemetry to your wheel's LCD and bind any SimHub property to each display channel.
tags: guide
order: 16
---

If your wheel has an LCD, AZOM can push live race data to it through MOZA's binary
telemetry protocol — speed, gear, lap times, fuel, tyre temps, flags and more. You pick a
layout, then map each of its channels to a SimHub property.

## Turn on dashboard telemetry

Open your wheel under **Devices**, go to **MOZA Wheel › Dashboard**, and switch **Enable
dashboard telemetry** on. Choose a **Dashboard** layout from the dropdown, and use **Send
test pattern** to confirm the screen is receiving data before you go racing.

![The Dashboard tab showing telemetry toggle, layout picker, display settings and channel mappings](/docs/images/WheelDashboard.png)

The **Display** panel sets screen **Brightness**, **Standby Time** (how long before the
LCD sleeps when idle) and, on wheels that support it, **Display Rotation** — *Off*,
*Immediate*, or *Smooth*, which rotates the screen contents to stay upright as you steer.

## Map the channels

Each layout exposes a set of named **Channels** (Gear, SpeedKmh, CurrentLapTime, TC, ABS,
tyre pressures…), each already bound to a sensible SimHub property. To change one, click
the **pencil** on its row and search the full SimHub property tree.

![The channel mapping editor with a property search open](/docs/images/WheelChannelMapping.png)

Type to filter — for example `gap` surfaces every gap-to-leader and gap-to-player
property — pick one, and click **Ok**. The **Current value** column updates live, so you
can confirm the binding is feeding real numbers.

**Reset field** puts one row back to its default; **Reset to defaults** clears every
override on this dashboard.

> **Tip:** Any of SimHub's properties works here, or from other plugins. The display isn't limited to the stock fields.

## Master channel defaults

The per-dashboard mappings above are per dashboard — change layouts and you start again.
**Master Defaults** opens a second mapper whose bindings apply to *every* dashboard.

It has its own named profiles, with their own dropdown and New / Clone / Edit / Manage
buttons and its own import/export, completely separate from the device profiles on the
plugin's Options tab. That means you can pair any set of channel defaults with any device
profile without the two having to line up.

Each channel resolves in this order, first match wins:

1. A **per-dashboard override** from the channel-mapping editor above.
2. Your **master channel defaults**.
3. The built-in default shipped for that channel.

So set a property once in Master Defaults and every layout picks it up, while a
per-dashboard override still wins where you want something different.

## Next: getting layouts onto the wheel

Everything above assumes the layout is already on the wheel. To upload one, convert a
SimHub dashboard, or manage what's stored on the device, see
[Wheel Files &amp; Dashboard Upload](/guides/wheel-files/).
