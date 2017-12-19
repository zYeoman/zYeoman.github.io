---
layout: post
title: Python sys.argv 数目不对
category: 用
tags:
  - 原创
  - bug
date: 2016-05-24 23:25:23
create: 2016-05-24
---

Windows 命令行可以直接写`test.py`运行python脚本，这本来是很好用的，但是使用时发现`sys.argv`永远只有脚本本身的路径

经过搜索后结果果然是文件关联有问题:

```

You should check that in your registry the way you have associated the files is correct, for example:

[HKEY_CLASSES_ROOT\Applications\python.exe\shell\open\command]
@="\"C:\\Python27\\python.exe\" \"%1\" %*"


```

[来源](http://stackoverflow.com/questions/9880540/python-command-line-arguments-windows)
