---
layout: post
title: A solution of Cannot find ISE in the PATH variable or it's an unsupported version.
category: 用
tags:
  - 原创
  - bug
  - ise
date: 2015-12-10 12:48:43
create: 2015-12-10
---

## Problem

```
@E [IMPL-39] Cannot find ISE in the PATH variable or it's an unsupported version. Please update the PATH variable to include a supported version (13.1 and above)

while executing
...
```

## Solution

1. Make sure that you have installed ISE.
2. Find installation path of your ISE, open cmd at that path. For example "C:\Xilinx\version\ISE_DS"
3. Run `setting32.bat`.
4. Run `C:\Xilinx\Vivado_HLS\version\bin\vivado_hls.bat`.
5. Wait.
6. Then you can use the HLS to generate PCore for EDK.

## Why

Run `setting32.bat` or `setting64.bat` prepare the environment.
