---
layout: post
title: samba配置
category: 用
date: 2019-10-23 00:33:11 +0800
create: 2019-10-23 00:27:36 +0800
tags: 
  - 软件
  - Linux
---

- TOC
{:toc}

## 避免文件名重写（Name Mangling）
来自：[windows - Files/Folders get weird names and become inaccessible on Samba share - Super User](https://superuser.com/questions/458995/files-folders-get-weird-names-and-become-inaccessible-on-samba-share)

因为某些兼容性原因（古老的windows文件名长度支持的问题等），samba会默认把过长的文件名编码成一些类似乱码、中间有`~`符号的东西。例如`B7817Y~J.zip`，这功能貌似叫[Name Mangling and Case](https://www.oreilly.com/openbook/samba/book/ch05_04.html)。当然，现代操作系统还启用这种功能是很让人烦恼的。

解决方案：修改`/etc/smb.conf`，在`[global]`下添加`mangled names=no`即可。
{: .notice}

