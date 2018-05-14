---
layout: post
title: Github Pages 自定义域名启用 https
category: 器
tags:
  - 原创
  - github
  - https
  - 记录
date: 2018-05-12 14:25:26 +0800
create: 2017-03-20
---

## 2018-05-12 更新
2018年5月1号，GitHub[宣布](https://blog.github.com/2018-05-01-github-pages-custom-domains-https/)支持自定义域名用HTTPS了。

[使用方式](https://help.github.com/articles/setting-up-an-apex-domain/)大概就是更改一下DNS里A record指向的IP，设置为以下四个

> 185.199.108.153
> 185.199.109.153
> 185.199.110.153
> 185.199.111.153

然后在gh-pages的设置页面里把CNAME指向的域名删除，等几分钟后（等待github重新生成静态文件，不然会出问题）重新添加，然后等待github自动生成证书以后，就可以选中`force HTTPS`选项了。

![force-https](https://i.loli.net/2018/05/12/5af68c48ce661.png)

## 方法
[来源](https://sheharyar.me/blog/free-ssl-for-github-pages-with-custom-domains/)

1. [注册 Cloudflare](https://support.cloudflare.com/hc/en-us/articles/201720164-Sign-up-planning-guide)，这是一个为网站提供安全管理以及 DNS 解析之类服务的网站。使用免费 Plan 即可。
2. 添加你的域名，一切都会自动执行。
    * 如果你已经有了 gh-pages，只需要迁移到 https 上，那么不需要另外的操作。
    * 如果没有配置好 gh-pages，那么你需要首先进行 CNAME 配置。
3. 到域名注册服务商网站修改 DNS 为 Cloudflare 提供的网址。
4. 在 Cloudflare 设置 DNS 解析服务。
5. 打开 Cloudflare Settings 设置 SSL 为`Flexible SSL`。
6. 设置你的 Github Pages 启用 https。

### 设置 Github Pages

#### 让搜索引擎知道
在`_config.yml`里添加

```yaml
url: https://yoursite.com
enforce_ssl: yoursite.com
```

在页面 html `<head>`里添加

```html
<link rel="canonical" href="{{site.url}}{{page.url}}" />
```

#### 自动重定向到 https
在`<head>`里添加

```
<script type="text/javascript">
    var host = "yoursite.com";
    if ((host == window.location.host) && (window.location.protocol != "https:"))
        window.location.protocol = "https";
</script>
```

#### 其他
需要把所有引用的 js、img、css 等链接换成 https 或者直接用`//domain.com/something`这种写法。

## 原理
CloudFlare 会为你的网站添加一层缓存（http proxy），因此 https 是缓存到它的服务器上的内容的东西。具体可以看 [CloudFlare SSL 选项含义](https://support.cloudflare.com/hc/en-us/articles/200170416-What-do-the-SSL-options-mean-)
