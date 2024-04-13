---
layout: post
title: gem5 Minor CPU model 简介
category: 用
tags:
  - 原创
  - 课程
date: 2016-04-09 12:54:41
create: 2016-04-09
---

## What is Minor

Minor 是包含一个流水线的in-order处理器模型[1], 其数据架构和运行行为都是可配置的. 用来运行in-order程序并且可以通过MinorTrace和minorview.py进行流水线的可视化. 它的目标是提供一个与一个类似功能的具体处理器联系的微架构的框架. 

## Model structure
* MinorCPU
    * Pipeline
        * Fetch1: 取多条指令
        * Fetch2: 多条指令分解
        * Decode: 指令译码
        * Execute: 运行指令和数据存储接口

### Fetch1
Fetch1从指令寄存器取得cache lines或者部分 chche lines 并转发给 **Fetch2**, 由Fetch2将多行指令分解成指令们, 能从 **Execute** 和 **Fetch2** 获得'change of stream'信号来更改取指令的地址, **Execute** 的信号优先级更高. 

Fetch1获得的每一行指令都有唯一的行号.

只有当Fetch2的输入空间有空余是Fetch1才会发起memory fetch

### Fetch2
Fetch2从 **Fetch1** 接受一行信息存入输入缓存, 缓存顶的行将会分解成独立的指令, 并将指令包装成指令向量传给 **Decode** 

Fetch2包括分支预测机制, 这是gem5提供的分支预测接口的封装. 

对所有控制指令进行分支预测.

[1]: In-Order模型是gem5模拟的新特性，流水级为默认五级流水：取值、译码、执行、访存、写回。并且模拟了cache部件、执行部件、分支预测部件等。

### Decode
从 **Fetch2** 获得指令向量, 将指令分解成具体操作并封装. 传给下一级.

### Execute
提供所有指令运行和内存访问机制

在Execute内的指令包运行多个周期
