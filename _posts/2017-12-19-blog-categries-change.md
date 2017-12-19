---
layout: post
title: 博客分类升级
category: 杂
tags:
  - 原创
  - 博客
date: 2017-12-20 00:05:42 +0800
create: 2017-12-19 23:20:20 +0800
---

越来越感受到博客的分类系统很成问题，这直接导致了其并没有体现出所谓“魔法笔记”的功能，而是成了一个偶尔记录一下回头就忘了的，和`pocket`什么的没有两样的工具。痛定思痛，决定深入优化一下博客的分类系统——Category和Tags两个系统。

## 结论

先上结论，每个`post`有一个唯一的`category`和多个`tags`，`category`包括以下几个类别

- 法：手段方法，包括各种奇技淫巧、使用方法
- 理：理论知识
- 器：工具列表、配置，各种脚本
- 用：技术应用，包括工具使用、BUG解决和整理
- 杂：周记日记，杂七杂八，胡思乱想，基本上不能归到上面那些类别里的都放到这里。

建议的Tags

- 列表：Awesome们
- 语言名：javascript，c/c++，matlab，python等等
- 类型：周记、日记、点子、杂谈、读后感、观后感
- 原创or转载
- 关联：博客、github

## Category

> A group, often named or numbered, to which items are assigned based on similarity or defined criteria. 

总之，一个Category就是一个分类。这里为了明确边界，对其进行更严格的要求：

1. Category是唯一的：每篇文章只能有一个Category
2. Category是排他的：不同Category之间有着明显的区别
3. Category是完备的：每篇文章都有Category

基于以上原则，再使用奥卡姆剃刀去掉我不可能涉猎的内容，得到以下分类

- 法：手段方法，包括各种奇技淫巧、使用方法
- 理：理论知识
- 器：工具列表、配置，各种脚本
- 用：技术应用，包括工具使用、BUG解决和整理
- 杂：周记日记，杂七杂八，胡思乱想，基本上不能归到上面那些类别里的都放到这里。

## Tags

Category类似资源管理器中的文件夹的概念，而Tags对应的就是文件的标签。与Category不同，对Tags的要求是很宽松的：

1. 关键词
2. 全小写
3. 每篇文章至少一个

这里列一下建议的Tags。

- 列表：Awesome们
- 语言名：javascript，c/c++，matlab，python等等
- 类型：周记、日记、点子、杂谈、读后感、观后感
- 原创or转载
- 关联：博客、github