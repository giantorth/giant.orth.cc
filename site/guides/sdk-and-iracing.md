---
layout: guide.njk
title: SDK & iRacing
description: Enable the MOZA SDK server for iRacing and 360 Hz mode from the plugin's Options tab.
tags: guide
order: 21
---

Some titles — **iRacing** in particular — and any game running MOZA's **360 Hz** mode need
the official MOZA SDK. AZOM ships an embedded SDK server that provides all of the same
functions you had before. You'll set this up once.

## Where it lives

Open the **Options** tab in the AZOM panel and find the **SDK** card.

### CoAP SDK server

Switch **Enable CoAP SDK server** on. This runs a small embedded server on loopback that
provides official MOZA SDK support for games that require it.

> **Why a "MOZA Pit House.exe" appears.** While the server is enabled, the plugin runs a
> tiny stand-in process that shows up in your task list as *MOZA Pit House.exe*. That's
> expected — it lets MOZA SDK apps find the service by name. It exits automatically when
> you turn this off or close SimHub. Enabling this option also stops the real application
> from launching automatically.

### UDP control

**Enable UDP control server** is a legacy plain-CBOR-over-UDP surface for setting steering
angle. The one known use is the **RSF** build of *Richard Burns Rally*; leave it off unless
you need it.

### Status

A status line sits under each toggle:

- The CoAP line reports port **40266** and the state of its stub-manager process.
- The UDP line reports port **40288**.

The two report independently, so a port collision or a stub that couldn't extract shows up
against the piece that actually broke. If iRacing's force feedback isn't behaving, this is
the first thing to check.

> **Everything else on this tab** — language, updates, device definitions and the rest —
> is covered in [Plugin Options](/guides/options/).
