---
layout: post
title: gem5 tutorials
category: 用
tags:
  - 原创
  - 课程
date: 2016-04-07 15:08:55
create: 2016-04-07
---

## gem5介绍

gem5是M5和GEMS结合产生的一个新的模拟器

* 一个事件驱动的模拟器框架
* 预定义模型集合

* 面向对象、灵活可用
* python语言
* 多种CPU、ISA支持
    *  GEM5支持四种不同的CPU模型：AtomicSimple，TimingSimple，In-Order，Out-Order(O3)。
* 多处理器、多系统支持
* 可配置CPU模型
* 插件化的存储系统: 使用Ruby
* 设备模型: Linux,Android
* Boot启动真实的系统: Linux Android
* ISAs

AtomicSimple是最简单规模的模型，一个cycle完成一条指令的执行，memory 模型比较理想化，访存操作为原子性操作。适用于快速功能模拟。

TimingSimple模拟器也是无流水线的模拟，但是使用了存储器访问时序模型，用以统计存储器访问延迟。

In-Order模型是gem5模拟的新特性，流水级为默认五级流水：取值、译码、执行、访存、写回。并且模拟了cache部件、执行部件、分支预测部件等。

O3模拟器时流水级模拟，O3模拟器模拟了乱序执行和超标量执行的指令间依赖，以及运行在多CPU上的并发执行的多线程。默认7级流水：取值、译码、重命名、发射、执行、写回、提交。模拟了物理寄存器文件、IO、LSQ、ROB功能部件池等。主要参数为流水管道间延迟、硬件线程数、IQ/LSQ/ROB项数、FU延迟、物理寄存器重命名、分支预测、访存依赖预测等。

## gem5安装


```sh
# 1. 安装库文件
sudo apt-get install mercurial scons swig gcc m4 python python-dev libgoogle-perftools-dev g++ zlib1g

# 2. 下载gem5源码
hg clone http://repo.gem5.org/gem5-stable

# 3. 编译架构
cd ~/gem5-stable
# //切换至刚刚下载的gem5-stable目录
scons build/ALPHA/gem5.opt
# //编译gem5的ALPHA架构仿真

#4. SE模式下执行测试程序
cd ~/gem5-stable
# //进入gem5源码根目录
build/ALPHA/gem5.opt configs/example/se.py -c tests/test-progs/hello/bin/alpha/linux/hello
```

## 编译

* 编译指令: `scons build/<config>/<binary> -jx` (x = 编译进程数)
* <configs>
  - 一般是<isa>_<mode>
  - ALPHA_SE Alpha syscall emulation
  - ALPHA_FS Alpha full system
  - 其他ISAs: ARM, MIPS, POWER, SPARC, X86
  - 也可以是Ruby protocol, 和自定义的configs
* <binary>
  - gem5.debug - debug编译, symbols tracing和assert
  - gem5.opt - 优化编译, symbols tracing assert
  - gem5.fast - 优化编译, 没有debugging symbols tracing和assertions
  - gem5.prof - gem5.fast+profiling 支持

## 配置和运行

<!-- TODO: Graphviz 画出流程图 -->


### 仿真

```sh
build/ALPHA/gem5.opt --help

# - Usage : gem5.opt [gem5 options] script.py [script options]
# 例如

build/ALPHA/gem5.opt configs/example/se.py --cpu-type=detailed --caches --cmd=tests/test-progs/hello/bin/alpha/linux/hello

```



**遇到的一个错误** *fatal: minor must be used with caches*, 解决方案是在命令中加上`--caches`
