---
layout: post
title: putty中文乱码
category: Bug
date: 2016-05-16 22:26:12
create: 2016-05-16
---
试过了网上找的一切方法.

* `export LC_ALL=zh_CN.UTF-8`
* 设置putty转换(Trans)编码为utf-8

最终的解决方案是

重新生成locale

```sh
$ sudo locale-gen "zh_CN.UTF-8"
$ sudo dpkg-reconfigure locales
```
