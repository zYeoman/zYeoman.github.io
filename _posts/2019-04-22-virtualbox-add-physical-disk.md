---
layout: post
title: VirtualBox添加物理硬盘并安装Linux
category: 器
date: 2019-04-22 14:05:56 +0800
create: 2019-04-22 13:21:52 +0800
tags: 
  - 
---

- TOC
{:toc}

买了一块480GB的SSD移动硬盘，实际USB3.0测速连续读写速度都能到400MB/s，维基百科说基础款的USB3.0实际最高速度就是差不多400MB/s[^1]。于是准备在上面装一个Linux，用来应急（其实就是闲的折腾）。

用VirtualBox在它上面安装系统，本来打算直接USB3.0映射过去，结果提示没有扩展包，虚拟机还没系统呢哪来的扩展包啊？[^4]因此打算做一个指向这块物理硬盘的虚拟磁盘。这样还有一个好处，就是在Windows上可以直接虚拟机打开硬盘上的其他系统；另外其他系统也可以直接虚拟机进当前的Windows。

## 方法
主要来自[这里](https://www.serverwatch.com/server-tutorials/using-a-physical-hard-drive-with-a-virtualbox-vm.html)。

在linux下是
```bash
VBoxManage internalcommands createrawvmdk -filename ~/<filename>.vmdk -rawdisk /dev/sda
```
在Windows下是
```cmd
VBoxManage internalcommands createrawvmdk -filename <filename>.vmdk -rawdisk \\.\PhysicalDrive0
```

其中`VBoxManage`在VirtualBox根目录的一个工具（人家VMware能直接图形化设置）。很可能遇到的一个问题是`VERR_ACCESS_DENIED`没有权限，需要`sudo`或者管理员打开`cmd`，这样创建以后就可以直接把`<filename>.vmdk`当成一个普通的虚拟磁盘用了，但是添加的时候Virtualbox也要有管理员权限。

### 确保磁盘是对的
```bash
VBoxManage internalcommands listpartitions -rawdisk /dev/sda
```
```cmd
VBoxManage internalcommands listpartitions -rawdisk \\.\PhysicalDrive0
```
上面两个命令是查看磁盘分区情况的，可以用来确保磁盘是对的。

### 使用分区而不是全部磁盘
在上面的创建虚拟磁盘命令后面加上` -partitions 1,5`就行了，里面的`1,5`是选择分区。

在后面再添加`-mbr <name>.mbr`可以把mbr修改放到镜像内部。[^2]

## 安装Linux
按照上面的方法来了，然后开始安装Linux，`fdisk /dev/sda/`，修改分区表，`w`，报错！

然后搜索许久，搜到了一个号称安装好了的帖子[^3]，但是除了“我装好了”就没下文了。然后发现之前用USB3.0失败是因为宿主机没装扩展包，不是我之前想的虚拟机没装扩展包。。。因此直接给虚拟机加一个USB3.0连接到移动硬盘就行了~

[^1]: The*"SuperSpeed"*bus provides for a transfer mode at a nominal rate of 5.0 Gbit/s, in addition to the three existing transfer modes. Accounting for the encoding overhead, the raw data throughput is 4 Gbit/s, and the specification considers it reasonable to achieve 3.2 Gbit/s (400 MB/s) or more in practice.
[^2]:https://www.virtualbox.org/manual/ch09.html#rawdisk
[^3]:https://ubuntuforums.org/showthread.php?t=1782976
[^4]:实际上我理解错了，是宿主机要装扩展包，直接去官网下载 VirtualBox 6.0.6 Oracle VM VirtualBox Extension Pack 就行了