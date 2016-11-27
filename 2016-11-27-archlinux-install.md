---
layout: post
title: Archlinux 安装记录
category: 知识库
date: 2016-11-27
---

突然想起来windows还有一个叫Hyper-V的虚拟化工具，然后就决定装一个Archlinux试一试。毕竟网上Archlinux吹好多的。

据说按照wiki就能装好了。看一下吧。

## 配置Hyper-V
首先要打开windows的Hyper-V服务，打开控制面板->程序->启用或关闭Windows功能，把Hyper-V那一栏打上勾。然后也许要重启一下。

然后打开Hyper-V管理器，创建一个新服务器，右键添加虚拟交换机。创建新虚拟机，使用 *第一代* 虚拟机，不能使用第二代。。。插入iso。开启虚拟机。

## 安装Arch
在虚拟机上安装，最好的一点就是不怕搞坏硬盘。。。

按照[wiki](https://wiki.archlinux.org/index.php/Installation_guide)上的步骤来。键盘布局、连接网络、系统时间什么的都没改过，没遇到问题。

```sh
# 建立分区
## 查看
fdisk -l
## 建立(例子)
fdisk /dev/sda
### n 新分区，+xG指定大小xGB，w写入磁盘
## 格式化
mkfs.ext4 /dev/sda1
## 挂载
mount /dev/sda1 /mnt

# 安装
## 选择镜像
vi /etc/pacman.d/mirrorlist
### uncomment tsinghua mirror 
## 安装
pacstrap /mnt

# 配置
## fstab(硬盘UUID卷标)
genfstab -U /mnt >> /mnt/etc/fstab
## chroot
arch-chroot /mnt /bin/bash
## 时区
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
## Locale
vi /etc/locale.gen
### uncomment en_US,zh_CN
locale-gen
echo LANG=en_US.UTF-8 > /etc/locale.conf
## 主机名
echo matrix > /etc/matrix
## 网络没配置
## Root密码
passwd

# 安装引导
## 第一代虚拟技术只支持MBR
pacman -S grub
grub-install /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg

# 新建用户
## 新建wheel组用户mickir
useradd -m -G wheel -s /bin/bash mickir
## 密码
passwd mickir
## 安装sudo
pacman -S sudo
## 配置sudo，uncomment wheel ALL(ALL)
visudo

# 安装ssh
pacman -S openssh
systemctl start sshd

# 自动启动dhcpcd和sshd
systemctl enable dhcpcd
systemctl enable sshd

# 忘记分swap分区了
dd if=/dev/zero of=/swapfile bs=1M count=1024
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
vi /etc/fstab
## Add line: /swapfile none swap defaults 0 0

# 重启
exit
umount -R /mnt
reboot
```

## 其他
还没有装图形界面。和普通Linux没有多大差别，到现在为止。
