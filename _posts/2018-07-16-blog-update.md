---
layout: post
title: Blog大升级
category: 用
tags: jekyll javascript css
date: 2019-10-12 00:15:01 +0800
stickie: true
logs:
  - 2019-06-18 - 使用WorkBox设置PWA应用
  - 2019-04-29 - 手机更新不及时，删除了service worker
  - 2019-04-14 - TOC格式优化，参考segmentfault
  - 2019-04-10 - Valine添加百度贴吧表情包
  - 2018-09-27 - 增加代码块复制和高度限制、参考资料，优化TOC的css
  - 2018-09-26 - 使用html5语义化标签
  - 2018-09-23 - 使用gruvbox主题
  - 2018-09-21 - 增加猜你喜欢和历史记录
  - 2018-09-21 - 增加置顶和转载功能
  - 2018-07-16 - 性能优化
create: 2018-07-16 18:49:48 +0800
---

![](https://i.loli.net/2019/06/18/5d08821db1c3255508.jpg)

## 更新记录

### 2019-06-18
- 使用[workbox](https://developers.google.com/web/tools/workbox/)
  - 没有设置offline fallback，因为没必要。

### 2018-09-27
- 增加代码块复制功能：使用[clipboard.js](https://clipboardjs.com/)
- 增加代码块高度限制、优化滚动条：目前只对webkit有用
- 增加参考资料功能：通过css`:before`功能添加一栏
- 优化TOC代码：css更优化，只active`h2`标签

### 2018-09-26
- 使用html5语义化标签：包括`main` `section` `footer` `header`等

### 2018-09-23
- 代码块使用[gruvbox](https://github.com/daveyarwood/gruvbox-pygments)主题

### 2018-09-21
- 增加猜你喜欢功能——通过筛选相同tag文章实现
- 增加历史记录功能——通过文件头添加`logs`实现
- UI参考[这里](https://blog.fooleap.org/jekyll-related-posts.html)

### 2018-09-21
- 增加置顶功能——通过在markdown文件头添加`stickie:true`实现
- 增加转载提示——通过在markdown文件头添加`ref:http://origrin_url.com`实现

### 2018-07-16
- 优化Blog性能等。

## 优化Blog性能
经过我一个周末的奋斗，Blog升级成果喜人！
![](https://i.loli.net/2018/07/16/5b4c893d53fff.png)

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
