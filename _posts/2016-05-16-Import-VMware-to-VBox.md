---
layout: post
title: VMWare虚拟机转换成VirtualBox虚拟机 
category: 奇技淫巧
date: 2016-05-16 19:42:34
---

终于忍不了用了很久的VMWare了, 于是毅然决定改到VirtualBox的门下!(也不知道为什么忍不了...)

<!-- more -->

## 生成ovf文件

[来源](http://www.cnblogs.com/zc520/p/3422636.html)

在VMware安装文件夹找到OVFTool文件夹以及OVFTool.exe,  打开命令提示符运行

```sh
ovftool source.vmx export.ovf
```

PS. 要首先关闭虚拟机, 不然会有打开此盘错误的Error

## 修改ovf文件

生成了ovf后直接上VBox是不行的, 必须对ovf文件进行一下修改, 使用任意编辑器打开`.ovf`文件(很小的). 进行如下修改

1. replace word "ElementName" with word "Caption" in the whole file
2. replace "vmware.sata.ahci" with "AHCI"

[来源](https://forums.virtualbox.org/viewtopic.php?f=8&t=61624)

## 删除.mf文件
`.mf`是一个校验文件, 可能会在导入最后一刻发生校验不通过Error, 这时删除这个文件就可以了.

## 最后

很遗憾, 被win10的bug拦住了...0xc0000008
