---
layout: guide.njk
title: Plugin Options
description: Plugin-wide switches — profiles on launch, language, bug reports and diagnostics, LED output pacing, USB detection and device definitions.
tags: guide
order: 17
---

Unlike the hardware tabs, most of what lives on the **Options** tab is plugin-wide rather
than per profile — language, diagnostics, detection behaviour and a few advanced switches
you'll hopefully never need.

![The AZOM Options tab showing profiles, language, diagnostics and LED output settings](/docs/images/OptionsPage.png)

## Profiles

**Apply profile settings on launch** pushes your active profile's hardware settings to the
devices as soon as SimHub starts, so the rig matches the profile before you ever launch a
game.

## Language

AZOM ships with 11 translations. **Auto** follows SimHub's language setting (then the OS);
pick a specific language to override. Close and re-open the settings page to apply a
change.

## Report a problem &amp; diagnostics

Hit a bug? Describe the issue, optionally leave a contact, and click **Submit Bug
Report** — this uploads a diagnostic bundle (plugin logs and a serial trace, with hardware
identifiers redacted) straight to the developer. Prefer to attach it yourself? **Export
Bundle** saves the same bundle as a ZIP you can post on
[Discord](https://discord.gg/J4enw43e62) or GitHub. Capture data lives in memory only —
nothing is saved between launches unless you export or submit it.

## Wheel LED output

Leave these **off** unless you're chasing an LED problem:

- **Limit updates to wheel** — only send LED data when it actually changes.
- **Always resend bitmask** — re-send the full LED state with every update.
- **Keepalive timeout** — how long to keep refreshing the LEDs after telemetry stops
  before the wheel is allowed to sleep; 0 stops immediately.

## USB detection

- **Disable serial-probe fallback** — only needed if the plugin is talking to the wrong
  serial device.
- **Disable AB9 active-shifter detection** — skips the AB9 reconnect probe; see the
  [AB9 guide](/guides/ab9-shifter/).

## Dashboard telemetry

- **Download dashboards from wheel / Upload dashboard on connect** — keep the wheel's
  stored dashboard list in sync with SimHub.
- **Wheel firmware era** — **Auto** detects the wheel's firmware era from its handshake
  and picks the matching telemetry protocol; the **2024** and **2026** overrides exist
  only for when auto-detection gets it wrong and telemetry doesn't work.

## Device definitions

**Redeploy All Definitions** force-rewrites every SimHub device definition AZOM has
deployed — useful after fixing a broken definition or for demo machines. **Show all tabs
(advanced)** reveals every plugin tab regardless of what hardware is detected.

## Reset

**Clear All Settings &amp; Profiles** resets every plugin setting and profile to defaults.
There is no undo — export anything you care about first.

> **Updates and the full diagnostic report** live on the About tab — see
> [Updates &amp; Diagnostics](/guides/updates-and-diagnostics/).
