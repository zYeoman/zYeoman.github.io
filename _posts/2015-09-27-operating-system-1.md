---
layout: post
title: 操作系统1——操作系统引论
categories: 操作系统 笔记
date: 2015-09-27 22:47:31
---

操作系统是当今技术含量最高的系统软件，它构成了现代计算机的基础运行平台
<!-- more -->
## 定义
分离硬件与用户软件（类似IP啊），操作系统专指在核心
态下运行的软件；应用软件和操作系统以外的系统软件运行在用户态下

操作系统控制计算机所有资源并提供开发应用程序的基础

操作系统是计算机系统中的一个 系统软件 ，它是这
样一些 程序模块的集合 ：它们能有效地组织和 管理
计算机的软硬件资源 ，合理地组织计算机的工作流
程，控制程序的执行并向用户 提供各种服务功能 ，
使得用户能够方便地使用计算机，使整个计算机系
统能高效的运行

### 作用
* 作为扩展机器/虚拟机，在硬件上构筑一层更容易编程和使用的等价扩展机器。添加设备管理、文件管理、（内存）存储管理、处理机（CPU）管理和作业管理。
* 作为资源管理者管理硬件。跟踪资源使用状况、满足资源请求、提高资源利用率、协调冲突。
* 作为软硬件接口。系统命令和系统调用

### 要求
* 有效
* 合理
* 方便

## 发展历史

* 电子管时代：ENIAC、插线、穿孔卡片
* 晶体管时代：FORTRAN、ALGOL、COBOL，批处理操作系统
* 集成电路时代
    * 多道程序设计（解决IO等待）：多道，宏观并行，围观串行。采用技术包括作业调度、资源共享、内存使用、内存保护
    * 分时系统：多路、独立、交互
    * 系列机思想
    * UNIX
* 大规模集成电路时代
    * 个人计算机操作系统
    * 分布式操作系统
    * 嵌入式操作系统

## 硬件环境

### 处理器
处理器由运算器、控制器、一系列寄存器以及高速缓存组成

指令执行由取址、译码、执行三个基本步骤

* 寄存器 
    * 用户可见寄存器
        * 数据寄存器
        * 地址寄存器
        * 条件码寄存器
    * 控制和状态寄存器
        * 程序计数器PC
        * 指令寄存器IR
        * 程序状态字PSW：记录运行模式等
        * 等等

* 处理器的状态
    * 核心态：可以执行全部指令、使用所有资源、改变处理器状态
    * 用户态：只能执行非特权指令
    * 用户态→核心态：陷入（trap）指令
    * 核心态→用户态：修改PSW

### 存储器
容量、速度、成本

存储访问局部性：时间上的局部性、空间上的局部性→→层次化的存储体系结构，性能由命中率衡量

* 寄存器：顶层，使用与CPU相同的材料和工艺，访问无延时，容量`<1kb`。
* Cache：容量小速度快，对程序员透明；通常与处理器在同一芯片上实现。
* 主存（内存）随机访问存储器RAM
    * 静态随机访问存储器SRAM
    * 动态随机访问存储器DRAM：异步动态、同步动态（SDRAM）。。。
* 磁盘：存储量大、价格低、掉电不丢失
* 磁带、光盘

### I/O设备
IO设备一般包括两个部分：控制器和设备本身。**控制器**是插在电路板上的一块或一组芯片组成，它物理地控制设备。任务是为操作系统提供一个简单的接口。

每类设备控制器不同、需要**设备驱动程序**

设备驱动程序需要在核心态下运行。将驱动装入操作系统有三个途径：
* 重新编译操作系统
* 在操作系统文件中设置一个项，通知需要驱动；重启，操作系统搜寻所需驱动并装载之
* 运行时装好，无需重启

每个设备控制器都有少量用于通信的寄存器（数据、控制和状态寄存器），编址有两种方式
* 存储映像编址：映射到操作系统地址空间，可以像普通存储器字一样读写
* I/O独立编址：放入专门端口空间中。

IO控制方式
* 直接IO（轮询）
* 中断驱动IO
    * 中断：随机可恢复自动处理的
    * 包括硬件中断装置和软件中断处理程序
    * 通常执行完一条指令后在指令周期最后时刻接收终端请求，扫描中断寄存器
    * 中断向量：存放中断处理程序入口地址和程序运行所需处理机状态字的内存单元。发出中断请求的设备接口向处理器发送一个该设备在中断向量表中目的地址的指针。
    * 处理过程：PC和PSW压栈，CPU切换到核心态；寻找中断处理程序的地址；处理完成后返回先前运行的程序中尚未执行的第一条指令
* DMA
    * DMA：直接存储器访问，通过总线中一独立控制单元——DMA控制器，自动控制成块数据在内存和IO单元间的传送，提高IO效能
    * 过程：处理器需要读写整块数据时，直接给DMA发送一条命令包括：是否请求一次读写，IO设备的编址，开始读或写的主存编址，长度等信息；之后处理器可以处理其他事情，DMA自动管理；DMA完成后发中断。
    * 问题：不完全并行会有总线竞争；传送过程不引起中断，不涉及上下文保存；传送时总线速度变慢

## 系统调用
操作系统与用户程序之间的接口是通过操作系统提供的一套**系统调用**来定义的。（有时也称为**系统服务**）

与硬件相关与应用无关的工作由操作系统程序完成。

为了保证OS不被用户程序破坏，不允许用户程序访问OS的系统程序和数据；因此在系统调用是需要有一个类似中断处理的处理机构使系统进入核心态。

为了使CPU进入核心态，指令集中提供了**陷入**指令，使系统转入核心态，系统调用由陷入指令实现，也是操作系统提供给编程人员的唯一接口。

每个系统调用都对应一个功能号，陷入指令中必须包括功能号。

要求：
* 为实现系统调用的子程序编造入口地址表，入口地址与相应系统程序名对应
* 陷入处理机构把陷入指令包含的功能号和入口地址表对应，调用子程序
* 调用结束后用户程序继续执行。
* 需要保护现场

传递参数方式：
* 陷入指令自带参数
* 有关通用寄存器
* 内存中专用堆栈区

### Linux系统调用
利用x86体系的软件中断，即`int $0x80$这条指令，产生向量为128的软件中断，CPU切换到核心态，并将控制权交给系统调用过程的起点`system_call()`来处理

`system_call()`检查系统调用号，告诉内核进程请求哪种服务；内核进程查看系统调用表(sys_call_table)找到对应入口地址；调用，返回后做一些系统检查，返回到进程。

##### 系统调用和内核函数
系统调用并非内核函数，由内核函数实现。对应内核函数称为系统调用的**服务例程**。由于陷入指令依赖硬件，C中为每一个系统调用设置了一个封装例程

#### POSIX过程调用
POSIX是可移植操作系统接口(Portable Operating System Interface)的缩写，由IEEE开发，ANSI和ISO标准化。

定义了构造系统必须提供的一套过程，并没有规定是库调用系统调用还是其他形式

##### 进程管理

|Call|Description|
|----|-----------|
|pid = fork()|Create a child process identical to the parent|
|pid = waitpid(pid,&statioc,options)|Wait for a child to terminate|
|s = execve(name, argv, environp)|Replace a process core image|
|exit(status)|Terminate process execution and return status|

#### 文件管理

| Call | Description |
|------|-------------|
| fd = open(file, how, ...) | Open a file for reading, writing or both |
| s = close(fd) | Close an open file |
| n = read(fd, buffer, nbytes) | Read data from a file into a buffer |
| n = write(fd, buffer, nbytes) | Write data from a buffer into a file |
| position = lseek(fd, offset, whence) | Move the file pointer |
| s = stat(namt, &buf) | Get a file's status information |

#### 目录管理

| Call | Description |
|------|-------------|
| s = mkdir(name, mode) | Create a new directory |
| s = rmdir(name) | Remove an empty directory |
| s = link(name1, name2) | Create a new entry, name2, pointing to name1 |
| s = unlink(name) | Remove a directory entry |
| s = mount(special, name, flag) | Mount a file system |
| s = unmount(special) | Unmount a file system |

#### 其他

| Call | Description |
|------|-------------|
| s = chdir(dirname) | Change the working directory |
| s = chmod(name, mode) | Change a file's protection bits |
| s = kill(pid, signal) | Send a signal to a process |
| seconds = time(&seconds) | Get the elapsed time since Jan 1,1970 |

### Windows API
Windows以DLL形式提供了API，用户可以通过调用API函数来使用Windows操作系统的系统调用

Unux系统调用与WindowsAPI对应图如下

![对应](/res/img/post/OS1.png)

* API调用和系统调用不存在一一对应关系

## 操作系统结构

* 单体系统：效率高，接口简单直接，结构紧密；数据基本上为全程量，经常关中断
* 分层系统：按功能调用次序分成单向依赖或调用的几层
* 虚拟机结构
* 微内核结构：实现高可靠性，将操作系统分成小的良好定义的模块，只有微内核云兴镇核心态下。机制与策略分离，可靠灵活。效率极低。
* 客户-服务器模式

### Linux与Windows的接口与内核

![Linux接口](/res/img/post/OS2.png)

![Linux内核](/res/img/post/OS3.png)

![Windows接口](/res/img/post/OS4.png)

![Windows内核](/res/img/post/OS5.png)
