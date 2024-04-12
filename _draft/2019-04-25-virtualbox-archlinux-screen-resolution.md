---
layout: post
title: VirtualBox下i3显示分辨率问题
category: 法
date: 2019-04-29 17:00:52 +0800
create: 2019-04-25 19:25:13 +0800
tags: 
  - linux
---


```bash
sudo pacman -S virtualbox-guest-utils
gtf 1920 1080 60
# 1920x1080 @ 60.00 Hz (GTF) hsync: 67.08kHz; pclk: 172.8MHz
# Modeline "1920x1080_60.00" 172.80 1920 2040 2248 2576  1080 1081 1084 1118 -HSync +Vsync
xrandr --newmode "1920x1080_60.00" 172.80 1920 2040 2248 2576  1080 1081 1084 1118 -HSync +Vsync
xrandr --addmode Virtual-1 1920x1080_60.00
xrandr --output Virtual-1 --mode 1920x1080_60.00
```