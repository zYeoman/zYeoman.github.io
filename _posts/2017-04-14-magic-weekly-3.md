---
layout: post
title: 周刊魔法道具与咒语：第 III 辑—github
category: 知识库
date: 2017-04-16
create: 2017-04-14 22:54:08
---

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

## tmux

[tmux-config](https://github.com/tony/tmux-config)
