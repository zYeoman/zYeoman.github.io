---
layout: post
title: Archlinux 安装android SDK
category: 用
date: 2019-03-08 16:59:54 +0800
create: 2019-03-08 16:59:05 +0800
tags: 
  - linux
---

```sh
pacman -S android-sdk android-sdk-build-tools android-sdk-platform-tools gradle
# edit .zshrc
# export ANDROID_HOME='/opt/android-sdk'
# export PATH=$ANDROID_HOME/tools: $ANDROID_HOME/platform-tools:$PATH
/opt/android-sdk/tools/bin/sdkmanager "platforms;android-26"
/opt/android-sdk/tools/bin/sdkmanager "platforms;android-27"
```