---
layout: post
title: DMA in zedboard
category: 工具
date: 2015-12-20 23:39:34
---

数字系统设计真是门神课, 尤其如果作死选了奇怪的项目.

比如跑一个Linux上的Opencv加速程序, 带QT界面的那种.

我负责的是PL加速的部分, 真是毫无头绪.

能找到的基本都是zc702板子的, 也基本都是ISE的. 所以在装了最新版(强迫症)
vivado后还是又装了一个ISE.

为了能跑linux, 这里是直接修改zedboard的OOB Design, 增加新的IP核来实现的.
