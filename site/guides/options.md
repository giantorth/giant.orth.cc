---
layout: guide.njk
title: Plugin Options
description: Plugin-wide switches — profiles on launch, LFE ownership, Forza compatibility, language, updates, the SDK server and device definitions.
tags: guide
order: 22
---

Unlike the hardware tabs, what lives on the **Options** tab is plugin-wide rather than per
profile — language, updates, detection behaviour and a few advanced switches you'll
hopefully never need.

## Settings

- **Apply profile settings on launch** — pushes your active profile's hardware settings to
  the devices as soon as SimHub starts, so the rig matches the profile before you ever
  launch a game.
- **Wheelbase LFE source** — chooses who owns the wheelbase's three low-frequency
  oscillators: the **Plugin LFE tab** (see [LFE Effects](/guides/lfe-effects/)) or
  **SimHub ShakeIt** (the default on new installs), which puts them in the ShakeIt Motors
  editor instead. ShakeIt needs SimHub 9.12 or newer. Exactly one owns them, because the two would sum on the
  wire. Switching rewrites the device definition, so SimHub needs a restart. The row only
  appears on LFE-capable firmware.
- **Forza Horizon compatibility** — a persistent wheelbase-side mode for the Forza titles.
  It lives in the base rather than in plugin settings, so the toggle shows what the base
  actually holds — including a value Pit House set.
- **Keepalive timeout** — how long the LEDs hold their last state once effects stop,
  before the wheel returns to its own lighting. 0–300 s.

## Language

AZOM ships with 12 translations. **Auto** follows SimHub's language setting, then your OS;
pick a specific language to override it. A change requires a restart.

## Updates

**Check for updates automatically** turns on the in-plugin update notifier, and **Check
now** runs a check on the spot.

**Release channel** is **Stable** plus one entry per open pull request. Picking a PR
channel installs and tracks that PR's per-commit builds — handy for testing a fix before it
lands, but expect bugs. There is no general "development" channel; stay on Stable unless
you're chasing a specific PR.

When a newer release is found, a banner appears above this card with **Install update**,
**Open release notes**, **Skip this version** and **Dismiss**.

## SDK

**Enable CoAP SDK server** and **Enable UDP control server**, each with its own live status
line. See [SDK &amp; iRacing](/guides/sdk-and-iracing/) for what these are and when you
need them.

## Device definitions

- **Redeploy all definitions** — force-rewrites every SimHub device definition AZOM has
  deployed. Useful after a definition gets broken, or on a demo machine.
- **Show all tabs (advanced)** — reveals every plugin tab regardless of what hardware is
  detected. Handy for looking around; the controls on a tab for hardware you don't have
  won't do anything.

## Reset

**Clear all settings &amp; profiles** resets every plugin setting and profile to defaults.
There is no undo — export anything you care about first.

> **Bug reports and the diagnostic report** live on the **Help** tab, not here — see
> [Diagnostics &amp; Bug Reports](/guides/diagnostics-and-bug-reports/).
