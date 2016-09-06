---
layout: post
title: Windows命令行中文字体
category: 奇技淫巧
date: 2016-09-06
---

[来源](http://www.cnblogs.com/RhinoC/p/4470338.html)

## 更改编码
`chcp `

```
936   GBK
943   EN
65001 UTF-8
```

## 注册表字体
注册表进入
`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Console\TrueTypeFont`

名字由记事本为准

## Fontlink
注册表`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\FontLink\SystemLink`

新建字符串键值, 名字为之前的字体名称.
