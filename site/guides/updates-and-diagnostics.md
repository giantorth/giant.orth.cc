---
layout: guide.njk
title: Updates & Diagnostics
description: Keep AZOM current from the right release channel, and pull a full diagnostic report when something misbehaves.
tags: guide
order: 18
---

The **About** tab in the AZOM panel carries the version, project links, the update notifier
and the full diagnostic report — worth knowing for staying current and for reporting
problems.

![The AZOM About tab showing version, update channel and the diagnostic report](/docs/images/AboutPage.png)

## Updates

Turn on automatic checks and pick a **Release channel**. *Development* gets the newest
in-progress builds. **Check now** runs a check on the spot and shows when the last one
happened.

## Full diagnostic report

The **Full Diagnostic Report** section renders everything the plugin knows about your
setup — detected hardware, firmware versions, connection state — in one multi-section
dump. Click **Expand** to render it, then **Copy All to Clipboard** to paste it into a
bug report or a Discord thread.

## Reporting a bug

Bug reports themselves live on the Options tab: the **Report a problem** card submits a
diagnostic bundle (logs plus a serial trace, hardware identifiers redacted) directly to
the developer, or exports it as a ZIP you can attach by hand — see
[Plugin Options](/guides/options/).

> **That's the tour.** From here you've got force feedback, pedals, LEDs, the LCD
> dashboard, button actions and SDK support all running through SimHub — no Pit House
> required.
