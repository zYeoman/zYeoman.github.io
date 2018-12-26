---
layout: post
title: 魔法道具与咒语
category: 器
tags:
  - 更新中
logs:
  - 2018-12-26 - 合并1-6
date: 2018-12-26 20:36 +0800
create: 2017-03-31 16:34:50
---

## 创刊
看到了这个 [HelloGitHub](https://github.com/521xueweihan/HelloGitHub) 感觉这种周刊的方式很适合我这种收集癖。于是想要自己也弄这么一个。

## zsh

### oh-my-zsh
使用 [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)，必开的插件有：

* `git`: 提供 git 的 alias 以及自动完成的提示
* `git-extras`：[git-extras](https://github.com/tj/git-extras) 的自动完成
* `z`：模糊匹配去过的目录并跳转。`z dir`
* `pip` `archlinux` 等等自动完成补全命令。
* `encode64`：常用。
* `cp`：带进度条的 cp

### take
应该可以算是最常用的命令之一了。

```sh
> which take
take () {
    mkdir -p $1
    cd $1
}
```

## 字体

### mononoki
![下载.png](https://ooo.0o0.ooo/2017/03/31/58de2c0096c0e.png)

```sh
# Install in ArchLinux
yaourt -S ttf-mononoki
```

> 我是坚定不移的 Consolas 党

## C 技巧

### 调试输出

来自[调试宏](https://segmentfault.com/a/1190000005683869)

```c
#define log_err(M, ...) fprintf(stderr, "[ERROR] (%s:%d: errno: %s) " M "\n", __FILE__, __LINE__, clean_errno(), ##__VA_ARGS__)

#define log_warn(M, ...) fprintf(stderr, "[WARN] (%s:%d: errno: %s) " M "\n", __FILE__, __LINE__, clean_errno(), ##__VA_ARGS__)

#define log_info(M, ...) fprintf(stderr, "[INFO] (%s:%d) " M "\n", __FILE__, __LINE__, ##__VA_ARGS__)
```

## VIM

### space-vim
[![space-vim](https://github.com/liuchengxu/space-vim-dark/blob/screenshots/screenshot3.png?raw=true)](https://github.com/liuchengxu/space-vim/)

类似 Spacemacs 的 space-vim.

### vim-colorschemes
[vim-colorschemes](https://github.com/flazz/vim-colorschemes) 是一堆 vim colorscheme。


## Python

### 几本书
* [《Python 最佳实践指南！》](http://pythonguidecn.readthedocs.io/zh/latest/)：主要讲一个合格的工程应该长得什么样，包括结构、代码风格、文档、测试、日志等等，然后是一些模块和部署方面的内容。
* [《Python Cookbook》](http://python3-cookbook.readthedocs.io/zh_CN/latest/)：Cookbook，就是各种实现方法、小技巧。

### 几个有意思的库
* [srez](https://github.com/david-gpu/srez)：超分辨率算法。
* [geoplotlib](https://github.com/andrea-cuttone/geoplotlib)：地图绘制库。
* [altify](https://github.com/ParhamP/altify)：利用深度神经网络进行图片自动标注。
* [polyglot](http://polyglot.readthedocs.io/en/latest/)：一个语言库，包括识别语言、单词造句、词法分析等等工具。
* [SymPy](http://docs.sympy.org/latest/index.htmlhttp://docs.sympy.org/latest/index.html)：一个 Python 符号计算工具。

## Git

### 图形化学习
[learngitbranching](http://learngitbranching.js.org/)

[![learngitbranching](https://ooo.0o0.ooo/2017/04/07/58e78f27476e4.png)](http://learngitbranching.js.org/)
使用图形化方式直观体现 git branch 的各种操作以及会产生的后果，建议忘了多回去看看。


## GitHub

### ZenHub
> [ZenHub](https://www.zenhub.io/)

一个浏览器插件，在 GitHub 页面上添加任务面板、TODO、统计和其他小功能。

### TravisCI
> [TravisCI](https://travis-ci.org/)

持续集成工具。

### Reviewable
> [Reviewable](https://reviewable.io/)

Review 工具。

### Coveralls
> [Coveralls](http://coveralls.io/)

代码覆盖率检查工具。

## Python
* [Eve](http://python-eve.org/)：Python REST 库
* [Python 编码指南中文版](http://www.elias.cn/Develop/PythonStyleGuide)

## URLs
* http://apis.io/ 搜索 API 工具

## tmux

[tmux-config](https://github.com/tony/tmux-config)


## Python
* `pandas`: 数据处理

## Blog
* [人人都会的 35 个 jQuery 小技巧](https://segmentfault.com/a/1190000003902322)
    * 禁止右键
    * 隐藏搜索框文字
    * 新窗口打开链接
    * 检测浏览器
    * 预加载图片
    * 页面样式切换
    * 列高度相同
    * 动态控制页面字体大小
    * 返回顶部
    * 检查图片是否加载完成
    * 自动替换加载失败图片
    * 禁用 input
    * 等等
* [学习用 doxygen 生成源码文档](https://www.ibm.com/developerworks/cn/aix/library/au-learningdoxygen/)
* [Icons for everything：搜索 icon](https://thenounproject.com/)


## vim

### 自动安装 vim-plug

```vim
let vimplug_path=expand('~/.vim/autoload/plug.vim')
if !filereadable(vimplug_path)
    echo "Installing vim-plug"
    echo ""
    silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
        \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
endif
```

## Blog/Wiki 工具
* [Micolog](https://github.com/xuming/micolog): 在 [Google App Engine](https://console.cloud.google.com) 里运行一个 Blog
* [TiddlyWiki](http://tiddlywiki.com/): 单页面 wiki
* [nullege](http://nullege.com/): Python 代码搜索
