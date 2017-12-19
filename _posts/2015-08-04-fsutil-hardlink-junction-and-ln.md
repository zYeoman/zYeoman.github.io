---
layout: post
title: 快捷方式、符号链接、硬链接与软链接——win/linux
category: 理
tags:
  - 原创
  - windows
  - linux
  - 链接
date: 2015-08-04 22:20:14 +0800
create: 2015-08-04
---

## 含义

### 快捷方式

仅仅是一个二进制文件或者是文本文件，存储有快捷方式目标的地址(文件地址或者网络地址)

### 符号连接
也是保存的地址，在linux中符号连接等同于软链接，在windows中符号链接也与软链接类似，不同点是符号链接支持相对路径并且文件夹和文件都支持，同时不会像快捷方式那样跳转。

### 硬链接和软链接

硬链接与软链接都可以理解成原文件的一个镜像，在应用层看来是一样的。同时，修改源文件的时候都会同步修改链接的文件，因此，当你需要做文件镜像时候，或者同一个文件存到不同位置又需要同步变化的时候，就不需要每次更改以后重新复制一遍了。

#### 不同点

硬链接指向的是文件系统中的节点(inode)，而软链接指向的是文件系统的路径(path)，这就造成了两者根本的不同，也是造成两者各种不同的原因。

* 硬链接是与路径无关的，硬链接的文件共用文件系统中的节点，因此除了创建硬链接时，硬链接是没有源文件与目标文件的区别的。软链接是与路径相关的，因此如果源文件移动了以后软链接就不能用了，这点就类似windows里的快捷方式了，但是与快捷方式又不同。在linux和windows中的快捷方式(.desktop/.lnk)都仅仅是文本文件或者二进制文件而已，而软链接以后的文件在应用层是与源文件完全相同的。
* 同样由于与路径的关系，硬链接只能连接文件，而软链接可以连接文件或者文件夹。
* 硬链接只能在同一个文件系统内链接，软链接不受文件系统的约束
* 在linux中，硬链接只能有超级用户建立。

## Windows

### 快捷方式
直接右键发送到。命令行比较难，大多都是写vbs脚本等等实现。

### 符号链接

* 命令

```
创建符号链接。

MKLINK [[/D] | [/H] | [/J]] Link Target

        /D      创建目录符号链接。默认为文件
                符号链接。
        /H      创建硬链接，而不是符号链接。
        /J      创建目录联接。
        Link    指定新的符号链接名称。
        Target  指定新链接引用的路径
                (相对或绝对)。
```

用例[使用MKLINK给系统盘瘦身](/blog/use-mklink-to-save-space-of-C.html)

### 硬链接

在Windows建立硬链接是只适用于NTFS文件系统的，使用命令` fsutil hardlink`

* 命令语法，例子是把`bar.txt` 硬链接上 `foo.txt`

```
D:\user\user>fsutil hardlink create
用法 : fsutil hardlink create <new filename> <existing filename>
例如 : fsutil hardlink create c:\foo.txt c:\bar.txt
```

* API 函数

```c#
BOOL CreateHardLink(
     LPCTSTR lpFileName,
     LPCTSTR lpExistingFileName,
     LPSECURITY_ATTRIBUTES lpSecurityAttributes
);
```

适用于win2000及以上版本系统，最后一个参数保留，必须为`NULL`

### 软链接
在NTFS中的软链接，微软叫做junction，但是windows中建立软链接没有现成的命令，可以从[microsoft官网]( http://www.microsoft.com/technet/sysinternals/FileAndDisk/Junction.mspx)下载junction.exe并放到`C://Windows/System32/`文件夹中进行扩展，但是这里的软链接只能连接文件夹

* junction命令语法，其中例子是把windows文件夹链接上link文件夹

```
D:\user\user>junction

Junction v1.06 - Windows junction creator and reparse point viewer
Copyright (C) 2000-2010 Mark Russinovich
Sysinternals - www.sysinternals.com

The first usage is for displaying reparse point information, the
second usage is for creating a junction point, and the last for
deleting a junction point:
usage: junction [-s] [-q] <file or directory>
       -q     Don't print error messages (quiet)
       -s     Recurse subdirectories

usage: junction <junction directory> <junction target/existing>
       example: junction d:\link c:\windows

usage: junction -d <junction directory>
```

* API函数

```c#
BOOL WINAPI CreateSymbolicLink(
   __in   LPCWSTR lpSymlinkFileName,
   __in   LPCWSTR lpTargetFileName,
   __in   DWORD dwFlags
);

```

参数：

lpSymlinkFileName 要创建的符号链接名称.

lpTargetFileName 符号链接所对应目标的名称.

dwFlags 标识目标是文件还是目录. 取值0x0 代表是文件，SYMBOLIC_LINK_FLAG_DIRECTORY或0x1 代表是目录

这个要VISTA以上版本才支持。

### 其他方法
使用Cygwin或者mingw中的ln

## Linux

### 快捷方式
快捷方式比较烦。在桌面上就是一个`.desktop`文件。一般格式为

```ini
[Desktop Entry]
Encoding=UTF-8
Version=1.0                                     #version of an app.
Name[en_US]=yEd                                 #name of an app.
GenericName=GUI Port Scanner                    #longer name of an app.
Exec=java -jar /opt/yed-3.11.1/yed.jar          #command used to launch an app.
Terminal=false                                  #whether an app requires to be run in a terminal
Icon[en_US]=/opt/yed-3.11.1/icons/yicon32.png   #location of icon file.
Type=Application                                #type
Categories=Application;Network;Security;        #categories in which this app should be listed.
Comment[en_US]=yEd Graph Editor                 #comment which appears as a tooltip.
```

更快速的命令行方法在`GNOME` `KDE` `xfce` `Cinnamon` `LXDE`中都不同，详见[此处](https://linux.cn/article-2289-1.html)


### 软硬链接与符号链接
在linux里软硬连接就很简单了，都是使用`ln`命令 ，其中硬链接是`ln`软链接是`ln -s`

* 语法

```bash
ln [options] existingfile newfile
ln[options] existingfile-list directory
```

----
## Reference

[windows中对应linux的ln命令](http://cai555.iteye.com/blog/480231)

[关于硬链接和软链接（符号链接）的区别](http://blog.csdn.net/hairetz/article/details/4168296)

[Windows 的快捷方式，符号链接，软链接和硬链接](https://blog.alphatr.com/windows-mklink.html)

[学习 Linux，101: 创建和更改硬链接和符号链接](http://www.ibm.com/developerworks/cn/linux/l-lpic1-v3-104-6/index.html)

[如何在Linux的桌面上创建快捷方式或启动器](https://linux.cn/article-2289-1.html)
