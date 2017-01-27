---
layout: post
title: C 标准库学习·一·assert.h
category: 知识库
date: 2017-01-27
---

嵌入式里基本用的是标准 C。而且感觉自己对于 C 的库只知道`stdio.h`和`stdlib.h`很不好，因此开始学习 C 标准库。

## 背景知识
`<assert.h>`的唯一目的是提供宏`assert`的定义。在程序的关键部分使用`assert`进行断言。若断言非真则在`stderr`输出适当的提示信息并使之性异常中止。

断言只在调试程序的时候起作用。希望这些断言作为文档保留下来同时不希望它们产生代码。

### NDEBUG
**NDEBUG** 宏，通过定义`NDEBUG`改变断言的展开方式。

## 使用
* 使用宏`#define NDEBUG`来使断言不再起作用
* 很多编译器支持在任意 C 源文件之外定义宏，比如在 Makefile 里设置 NDEBUG。

## 实现
总体结构

```c
#undef assert  /* remove existing definition */
#ifdef NDEBUG
#define assert (test) ((void) 0)
#else
#define assert (test) ...
#endif
```

