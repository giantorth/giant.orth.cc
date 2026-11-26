---
layout: page.njk
title: Privacy Policy
description: What AZOM sends off your PC, where it goes, and how long it is kept.
permalink: /privacy/
---

*Last updated: 25 November 2026*

AZOM is an open-source SimHub plugin maintained by one developer. It has no accounts, no
analytics and no advertising, and it does not sell or share your data. The only personal
data it collects is what you choose to send in a bug report.

## What stays on your PC

Your settings, profiles and logs are stored locally by SimHub and the plugin. The serial
capture used for diagnostics lives in memory only and is wiped each time SimHub restarts.
**Export Bundle** writes a ZIP to your disk and uploads nothing.

## What the plugin connects to

- **GitHub**, to check for updates and download them. Each check sends the plugin version
  in the request header; GitHub sees your IP address. Turn it off with the update
  notifier setting on the **Options** tab.
- **giant.orth.cc**, to fetch the guide list shown on the **Help** tab. Each fetch sends
  the plugin version in the URL and request header; GitHub and Cloudflare, which host the
  site, see your IP address.
- **The bug-report server**, only when you click **Submit bug report**.

Buttons that open GitHub, Discord, Ko-fi or this site open them in your browser. Those
sites' own privacy policies apply there.

## Bug reports

### What is sent

When you click **Submit bug report**, the plugin uploads:

- your problem description, and your contact (email or Discord handle) if you entered one;
- the plugin version, SimHub version, Windows version and wheel model;
- a diagnostic bundle: plugin logs, serial traffic captures, the diagnostic report, your
  plugin settings, and the wheel display's log. The
  [bug-report guide](/guides/diagnostics-and-bug-reports/) lists every
  file.

Hardware serial numbers and chip IDs are masked before upload. The bundle can still hold
file paths (which can include your Windows user name), COM port and USB device names, and
the names of your profiles and dashboards.

The server also records your **IP address** and the request's **user agent** with the
report.

### Where it goes

- **Cloudflare** runs the server and stores the bundle. Uploaded bundles are kept in
  Cloudflare for **30 days** and then deleted. Your IP address is also held for up to 24
  hours in a rate-limit counter, and Cloudflare keeps short-lived operational logs of
  requests.
- **Discord** receives a notification for each report, carrying the description, wheel
  model, plugin version and OS. Your contact details and IP address are not included.
- **The maintainer** downloads reports to investigate them. Downloaded reports **may be
  kept indefinitely** for debugging and improving the software.

### How it is used

Reports are used only to diagnose problems and improve AZOM. Your contact is used only to
ask you about your report. Technical findings from a report (for example, decoded
protocol traffic) may be published in the project's documentation. Your description,
contact details and IP address are not.

## This website

giant.orth.cc is a static site hosted on GitHub Pages behind Cloudflare. It sets no
cookies of its own and runs no analytics. Cloudflare may set a security cookie to filter
bot traffic, and both GitHub and Cloudflare see your IP address when you visit. Fonts are
loaded from Google Fonts, so Google also sees your IP address.

## Your choices and requests

- Don't submit: use **Export Bundle** and share only what you want to share.
- Leave the contact field empty.
- Turn off the update check on the **Options** tab.

To have a report deleted, or to ask a privacy question, open a
[GitHub issue](https://github.com/giantorth/AZOM/issues) or ask on
[Discord](https://discord.gg/J4enw43e62) and quote your report reference (the
**Copy Reference** button). GitHub issues are public, so don't post your contact details
or other personal information there.

## Changes

Changes to this policy are published on this page with a new date at the top.
