---
layout: post
title: ArchLinux更新记录
category: 法
date: 2020-07-23 10:48:26 +0800
create: 2020-07-23 00:43:06 +0800
tags: 
  - 
---

- TOC
{:toc}

- openssh从8.1升级到8.2的时候，需要`sudo systemctl restart sshd.service`，即重启sshd服务。原因是sshd服务并没有正确地重启为8.2版本，结果导致服务和子程序不匹配，因此无法将无法连接。已有的连接不会断，所以这个问题很恶心。[参考链接1](https://bugs.archlinux.org/task/65517) [参考链接2](https://www.openssh.com/txt/release-8.2)
  - 8.2 之后的某一天将弃用sha-1。但是我的key都是sha-256啊。