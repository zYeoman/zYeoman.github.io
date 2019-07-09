---
layout: post
title: Vim 卡顿的调查
category: 用
date: 2019-07-09 17:13:01 +0800
create: 2019-07-09 16:52:30 +0800
tags: 
  - 工具
---

之前耗时巨大，终于搞出来一套自我感觉良好的[vimrc](https://github.com/zYeoman/dotfiles/blob/master/dual/vimrc)配置。在我的服务器上这套配置运行完美，但是在公司笔记本上有一点问题，就是打开大文件时（xx.c）和编辑大文件时延迟巨大。一开始怀疑是我自己编译的vim有问题，找了接近官方的PPA源发现还是卡。

```bash
# 查看vim运行各个函数耗时的工具
# 但是在此问题中无效= =
# 智能上二分查找了
vim --cmd 'profile start profile.log' --cmd 'profile func *' --cmd 'profile file *'
```

最终经过二分排查法，发现问题竟然和mod无关，而是因为——

```
set foldmethod=syntax
```
震惊！

然后Google告诉我，[别人也遇到过这种问题](https://www.reddit.com/r/vim/comments/2ln1hr/my_vim_was_slow_because_of_foldmethodsyntax_and/)。解决方案除了把这一行删掉，或者改成`foldmethod=indent`，还可以使用[FastFold](https://github.com/Konfekt/FastFold)。