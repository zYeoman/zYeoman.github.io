---
layout: post
title: nextcloud 安装
category: 知识库
date: 2017-09-16
create: 2017-03-08
---

## Archlinux 安装 nextcloud

```
主要参考[安装 owncloud with nginx](https://blog.eldajani.net/arch-linux-owncloud-with-nginx/)

`open_basedir = /srv/http/:/home/:/tmp/:/usr/share/pear/:/usr/share/webapps/:/etc/webapps/`
[解决方案](https://bbs.archlinux.org/viewtopic.php?id=176382)
```

采用 nextcloud+caddy+php+sql 的方案。

### 安装 php-fpm

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

```
my-nextcloud-site.com {

    root   /var/www/nextcloud
    log    /var/log/nextcloud_access.log
    errors /var/log/nextcloud_errors.log

    fastcgi / 127.0.0.1:9000 php {
        env PATH /bin
    }

    rewrite {
        r ^/index.php/.*$
        to /index.php?{query}
    }

    # client support (e.g. os x calendar / contacts)
    redir /.well-known/carddav /remote.php/carddav 301
    redir /.well-known/caldav /remote.php/caldav 301

    # remove trailing / as it causes errors with php-fpm
    rewrite {
        r ^/remote.php/(webdav|caldav|carddav|dav)(\/?)$
        to /remote.php/{1}
    }

    rewrite {
        r ^/remote.php/(webdav|caldav|carddav|dav)/(.+?)(\/?)$
        to /remote.php/{1}/{2}
    }

    rewrite {
        r ^/public.php/(.+?)(\/?)$
        to /public.php/(.+?)(\/?)$
    }

    # .htaccess / data / config / ... shouldn't be accessible from outside
    status 403 {
        /.htacces
        /data
        /config
        /db_structure
        /.xml
        /README
    }

    header / Strict-Transport-Security "max-age=31536000;"

}
```

注意运行此 Caddy 的用户需要是 http:http，修改`/etc/php/php-fpm.d/www.conf`里的`listen.owner` `listen.group`和`listen.mode`，否则打开上述网页的时候会出现`502 bad gateway`的错误。

### 安装
打开 Caddyfile 里设置的网址，填写设置即可。
