---
layout: post
title: 【Python】 string类中的 translate与maketrans函数
category: 法
tags:
  - 原创
  - python
  - python-challenge
date: 2015-08-06 21:37:55 +0800
create: 2015-08-06
---

这两个函数是在[Python Challenge level 1](http://www.pythonchallenge.com/pc/def/map.html)中用到的，主要功能是对字符串的映射，真是没想到python还有这样的函数。。。

## 背景故事

在[level 1](http://www.pythonchallenge.com/pc/def/map.html)中，题目是字符串密码，很简单的一种加密方式，提示是
> K->M
> O->Q
> E->G

仔细想一下就会发现，是把每一个字母的ascii值加2处理了，同时对密文处理实验后，发现其实`yz`映射成了`ab`。

## translate和maketrans函数

* `string.translate(s, table[, deletechars])`或者`str.translate(table[, deletechars])`
    - 在字符串中删除所有在`deletechars`中的字符，并把剩下的字符按照`table`[^1]内的映射关系进行映射
* `string.maketrans(from,to)`
    - 生成`translate()`函数所需的`table`，注意`from`和`to`必须一样长。

* 一个应用实例

```python
s = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."
table = string.maketrans(string.ascii_lowercase,string.ascii_lowercase[2:]+string.ascii_lowercase[:2])
print(s.translate(table))
```

其中的`string.ascii_lowercase`是`'abcdefghijklmnopqrstuvwxyz'`，同样的也有`string.ascii_letters` `string.ascii_uppercase` `string.digits`等等，详细内容见[官方文档](https://docs.python.org/2/library/string.html)

[^1]: 一个256字符长度的字符串，应该就是128个ASCII码值加上它的映射