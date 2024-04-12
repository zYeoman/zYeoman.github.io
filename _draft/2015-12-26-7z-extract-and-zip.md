---
layout: post
title: 一天一个脚本——使用7z批量解压和压缩
category: 器
tags:
  - 原创
  - bat
  - 脚本
date: 2016-12-06 17:20:42
create: 2015-12-26
---

7z是个绿色的解压和压缩软件,今天的脚本就是使用7z进行批量解压和压缩

主要目的是把一大批有密码的压缩包解压再压缩成无密码的

bat 内容如下

```
@for %%i in (*.rar) do @7z.exe x "%%i" -o"%%~ni" -p%1 && del "%%i"
@for /d %%i in (*) do @7z.exe a "%%~i.zip" "%%~i" && rmdir /s /q "%%i"
```

上述命令还可以升级一下成为(未经测试)

```
@for %%i in (*.rar) do @7z.exe x "%%i" -o"tmp" -p%1 && del "%%i" && 7z.exe a "%%~ni.zip" "tmp/" && rmdir /s /q "%%i"
```

在命令行直接使用`for`命令时,要使用`%i`;而如果在批处理文件中使用的话,就要用`%%i`
{: .notice}
