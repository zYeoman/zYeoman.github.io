---
title: "[sublime]使用VS编译器cl编译c和c++"
date: 2015-6-16 22:11
category: 工具
layout: post
---

1. 创建三个系统变量

>    <1>名字: VS120Common
>
>    值: C:\Program Files (x86)\Microsoft Visual Studio 12.0\Common7
>
>    <2>名字: VS120VC
>
>    值: C:\Program Files (x86)\Microsoft Visual Studio 12.0\VC
>
>    <3>名字: VS120SDK
>
>    值: C:\Program Files (x86)\Microsoft SDKs\Windows\v7.1A

注意：VS120SDK不能是8.1A，不知道为什么

2. 追加三个用户变量


>    <1>名字: PATH

>    值 ：%VS120VC%\BIN;%VS120Common%\IDE;%VS120Common%\TOOLS;%VS120SDK%\BIN;%PATH%

>    <2>名字: INCLUDE

>    值 ：%VS120VC%\INCLUDE;%VS120VC%\ATLMFC\INCLUDE;%VS120SDK%\INCLUDE;%INCLUDE%

>    <3>名字: LIB

>    值 ：%VS120VC%\LIB;%VS120VC%\ATLMFC\LIB;%VS120SDK%\LIB;%LIB%
