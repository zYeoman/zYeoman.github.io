---
layout: post
title: C++ auto的使用
category: 法
date: 2019-10-24 00:32:05 +0800
create: 2019-10-24 00:27:55 +0800
tags: 
  - C++
  - 编程
---

- TOC
{:toc}

## 在循环中使用
> ref: [auto, auto&, const auto&以及其它形式的auto变种在for-range loop的选择 - 知乎](https://zhuanlan.zhihu.com/p/25148592)

总结：需要修改循环项时，使用`auto &&`；不修改循环内容的时候，使用`const auto &`。
