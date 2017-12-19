---
layout: post
title: 通过 google pagespeed
category: 器
date: 2017-03-20
create: 2017-03-20
---

## Cloudflare
好东西，既可以 HTTPS，又可以作为免费 proxy 用。进入修改 Speed 页面开启所有的`Auto Minify`就不需要压缩 css 和 js 了，然后 Caching 页设置浏览器缓存一个月。

## 其他

### 图片压缩
使用`jpegoptim --strip-com --strip-exif --strip-iptc -m85 filename`来压缩图片。

## 更多
更多的就是 css 设置以及多说的分享图片压缩（或者干脆去掉分享）了。
