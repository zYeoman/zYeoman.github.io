---
layout: post
title: 周刊魔法道具与咒语：第 I 辑
category: 器
tags:
  - 更新中
date: 2017-03-31
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

