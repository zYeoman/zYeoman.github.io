---
layout: post
title: 华为手机开机失败修复
category: 知识库
date: 2017-05-25
create: 2017-05-25 11:54:59
---

## 不损失数据的修手机方式！

在紧张刺激地写论文的过程中，觉得手机有点卡就重启试试，然后手机就打不开了。

但是一切正常，只有在开机的最后一步出现问题。因为写论文很急也就没有第一时间去修。就这样拖了两天，还以为除了刷机没什么解决方法了。

主要方案来自[这里](http://club.huawei.com/thread-1372349-1-1.html)

以下需要下载的内容都在上面那个网页有。

### 原理
安卓手机基本上有四个分区的数据：RECOVERY、BOOT、SYSTEM 和 DATA。这里的 RECOVERY 主要是用于内核出问题后恢复，BOOT 是 Linux 系统内核，SYSTEM 是 Android 系统，DATA 就是除了系统以外安装的 APP 和其他数据。因此如果刷机不覆盖 DATA 区的话，这样的刷机是没有副作用的。

### 环境和工具
1. Windows
2. Net Framework 3.5 SP1 （用于运行下面的 Extractor)
3. ADB 环境
4. 华为 P7 或者其他机型对应的驱动
5. Huawei Update Extractor 用于从华为官方包里提取 recovery.img、boot.img、system.img 等等。[原帖地址](https://forum.xda-developers.com/showthread.php?t=2433454)

### 步骤
1. 下载[官方升级包](http://www.emui.com/plugin.php?id=hwdownload)
2. 运行 Huawei Update Extractor 从官方升级包中的 UPDATE.APP 文件里提取 BOOT.img、RECOVERY.img、SYSTEM.img 三个镜像。
3. 手机连接电脑，关机，同时按住开机键和音量下开机，进入 fastboot&rescur 界面。
4. 在 CMD 或者 Powershell 里执行`fastboot devices`，如果有输出说明驱动正常。
5. 运行`fastboot flash *** D:\path\***.img`分别刷上三个镜像。
6. 运行`fastboot reboot`。如果还不好那应该是硬件有问题吧。
