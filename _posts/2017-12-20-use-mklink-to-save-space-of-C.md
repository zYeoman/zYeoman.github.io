---
layout: post
title: 使用MKLINK为系统盘瘦身
category: 用
tags:
  - 转载
  - windows
  - 链接
date: 2017-12-20 +0800
create: 2017-12-20 00:13:02 +0800
---

使用MKLINK将为windows系统盘瘦身

C:/windows/Installer是一个和C:/windows/winSxS同样可怕的文件夹，在我的固态硬盘上，它的体积达到了10GB，然而都是些没有什么卵用的安装文件。因此可以使用链接的方式把它挪到HDD里。

具体步骤如下

- Make sure no installations are running on your machine (there's probably a formal way to do this, but I'm not sure how).
- Copy using Windows explorer C:\Windows\Installer to another disk, e.g., D:\C_DRIVE\Windows\Installer -- note: Windows\Installer is a system folder and thus invisible in Windows 8.1. You have to tweak your account to make it visible to use Explorer to make the copy. Google will help you find out how to do that.
- Make a backup copy of C:\Windows\Installer
- Type the following commands in a cmd.exe window running as Administrator:

```bat
rmdir /s /q C:\Windows\Installer
mklink /D C:\Windows\Installer D:\C_DRIVE\Windows\Installer
```

---

- 确认在你的电脑上没有正在安装的软件（似乎不会有什么影响）
- 使用资源管理器把C:\Windows\Installer复制到别的硬盘上，例如D:\C_DRIVE\Windows\Installer。注意，Windows\Installer是一个系统文件夹，你需要在文件夹选项里关闭隐藏关键系统文件的选项。如果不知道怎么做或者总也找不到它，你可以google一下。
- 为C:\Windows\Installer做一个备份
- 管理员模式运行cmd（win+x a），键入以下命令并运行

```bat
rmdir /s /q C:\Windows\Installer
mklink /D C:\Windows\Installer D:\C_DRIVE\Windows\Installer
```

---

我已经这么做了，希望真的像帖子里说的那样吧。

来自 [StackExchange](http://superuser.com/questions/707767/how-can-i-to-free-up-drive-space-from-the-windows-installer-folder-without-killi#)

以及参考[Kavoir](http://www.kavoir.com/2012/07/how-to-free-up-c-drive-disk-space-in-windows-7-easy.html)
