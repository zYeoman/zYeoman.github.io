---
layout: post
title: MacType 有冲突的软件
category: 用
tags:
  - 原创
  - mactype
  - bug
date: 2018-04-10 13:16:44 +0800
create: 2017-05-05 17:20:59
---

## MacType
MacType 是一个 Windows 上字体渲染的工具，渲染效果非常好，然后也有非常多的 BUG 与冲突。

### Win10 1607 更新
当初周年更新，以后 MacType 直接不能用，同时系统也不能用了，只好滚回。现在貌似修正了这个问题，但是微软已经不给我推送更新了。残念。

### Steam
不知从什么时候开始，Steam 内置浏览器就一直黑屏。google 到了一部分原因和解决方案，但是总是解决不了。新装的电脑也是这样，还以为 Steam 把我的 ID 给 ban 了。然后就发现是 MacType 的原因。把 Steam 放到排除列表里就没问题了。

### ConEmu
它给的提示把 ConEmuC.exe 和 ConEmuC64.exe 放到排除列表，不然会 crash。不过一直没有加也没什么问题。

### msys2
需要把 gpg.exe 和 pacman.exe 加入排除列表，不然会出现密钥不匹配的问题。

### Virtual Box
被MacType注入后启动不了虚拟机，显示错误`The virtual machine 'xxxx' has terminated unexpectedly during startup with exit code -1073741819 (0xc0000005)`

来自[知乎](https://www.zhihu.com/question/27159349)
