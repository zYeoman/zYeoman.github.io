---
layout: post
title: Is minicom the **best** friendly serial communication program???
category: 杂
tags:
  - 吐槽
date: 2016-08-11
create: 2016-08-11
---

说道linux的UART工具，最好的就是minicom。。。但是和windows相比，这就是赤裸裸的矮子里面拔高个啊！！！！！！！真是受不了啊这个minicom，应该说果然是linux的风格么？！还是命令行的工具就只能这么难用！！！

首先minicom不是开箱即用的，如果是没学过的人可能第一步就是Google；

其次是linux本身的问题，熟悉一点linux的人可能也会对 `/dev` 目录下那一大片 `tty*` 心有余悸，那么到底哪个端口开了？

最后一点，minicom打开一个被占用的设备后不会自动关闭，而是会被阻塞！！！神TM阻塞，像树莓派这样的输出的UART是作为串口调试功能用的，如果没有特意关闭的话会一直占用下去，那么哪个minicom就会被一直阻塞下去，什么都干不了！！！什么都干不了！！！最后还得新开个shell `killall`才能解决问题！！！

好气啊！

不由怀念起业界良心STC-ISP了，包含各种实用工具各种例程各种好用！

最后结论是，还是类似IDE的东西好使啊！

### 8.12 更新
还TM不支持16进制输入输出！！！

还有人说一大优点是fans可以自己改源码！！！

MDZZ。。。我只是临时用一下而已啊！
