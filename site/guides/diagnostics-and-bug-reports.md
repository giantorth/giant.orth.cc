---
layout: guide.njk
title: Diagnostics & Bug Reports
description: Use the Help tab to file a bug report with a redacted diagnostic bundle attached, or read the full diagnostic report yourself.
tags: guide
order: 23
---

The **Help** tab in the AZOM panel carries the version, the project links, the bug-report
form and the full diagnostic report. It's the tab to open when something misbehaves.

## About

The version the plugin is running, links out to **GitHub**, **Discord**, **Sponsor** and
**Ko-fi**, and a thank-you to the alpha and beta testers who made the protocol work
possible.

> **Looking for updates?** The update notifier and release-channel picker are on the
> **Options** tab — see [Plugin Options](/guides/options/).

## Report a problem

The fastest way to get a bug looked at:

1. **Describe the problem** — what you did, what the wheel or dash did, and when it
   started.
2. **Contact** (optional) — an email address or Discord handle, so you can be asked for
   more detail.
3. **Submit bug report** — uploads the diagnostic bundle straight to the developer.

**Copy Reference** copies the id of a submitted report, which is what to quote on Discord
if you want to follow it up.

Prefer to attach it yourself? **Export Bundle** saves the same bundle as a ZIP and uploads
nothing — post it on [Discord](https://discord.gg/J4enw43e62) or attach it to a GitHub
issue.

### What's in the bundle

- `manifest.txt` — plugin version, SimHub version, OS, and a capture summary.
- `report.txt` — your description and contact, when you submitted one.
- `serial-capture-startup.txt` — the first ~60 seconds of serial traffic (connect and
  handshake), frozen, so a connection problem is always captured even if you notice it an
  hour later.
- `serial-capture-rolling.txt` — a rolling window of the most recent traffic, so whatever
  just went wrong is in there too.
- `diagnostics.txt` — the full diagnostic report below.
- `plugin-settings.json` — your serialized plugin settings.
- `moza-log.txt` — every `[AZOM]` log line since launch, read from the plugin's own ring
  buffer (so SimHub's log flush cadence and file location don't matter).
- `device-display-log.txt` — the wheel display's own application log, when one could be
  pulled.
- `upload-log.txt` — upload attempts and failure detail, if any.

**Hardware identifiers — serial numbers and MCU UIDs — are masked in the capture files.**
Nothing is written to disk until you submit or export; the capture lives in memory and is
wiped each time SimHub restarts.

## Full diagnostic report

The **Full Diagnostic Report** section renders everything the plugin knows about your
setup — detected hardware, firmware versions, connection state, dashboard and session
info — in one multi-section dump. Click **Expand** to render it, then **Copy All** to paste
it into a Discord thread.

This is the same text that goes into the bundle as `diagnostics.txt`, so you rarely need to
copy it by hand — but it's useful for answering "is the plugin even seeing my shifter?"
without filing anything.

> **That's the tour.** From here you've got force feedback, pedals, LEDs, the LCD
> dashboard, button actions and SDK support all running through SimHub — no Pit House
> required.
