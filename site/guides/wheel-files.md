---
layout: guide.njk
title: Wheel Files & Dashboard Upload
description: Manage the dashboards stored on your wheel, upload new .mzdash layouts, and convert a SimHub dashboard into one.
tags: guide
order: 17
---

[Dashboard &amp; Channels](/guides/dashboard-and-channels/) covers streaming telemetry into
a layout the wheel already has. The **Files** tab is where those layouts come from: it
lists what is stored on the device, uploads new ones, and can build an `.mzdash` from a
MOZA Dashboard Studio project or from a SimHub dashboard you already own.

Open your wheel (or a stand-alone CM1/CM2 dash) under **Devices**, then switch to
**Files**.

## Wheel Files — what's on the device

The **Wheel Files** card lists every dashboard currently stored on the wheel, with its
**State**, **Title** and **Last modified** date. **Refresh** re-reads the list from the
device.

- **Enable** appears on a row that is disabled, and turns that dashboard back on so the
  wheel will display it.
- **Delete** removes the dashboard from the device. It asks first, naming the folder it is
  about to remove.

Deleting is how you reclaim space on a wheel that has filled up.

## Dashboard Upload

### Pick a source

The **Upload Source** card on the right chooses where the dashboard comes from:

- **Local .mzdash file** — **Pick .mzdash…** opens a file browser. Use this for a
  dashboard someone sent you, or one you exported yourself.
- **Dashboard library** — a folder of `.mzdash` files, listed in a dropdown. **Set
  folder…** points at any folder you like; **Auto-detect** finds the dashboard folder for
  the connected wheel on its own, and is the right button to try first if you have Pit
  House installed. **Refresh** re-scans it.

### Upload

**Upload Now** sends the selected dashboard to the wheel. The **Upload status** line below
tracks progress, and the wheel's **RPM bar doubles as a progress bar** — the LEDs stop
following telemetry and fill as the transfer lands, so you can watch it from the cockpit.

A few things worth knowing:

- **Only one upload at a time.** Clicking Upload again while one is running is declined
  rather than started, because two transfers fighting over the same connection break both.
- **A stalled upload now fails instead of hanging.** If the transfer can't complete you'll
  get an error, not a percentage that sits still forever.
- **Re-uploading a dashboard keeps your per-game choice.** The wheel changes a dashboard's
  internal id on every upload, so AZOM remembers your selection by name, and the channel
  mappings follow it.

## Authoring: Dashboard Studio

If MOZA Dashboard Studio is installed (it ships inside Pit House, as
`bin\MOZA Dashboard Studio.exe`), two more buttons light up:

- **Edit in Studio** — opens the selected dashboard in Studio. It takes any path, not just
  Studio's own project folder, so a `.mzdash` from anywhere can be edited.
- **New Dashboard…** — creates a fresh dashboard in Studio, with the canvas already sized
  for the display that's connected. The dimensions come from the wheel itself, not from a
  built-in default, so the layout fits the screen you're actually authoring for.

Save in Studio, come back, **Refresh** the library, and upload.

## Converting a SimHub dashboard

**Import SimHub Dash…** turns a SimHub `.djson` / `.simhubdash` dashboard into an
`.mzdash`. This button never greys out — the conversion only writes a file, so Studio
doesn't need to be installed.

The dialog asks for the source file and a **Node limit**, converts, and then shows a
**report before you upload anything**. That report is the point of the feature: every item
in the source dashboard is recorded as

- **Converted** — carried across with full fidelity,
- **Substituted** — emitted, but something was approximated or lost, or
- **Dropped** — not emitted at all,

each with a reason. It also lists SimHub properties no binding could resolve and fonts with
no MOZA equivalent. A dashboard that loses more than about a quarter of its items is
better treated as unconvertible than shipped looking deceptively clean.

Widgets, images, fonts and formulas all come across where the MOZA format can express
them. Where a SimHub property has no MOZA channel of its own, the converter *borrows* a
spare channel to carry it and stores that as a channel mapping for the new dashboard —
which is why the converted file appears in your library with its mappings already in
place. A converted dashboard shows up in the upload list straight away.

> **Layout work still belongs in Studio.** AZOM converts and uploads; it does not render
> SimHub dashboard templates or HTML overlays to the wheel. The wheel draws its screen in
> firmware from the MOZA format, and that format is what has to arrive.
