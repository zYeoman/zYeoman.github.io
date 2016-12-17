---
layout: post
title: 快捷新建blog post的方法
categories: 知识库
date: 2016-12-17
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

注意`if`条件判断的地方，这也是我这篇post主要想讨论的地方。

### 批处理的命令行参数

批处理文件中可引用的参数为%0~%9， %0是指批处理文件的本身，也可以说是一个外部命令；%1~%9是批处理参数，也称形参；而替换形参的实参若超过了批处理文件中所规定数值（9个）且想在批处理文件中应用这些实参的话，可以用shift命令，或者`%*`，（%*表示的是除了`%0`以外的所有参数（包括第⑨个以后的））。！


     批参数(%n)的替代已被增强。您可以使用以下语法:
                %~1           - 删除引号(\")，扩充 %1(很有用)
                %~f1          - 将 %1 扩充到一个完全合格的路径名
                %~d1          - 仅将 %1 扩充到一个驱动器号
                %~p1          - 仅将 %1 扩充到一个路径
                %~n1          - 仅将 %1 扩充到一个文件名
                %~x1          - 仅将 %1 扩充到一个文件扩展名
                %~s1          - 扩充的路径指含有短名
                %~a1          - 将 %1 扩充到文件属性
                %~t1          - 将 %1 扩充到文件的日期/时间
                %~z1          - 将 %1 扩充到文件的大小
                %~$PATH : 1 - 查找列在 PATH 环境变量的目录，并将 > %1扩充到找到的第一个完全合格的名称。如果环境变量名未被定义，或者没有找到文件，此组合键会扩充到空字符串


     可以组合修定符来取得多重结果:
                %~dp1         - 只将 %1 扩展到驱动器号和路径
                %~nx1         - 只将 %1 扩展到文件名和扩展名
                %~dp$PATH:1   - 在 PATH 环境变量中的目录里查找 %1，并扩展到找到的第一个文件的驱动器号和路径。
                %~ftza1       - 将 %1 扩展到类似 DIR 的输出行。

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
