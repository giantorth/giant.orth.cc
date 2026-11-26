---
layout: guide.njk
title: Linux Setup
description: Get SimHub running on Linux with linux-simracing-utils, drop in AZOM, and know where to find help when Wine gets weird.
tags: guide
category: setup
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

## If the plugin can't see your wheelbase, or inputs are missing

First, make sure Boxflat isn't running, including as a background process
(`pgrep -a boxflat` will tell you). It holds the serial port and blocks SimHub from
connecting.

Each MOZA device shows up to Linux twice: as a USB serial device (`/dev/ttyACM*`), which
AZOM uses to connect, and as a raw HID device (`/dev/hidraw*`), which carries steering,
pedal and button input. Your user needs read and write permission on both. If it's
missing, AZOM shows a **Linux is blocking access to MOZA devices** banner naming the
device nodes. Without serial access the plugin can't connect, and without HID access
steering, pedal and button inputs stay blank while everything else works.

Most distributions don't grant access to raw HID devices by default, and the `dialout`
group only covers the serial side. Add a udev rule that covers both:

```bash
sudo tee /etc/udev/rules.d/70-moza.rules <<'EOF'
SUBSYSTEM=="tty", ATTRS{idVendor}=="346e", MODE="0660", TAG+="uaccess"
SUBSYSTEM=="hidraw", ATTRS{idVendor}=="346e", MODE="0660", TAG+="uaccess"
EOF
sudo udevadm control --reload-rules
```

Then unplug and replug your MOZA devices (or power-cycle the wheelbase) and restart
SimHub. The banner clears once access works, and the **Node access** line on the
Diagnostics tab reads `rw` for every node.

Still stuck? Serial handling under Wine varies by distribution and Wine version. The
[Sim Racing on Linux Discord](https://discord.gg/kJY5yG9Fj5) is the best place to ask,
and the [AZOM Discord](https://discord.gg/J4enw43e62) can help with anything
plugin-side.
