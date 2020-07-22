---
layout: post
title: ArchLinux更新记录
category: 法
date: 2020-07-23 00:44:53 +0800
create: 2020-07-23 00:43:06 +0800
tags: 
  - 
---

- TOC
{:toc}

- openssh从5.1升级到5.2的时候，需要`sudo systemctl restart sshd.service`，即重启sshd服务。原因是sshd服务并没有正确地重启为5.2版本，结果导致服务和子程序不匹配，因此无法将无法连接。已有的连接不会断，所以这个问题很恶心。