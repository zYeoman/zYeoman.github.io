---
layout: post
title: nextcloud 安装
category: 折腾记录
tags:
  - 原创
  - nextcloud
  - 记录
date: 2017-12-17 16:43 +0800
create: 2017-03-08
---

采用 nextcloud+caddy+php+sql 的方案。
> 主要参考[安装 owncloud with nginx](https://blog.eldajani.net/arch-linux-owncloud-with-nginx/)

`open_basedir = /srv/http/:/home/:/tmp/:/usr/share/pear/:/usr/share/webapps/:/etc/webapps/`
[解决方案](https://bbs.archlinux.org/viewtopic.php?id=176382)

## 安装 php-fpm

直接使用`pacman`安装即可，主要需要安装

```
pacman -S php php-fpm php-mysql php-gd php-curl php-intl php-mcrypt php-apcu
```

安装完成后可以通过`systemctl start php-fpm.service`启动 php-fpm 服务。

启动之前需要修改一些配置。编辑`/etc/php/php.ini` 取消`extension=**.so`的注释，`**.so`包括`bz2.so`,`curl.so`,`gd.so`,`iconv.so`,`intl.so`,`mcrypt.so`,`pdo_mysql.so`,`xmlrpc.so`,`zip.so`，并修改`upload_max_filesize`。

打开 Cache 以获得更好的体验。
编辑`/etc/php/conf.d/apcu.ini` 加入以下几行：

```ini
extension=apcu.so
apc.enabled=1
apc.shm_size=32M
apc.ttl=7200
apc.enable_cli=1
```

编辑`/etc/php/php.ini` 取消`zend_extension=opcache.so`的注释，并添加：

```ini
opcache.enable=1
opcache.enable_cli=1
opcache.interned_strings_buffer=8
opcache.max_accelerated_files=10000
opcache.memory_consumption=128
opcache.save_comments=1
opcache.revalidate_freq=1
```

### 安装 mysql
使用`pacman -S mysql` 安装 MariaDB，并添加用户。

```
$ mysql -u root -p
mysql> CREATE DATABASE `nextcloud` DEFAULT CHARACTER SET `utf8` COLLATE `utf8_unicode_ci`;
mysql> CREATE USER `nextcloud`@'localhost' IDENTIFIED BY 'password';
mysql> GRANT ALL PRIVILEGES ON `nextcloud`.* TO `nextcloud`@`localhost`;
mysql> \q
```

添加一个密码位`password`的用户`nextcloud`，以及一个`nextcloud`数据库。

### 配置 Caddy
来自 [caddyserver examples](https://github.com/caddyserver/examples/blob/master/nextcloud/Caddyfile)

<script context="inline" src="https://gist.github.com/zYeoman/b74295eed7e631886b5ce092388bc16a.js"></script>

没有看到代码请[刷新]()
{: .notice}

注意运行此 Caddy 的用户需要是 http:http，修改`/etc/php/php-fpm.d/www.conf`里的`listen.owner` `listen.group`和`listen.mode`，否则打开上述网页的时候会出现`502 bad gateway`的错误。

## 安装

打开 Caddyfile 里设置的网址，填写设置即可。

## SSL手动配置

貌似校园网把80端口给屏蔽了还是怎么了，总之Caddy自动更新证书的功能失效了，只能手动使用`certbot`更新了。

```sh
# 安装certbot
sudo pip install certbot
# 使用DNS方式添加
certbot -d your.domain.com --manual --preferred-challenges dns certonly
# 这种方式会要求你添加一个TXT类型的DNS record，等待生效后就行了
# 证书位置在/etc/letsencrypt/live/your.domain.com/fullchain.pem和privekey.pem
```

获得证书后，稍微修改一下`Caddyfile`即可。在域名那里置顶端口`:443`，大括号里面添加`tls /etc/letsencrypt/live/your.domain.com/fullchain.pem /etc/letsencrypt/live/your.domain.com/privkey.pem`。

