---
layout: post
title: Windows下也要有sudo
category: 奇技淫巧
date: 2015-12-22 18:36:44
---

sudo是个好东西，身为一个软粉，当然要在cmd下用上sudo啦!

<!-- more -->

2015-12-23更新

如果不想启用Administrator用户, 还有一种可以不输入密码之间弹出UAC窗口的方法就是

```sh
powershell Start-Process cmd.exe -Verb RunAs
```



不想用额外的软件, 于是使用

```sh
runas /user:Administrator cmd
```

来以管理员身份运行cmd.

当然, 在Win7以后都要首先打开Administrator管理员. 使用

```sh
net user administrator /active:yes
net user administrator PASSWORD
```

来启用管理员和设置密码.

再接下来就是新建一个Bat批处理起名叫sudo.bat 丢到`C:\Windows`目录下了.

哦,记得到服务里把`Secondary Logon`服务启动.

### 参考
[StackExchange](http://superuser.com/questions/42537/is-there-any-sudo-command-for-windows)
[win7的Administrator账户初始密码是什么](http://bbs.csdn.net/topics/340029153)

