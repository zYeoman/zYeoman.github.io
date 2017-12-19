---
layout: post
title: 快捷新建blog post的方法
category: 器
tags:
  - 原创
  - 脚本
  - jekyll
date: 2016-12-17
create: 2015-09-29
---

    2016-12-17修改

    使用Python
## Python

现在使用`ed.py`新建、修改、删除文件。具体见[github](https://github.com/zYeoman/articles)

--------------

Jekyll虽好，每次新建文章都要找到blog目录下执行'rake post title="Foo"`才能新建一个post，这太让人失望了。于是就用Autohotkey和批处理写了一个快捷的方法。

## Autohotkey
[`Autohotkey`](http://www.autohotkey.com/)是一个`windows`平台的快捷键脚本语言，单文件执行，脚本编写也非常简单。可以在官网上找到英文的帮助文档，也可以Google到帮助文档的翻译版本。总之，接下来我们用Autohotkey来做一个快捷的新建blog post的方法。（PS：在Linux下使用alias貌似就挺好哈哈）

具体脚本如下

```
^!l::Run E:\6script\life.bat,,Hide
;这是注释
;这里就是Ctrl(^)+Alt(!)+l隐藏运行一个批处理文件
^!k::
;这里就是Ctrl(^)+Alt(!)+k隐藏运行一个批处理文件
InputBox, title, 标题, ,,,100
; 输入post的标题
if title ;如果有输入就运行
{
    Run E:\6script\post.bat "%title%",,Hide
}
return
```

## 批处理

`post.bat`内容

```
@ cd /d D:\user\user\Mickir'sBlog
@ if NOT "%~1"=="" rake post title=%1
```

这里也防止了没有输入的情况

关于[批处理的命令行参数](/blog/bat-file-argv.html)
{: .notice}

## rakefile
还要修改`rakefile.rb`使之能够自动调用sublime编辑新建的文档。

```ruby
  system('subl '+filename)
```

注：我是新建了一个`subl.bat`放在`C:/Windows`文件夹下实现的命令行调用subl。。。其实感觉这样子的话很多Path中的内容都可以使用`windows`文件夹里加批处理文件来实现了。

```
@ $sublimepath$/subl %*
```

-----------------

## 批处理大法好
