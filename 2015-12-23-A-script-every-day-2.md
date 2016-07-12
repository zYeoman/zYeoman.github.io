---
layout: post
title: 每天一个脚本——以管理员身份运行
category: 脚本
date: 2015-12-23 23:21:50
---

如何在CMD中加上sudo命令呢?

```sh
powershell Start-Process %* -Verb RunAs
```

另存为sudo.bat 复制到`C:\Windows\`文件夹即可!
