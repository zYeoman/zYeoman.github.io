---
layout: post
title: Win10启动引导修复tips
category: 用
date: 2018-11-30 23:37 +0800
create: 2018-11-30 23:09:03 +0800
tags:
  - bug
---

- TOC
{:toc}

今天晚上手贱下了个Win8安装iso，然后直接挂载启动`setup.exe`。重启以后发现引导没了。然后开始引导修复。

引导修复需要有一个win10安装U盘，亲测win8安装盘不能修复win10的引导。

## 可能的问题提示
```
window未能启动，原因可能是最近更改了硬件或软件，解决此问题的步骤。
1，插入windows 安装光盘并重新启动。
2，选着语言设置，然后单击下一步。
3，单击修复计算机。
如果没有光盘，请与您的系统管理员或计算机制造商联系，以获得帮助。
```

## 使用自带修复功能修复
疑难解答->引导修复

## 使用命令行修复

### bootrec命令
```cmd
bootrec /scanos
bootrec /rebuildbcd
bootrec /fixboot
bootrec /fixmbr
```

### 具体修复[^1]

```cmd
Diskpart
输入
List disk
Sel disk 0
// 0为boot磁盘号
List vol
Sel vol 4
// 4为EFI分区序号

assign letter=V:
// 设置EFI分区为V盘
Exit

V:
// 格式化V盘
format V: /FS:FAT32
// 之后会自动在其中添加EFI引导记录
// 或者输入
// MD \EFI\Microsoft\Boot
// cd /d V:\EFI\Microsoft\Boot\
// bootrec /FixBoot
// bcdboot X:\Windows /s V: /f UEFI
```

## 分区操作
```cmd
diskpart
list disk
list vol
list part
sel disk
sel vol
sel part
del part override
```

## 只有一个EFI分区
来源[^2]，在`bootrec /rebuildbcd`的时候，可能输出`由于可能有多个不可辨别的设备与识别条件相匹配，无法识别所请求的系统设备。`（The requested system device cannot be identified due to multiple indistinguishable devices potentially matching the identification criteria.）这是因为在多个磁盘上都有EFI引导分区，可能是之前装双系统导致的历史遗留问题。如果可以的话应该删掉多余的引导分区。使用`diskpart`删除之。

```cmd
diskpart
DISKPART> list disk
DISKPART> sel disk 0
DISKPART> list part
// 显示分区类型为System或者系统即为EFI分区
DISKPART> sel part <Num>
DISKPART> detail part
Partition 2
Type    : c12a7328-f81f-11d2-ba4b-00a0c93ec93b
Hidden  : Yes
Required: No
Attrib  : 0X8000000000000000
Offset in Bytes: 420478976

  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
    ----------  ---  -----------  -----  ----------  -------  ---------  --------
    * Volume 3                      FAT32  Partition    200 MB  Healthy    Hidden
    * ---------------------
```
Type为`c12a7328-f81f-11d2-ba4b-00a0c93ec93b`的都是EFI分区，可以进入多余的分区内`sel disk` `sel part` 之后`set id=c12a7328-f81f-11d2-ba4b-00a0c93ec930`，然后再`rebuildbcd`就能把引导修复好了。

## 引导编辑
`bcdedit`

[^1]: https://answers.microsoft.com/en-us/windows/forum/windows_10-update/windows-10-bootrec-fixboot-access-is-denied/747c4180-7ff3-4bc2-b6cc-81e572d546df
[^2]: https://blog.csdn.net/m0_38017006/article/details/74019384
