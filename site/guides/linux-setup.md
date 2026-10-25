---
layout: guide.njk
title: Linux Setup
description: Get SimHub running on Linux with linux-simracing-utils, drop in AZOM, and know where to find help when Wine gets weird.
tags: guide
order: 3
---

SimHub is a Windows application, but it runs well on Linux under Wine, and AZOM runs
right along with it. The recommended path is
[linux-simracing-utils](https://github.com/srounce/linux-simracing-utils), an all-in-one
installer that sets up SimHub (and optionally CrewChief) in its own Wine
environment, including the telemetry bridging that lets SimHub read data from
Linux-native and Proton games.

> **Get help from the community.** The [Sim Racing on Linux](https://simracingonlinux.com/)
> project maintains a Discord full of people running this same stack.
> [Join it here](https://discord.gg/kJY5yG9Fj5) if anything in this guide doesn't go
> to plan.

> **Close Boxflat first.** [Boxflat](https://github.com/Lawstorant/boxflat) and SimHub
> both talk to MOZA hardware over the same serial port and **cannot run at the same
> time**. Fully quit Boxflat (and make sure it isn't still running as a background
> process) before you launch SimHub.

## Requirements

- **Wine**, installed through your distribution's package manager
- **git**, **curl** and **unzip** (usually pre-installed)
- A MOZA wheelbase connected over USB

## 1 · Run the installer

Pick where you want the install to live first. The location gets baked into the
desktop launchers. Then clone and run:

```bash
git clone https://github.com/srounce/linux-simracing-utils
cd linux-simracing-utils
bash install.sh
```

The installer asks about each component in turn: SimHub, CrewChief, and the Winecarte
telemetry bridge. Pressing Enter accepts the defaults. Everything lands in a dedicated
Wine prefix inside the folder, so it won't interfere with any other Wine software you
run.

If you ever move the folder, re-run `bash install.sh` from the new location and it
fixes the launchers up.

## 2 · Launch SimHub

SimHub appears in your application menu like any native app. Launch it from there.
The telemetry bridge starts automatically in the background and shuts down when you
close SimHub.

## 3 · Install AZOM

Follow the standard [Install the Plugin](/guides/install-the-plugin/) walkthrough. The
only difference on Linux is where the SimHub folder lives. It's inside the Wine prefix the
installer created:

```
linux-simracing-utils/pfx/drive_c/Program Files (x86)/SimHub/
```

Drop `MozaPlugin.dll` in there, restart SimHub, and enable **AZOM** when prompted.
Everything from that point on matches the Windows guides.

## 4 · Launch your games through winecarte-run

For SimHub to receive telemetry, each game must be started via `winecarte-run` so its
shared memory is visible inside Wine. For each game in Steam, open **Properties ›
General › Launch Options** and enter:

```
/path/to/linux-simracing-utils/bin/winecarte-run %command%
```

Replace the path with wherever you cloned the repo. The `%command%` part matters: it
tells Steam to run the game itself after the wrapper.

## If the plugin can't see your wheelbase

First, make sure Boxflat isn't running, including as a background process
(`pgrep -a boxflat` will tell you). It holds the serial port and blocks SimHub from
connecting.

The wheelbase shows up to Linux as a USB serial device (typically `/dev/ttyACM0`), and
your user needs permission to open it. On most distributions that means being in the
`dialout` group (`uucp` on Arch-based systems):

```bash
sudo usermod -aG dialout $USER   # dialout on Debian/Ubuntu/Fedora, uucp on Arch
```

Log out and back in for the group change to take effect, then restart SimHub.

Still stuck? Serial handling under Wine varies by distribution and Wine version. The
[Sim Racing on Linux Discord](https://discord.gg/kJY5yG9Fj5) is the best place to ask,
and the [AZOM Discord](https://discord.gg/J4enw43e62) can help with anything
plugin-side.
