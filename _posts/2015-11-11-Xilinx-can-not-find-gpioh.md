---
layout: post
title: Xilinx SDK找不到gpio.h
category: 用
tags:
  - 原创
  - xilinx
  - bug
date: 2015-11-11 00:08:23
create: 2015-11-11
---

按照《嵌入式系统软硬件协同设计实战指南》书里做一个最简单的流水灯的程序，但是很遗憾在最后一步编译不通过。问题出在`#include "xgpio.h"`中，没有`xgpio.h`这个文件，于是最简单的方法就是去找一个。使用everything找到了并放到了文件夹里，然而还是有问题，然后又Google解决方案，全部都是把`xgpio.h`所在的文件夹加入到Project中。然而这个解决方案还是不行。最后的解决方案是

新建Application Project时不要默认。要确认Hardware Platform是你写的那个！！！

使用Vivado 2015-2
