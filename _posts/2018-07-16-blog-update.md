---
layout: post
title: Blog 大升级
category: 折腾记录
tags: jekyll javascript css
date: 2019-10-12 00:15:01 +0800
stickie: true
logs:
  - 2023-08-18 - 弃用 Valine，改用 Twikoo
  - 2019-06-18 - 使用 WorkBox 设置 PWA 应用
  - 2019-04-29 - 手机更新不及时，删除了 service worker
  - 2019-04-14 - TOC 格式优化，参考 segmentfault
  - 2019-04-10 - Valine 添加百度贴吧表情包
  - 2018-09-27 - 增加代码块复制和高度限制、参考资料，优化 TOC 的 css
  - 2018-09-26 - 使用 html5 语义化标签
  - 2018-09-23 - 使用 gruvbox 主题
  - 2018-09-21 - 增加猜你喜欢和历史记录
  - 2018-09-21 - 增加置顶和转载功能
  - 2018-07-16 - 性能优化
create: 2018-07-16 18:49:48 +0800
---

![](https://i.loli.net/2019/06/18/5d08821db1c3255508.jpg)

## 更新记录

### 2023-08-18

- 弃用 Valine，改用 [Twikoo](https://twikoo.js.org/)
  - 在 [Zeabur](https://zeabur.com/) 上托管

### 2019-06-18

- 使用[workbox](https://developers.google.com/web/tools/workbox/)
  - 没有设置 offline fallback，因为没必要。

### 2018-09-27

- 增加代码块复制功能：使用[clipboard.js](https://clipboardjs.com/)
- 增加代码块高度限制、优化滚动条：目前只对 webkit 有用
- 增加参考资料功能：通过 css`:before`功能添加一栏
- 优化 TOC 代码：css 更优化，只 active`h2`标签

### 2018-09-26

- 使用 html5 语义化标签：包括`main` `section` `footer` `header`等

### 2018-09-23

- 代码块使用[gruvbox](https://github.com/daveyarwood/gruvbox-pygments)主题

### 2018-09-21

- 增加猜你喜欢功能——通过筛选相同 tag 文章实现
- 增加历史记录功能——通过文件头添加`logs`实现
- UI 参考[这里](https://blog.fooleap.org/jekyll-related-posts.html)

### 2018-09-21

- 增加置顶功能——通过在 markdown 文件头添加`stickie:true`实现
- 增加转载提示——通过在 markdown 文件头添加`ref:http://origrin_url.com`实现

### 2018-07-16

- 优化 Blog 性能等。

## 优化 Blog 性能

经过我一个周末的奋斗，Blog 升级成果喜人！
![](https://i.loli.net/2018/07/16/5b4c893d53fff.png)

目前使用的是我自己修改的[3-Jekyll Theme](https://github.com/zYeoman/3-Jekyll)。

## Performance

使尽浑身解数，搞不定啊！采用的方案包括但不限于所有 js 都`defer`、搞了个`base.scss`直接嵌入 html 里等等。

## PWA

使用[这篇](https://juejin.im/post/5adb48b3f265da0ba76f502a)博客的方法，以及相对应的[Github Repo](https://github.com/Yuliang-Lee/Yuliang-Lee.github.io)。

## Accessibility

重点是颜色对比度。可以用[这个](https://dequeuniversity.com/rules/axe/2.2/color-contrast)来测试对比度够不够。

## Best Practices

使用[cloudflare](https://cloudflare.com)对 github pages 进行缓存和 CDN，提供`HTTP/2` `https`等功能。

## SEO

使用[jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)插件，以及添加`robots.txt`等方法。
