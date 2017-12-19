---
layout: post
title: Seed点词翻译Api之剽窃之旅
category: 器
tags:
  - 原创
  - api
date: 2016-03-10 11:05:55
create: 2016-03-10
---

一直想要一个类似Seed(一款Android上读英文新闻的应用, 可以实现点击翻译, 可惜不是浏览器)的浏览器。突然发现Seed可以添加任何页面，同时还有所谓的Web阅读方式，于是猜测它是直接将原页面加一个Js实现的点词翻译。这就简单了！直接Google了一个抓包工具[Packet Capture](https://play.google.com/store/apps/details?id=app.greyshirts.sslcapture) 然后抓包。

果不其然！所有的效果都是一个Js造成的，就是`http://api.helloseed.io/scripts/seedplugin.js`，这个js会把所有的单词放到`<sw></sw>`标签内，然后响应点击事件。

PS. 写这篇东西的时候又发现了[这个](https://github.com/HalfdogStudio/youdaodict)油猴子脚本，赞！
