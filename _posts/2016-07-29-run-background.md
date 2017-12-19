---
title: "linux与windows后台运行"
date: 2016-07-29
modify: 2016-07-29
category: 法
tags:
  - 原创
  - window
  - linux
  - 更新中
create: 2016-07-29
layout: post
---

## Linux后台运行
ComeFrom [IBM](http://www.ibm.com/developerworks/cn/linux/l-cn-nohup/)

* 临时使用
    * `nohup`+cmd: 不接受`HANGUP`信号，默认输出到`nohup.out`
    * `setsid`+cmd: 以init进程为父进程，当前shell就影响不了它了
    * (cmd)+`&`: 后台运行，括号让其在新的子进程运行，类似`setsid`
* 补救
    * `disown` `-h`使某进程忽略`HANGUP`信号`，可以`Ctrl+z`挂起然后`bg`使之后台运行然后`disown`
* 大量使用
    * screen/tmux: 只要detach就好，内部进程不会死掉

## Windows后台运行

`start /b`+cmd
