---
layout: post
title: 一天一个脚本——使用7z批量解压和压缩
category: 奇技淫巧
date: 2015-12-26 17:20:42
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

注意,在命令行直接使用`for`命令时,要使用`%i`;而如果在批处理文件中使用的话,就要用`%%i`

### 附: 批处理FOR命令
[for详解](http://blog.csdn.net/xhhjin/article/details/7373524)
[变量修改](https://wanglongqi.github.io/system/2014/11/18/variableinforloop/)

```
%~I         - 将 %I 去掉变量两边的双引号 (")
%~fI        - 将 %I 转换到路径全称
%~dI        - 将 %I 转换到盘符名
%~pI        - 将 %I 转换到路径
%~nI        - 将 %I 转换到文件名
%~xI        - 将 %I 转换到后缀名
%~sI        - 将 %I 转换到短路径名
%~aI        - 将 %I 转换到文件属性
%~tI        - 将 %I 转换到文件日期
%~zI        - 将 %I 转换到文件大小
%~$PATH:I   - 查找搜索路径并补全到 %I
```
