---
layout: post
title: Vim 卡顿的调查
category: 用
date: 2019-10-04 20:49:58 +0800
create: 2019-07-09 16:52:30 +0800
tags: 
  - 工具
logs:
  - 2019-10-04 - 添加ALE luacheck
---

## 2019-10-04
最近发现vim编辑lua文件又特别卡，表现是在退出编辑之后移动光标的时候会停顿好久。猜测是`autocmd Cursor_Moved`的执行有问题。
通过`enew|pu=execute('autocmd')`得到所有应用中的autocmd，然后找到`Cursor_Moved`相关，挨个排查。最后发现是ALE的锅，相关结果如下

```
ALEEvents  CursorMoved
    *         if exists('*ale#engine#Cleanup') | call ale#cursor#EchoCursorWarningWithDelay() | endif

```
最后确认是ALE调用的`luacheck`太慢，将`g:ale_linters.lua`改成`luac`解决了问题。

## 原文
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