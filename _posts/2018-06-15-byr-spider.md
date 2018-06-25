---
layout: post
title: 北邮人BT爬虫
category: 用
tags:
  - 爬虫
  - python
date: 2018-06-25 18:08 +0800
create: 2018-06-15 23:05:53 +0800
---

在实验室搞了个服务器，准备用爬虫来做一个自动做种机。BT软件使用[Deluge](https://deluge-torrent.org/)，监视某个文件夹内的`torrent`文件，同时爬虫每二十分钟跑一次（使用`crontab`）下载大小、做种人数何时的种子到该文件夹内。

下面是一些关于这个爬虫的内容。

## 登录
主要内容来自[Python实现北邮人BT模拟登陆](http://fuxuemingzhu.me/2017/08/25/byrbt-login/)，登录Byr需要向`https://bt.byr.cn/takelogin.php`POST发送四个参数，即

```
{
    'username': username,
    'password': password,
    'imagestring': 验证码,
    'imagehash': 验证码图片Hash
}
```

其中验证码图片Hash在html内`name=imagehash`的`img`内，验证码识别使用Github上的一个专门的[Repo](https://github.com/bumzy/decaptcha)。

## 页面Parse
使用BeautifulSoup对页面进行操作，主要操作每个`tr`

## Code

<script src="https://gist.github.com/zYeoman/1d841c5a1227697bc82c81f4acf1f2ad.js"></script>
