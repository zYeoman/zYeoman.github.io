---
layout: post
title: Blog大升级
category: 用
tags: jekyll javascript css
date: 2018-07-16 20:06 +0800
create: 2018-07-16 18:49:48 +0800
---

![](https://i.loli.net/2018/07/16/5b4c893d53fff.png)

经过我一个周末的奋斗，Blog升级成果喜人！

目前使用的是我自己修改的[3-Jekyll Theme](https://github.com/zYeoman/3-Jekyll)。

## Performance
使尽浑身解数，搞不定啊！采用的方案包括但不限于所有js都`defer`、搞了个`base.scss`直接嵌入html里等等。

## PWA
使用[这篇](https://juejin.im/post/5adb48b3f265da0ba76f502a)博客的方法，以及相对应的[Github Repo](https://github.com/Yuliang-Lee/Yuliang-Lee.github.io)。

## Accessibility
重点是颜色对比度。可以用[这个](https://dequeuniversity.com/rules/axe/2.2/color-contrast)来测试对比度够不够。

## Best Practices
使用[cloudflare](https://cloudflare.com)对github pages进行缓存和CDN，提供`HTTP/2` `https`等功能。

## SEO
使用[jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)插件，以及添加`robots.txt`等方法。
