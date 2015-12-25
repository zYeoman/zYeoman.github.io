---
layout: post
title: Xilinx SDK不能往板子上下载程序
category: Zedboard
date: 2015-11-16 00:08:23
---

按照《嵌入式系统软硬件协同设计实战指南》书里做一个最简单的流水灯的程序，按照之前的方法找到'xgpio.h'了以后，又发生了驱动没有装好的问题。

<!-- more -->

新建Application Project时不要默认。要确认Hardware Platform是你写的那个！！！

使用Vivado 2015-2
