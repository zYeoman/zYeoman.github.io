---
layout: post
title: Python特殊方法
category: 知识库
date: 2017-01-02
---

* `__new__(cls[,...])` 在`__init__()`之前调用。
* `__init__(self[,...])`
* `__del__(self[,...])`
* `__repr__(self)`: repr()，官方string表示。尽可能返回能够重建该对象的可运行的合法Python表达式字符串，或者返回形如"<module 'os' from '/usr/lib/python3.5/os.py'>"的字符串。
* `__str__(self)`: str(), format()，print()。返回字符串
* `__bytes__(self)`: 
