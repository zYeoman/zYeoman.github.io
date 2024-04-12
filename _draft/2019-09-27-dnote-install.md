---
layout: post
title: DNOTE的不成功安装记录
category: 杂
date: 2019-09-28 00:16:04 +0800
create: 2019-09-27 23:46:25 +0800
tags: 
  - 记录
---

- TOC
{:toc}

## DNote
[DNote](https://github.com/dnote/dnote)是一个用Go写的支持Markdown的笔记工具。大概长得像下面这样，其实有点丑。然后发现的确支持开源的self-hosted，所以就折腾了一晚上（一个多小时吧），深感自己知识的不足。
![](https://i.loli.net/2019/09/27/qwuf5Hh6ROkl9Wc.jpg)
*大概长这样*

## 开搞
### 数据库
DNote使用PostgreSQL数据库，直接在数据库中新建用户、表即可
```bash
# 切换到postgres用户
sudo su - postgres
psql
# 创建新用户
postgres=# CREATE USER dnote WITH PASSWORD 'dnote';
# 创建新数据库
postgres=# CREATE DATABASE dnotedb OWNER dnote;
# 给与权限
postgres=# GRANT ALL PRIVILEGES ON DATABASE dnotedb TO dnote;
# 注意dnote用户需要时superuser，不然会出现SSL失败的情况（？）
dnote=# ALTER USER dnote WITH SUPERUSER;
```
### 运行
按照[这个](https://github.com/dnote/dnote/blob/master/SELF_HOSTING.md)流程来

```bash
GO_ENV=PRODUCTION \
DBHost=localhost \
DBPort=5432 \
DBName=dnote \
DBUser=$user \
DBPassword=$password \
  dnote-server start
```

然后成功运行，但是不能注册。
![](https://i.loli.net/2019/09/28/iYoVS18ZGMuRFOD.jpg)

### 尝试docker
读了一部分issue，发现有人搞过一个[docker](https://gist.github.com/CrCs2O4/d4d78780ad46bef6cf618e1feb7f16f7)。然后，可能这个docker能用？
```bash
# 先下载下来
docker build -t dnote ./
docker-compose pull postgres
docker-compose up
```
然后没有创建database，失败了。

## 感想
难怪Pro版本收费$3/Month。。。我还是用我自己的Editor吧。