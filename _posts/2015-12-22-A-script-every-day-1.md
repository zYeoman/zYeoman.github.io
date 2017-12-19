---
layout: post
title: 每天一个脚本——快速打开文件
categories: 器
tags:
  - 原创
  - autohotkey
  - 脚本
date: 2016-12-06 16:03:33
create: 2015-12-22
---

从今天开始，每天更新一个脚本。Autohotkey的或者Python的。

## 用Sublime等编辑器快速打开资源管理器里的文件

现在总是使用sublime，这个脚本已经弃用了。
{: .notice}

准备`Ctrl+o` `Ctrl+s`使用sublime text 打开选中的文件，`Ctrl+o` `Ctrl+v`使用Gvim打开选中文件。

看代码:

```
;==================================================
; 快捷键Ctrl+o开始打开
; Ctrl+o Ctrl+s 用sublime打开
; Ctrl+o Ctrl+v 用gvim打开
;==================================================
ClearOpenFlag:
  OpenFlag := 0
  return
; 清标记位
^o::
WinGet, process, processName, % "ahk_id" WinExist("A")
if (process=="explorer.exe"){
  path := Explorer_GetSelected()
}
else if (process=="Everything.exe"){
  ClipSaved := ClipboardAll
  Send ^+c
  ; 在Everything中Ctrl+Shift+c复制完整路径和文件名
  ClipWait
  path = %clipboard%
  Clipboard := ClipSaved
}
else{
  Suspend On
  Send ^o
  Suspend Off
  return
}
SetTimer, ClearOpenFlag, 500
OpenFlag = 1
; 设置标记位, 超时则清楚标记位
return
; 用sublime text 打开
^s::
if (OpenFlag==1){
  OpenFlag = 0
  Run, "E:\Sublime Text 3\subl.exe" "%path%"
}
else{
  Suspend On
  Send, ^s
  Suspend Off
}
return
; 用gvim打开
^v::
if (OpenFlag==1){
  OpenFlag = 0
  Run, "C:\Windows\gvim.bat" "--remote-tab-silent" "%path%"
}
else{
  Suspend On
  Send, ^v
  Suspend Off
}
return
```
