---
layout: post
title: Archlinux 安装记录
category: 法
tags:
  - 原创
  - arch
  - 记录
date: 2017-03-02
create: 2016-11-27
---

突然想起来 windows 还有一个叫 Hyper-V 的虚拟化工具，然后就决定装一个 Archlinux 试一试。毕竟网上 Archlinux 吹好多的。

据说按照 wiki 就能装好了。看一下吧。

## 配置 Hyper-V
首先要打开 windows 的 Hyper-V 服务，打开控制面板 ->程序 ->启用或关闭 Windows 功能，把 Hyper-V 那一栏打上勾。然后也许要重启一下。

然后打开 Hyper-V 管理器，创建一个新服务器，右键添加虚拟交换机。创建新虚拟机，使用 *第一代* 虚拟机，不能使用第二代...... 插入 iso。开启虚拟机。

## 安装 Arch
在虚拟机上安装，最好的一点就是不怕搞坏硬盘......

按照 [wiki](https://wiki.archlinux.org/index.php/Installation_guide) 上的步骤来。键盘布局、连接网络、系统时间什么的都没改过，没遇到问题。

```sh
# 建立分区
## 查看
fdisk -l
## 建立（例子）
fdisk /dev/sda
### n 新分区，+xG 指定大小 xGB，w 写入磁盘
## 格式化
mkfs.ext4 /dev/sda1
## 挂载
mount /dev/sda1 /mnt

# 安装
## 选择镜像
vim /etc/pacman.d/mirrorlist
### move tsinghua mirror top
### error:signature from * is unknown trust
pacman -Sy archlinux-keyring
## 安装
pacstrap /mnt

# 配置
## fstab（硬盘 UUID 卷标）
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
echo matrix > /etc/hostname
## 网络没配置
## Root 密码
passwd

# 安装引导
## 第一代虚拟技术只支持 MBR
pacman -S grub
grub-install /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg

# 新建用户
## 新建 wheel 组用户 mickir
useradd -m -G wheel -s /bin/bash mickir
## 密码
passwd mickir
## 安装 sudo
pacman -S sudo
## 配置 sudo，uncomment wheel ALL(ALL)
visudo

# 安装 ssh
pacman -S openssh
systemctl start sshd

# 自动启动 dhcpcd 和 sshd
systemctl enable dhcpcd
systemctl enable sshd

# 忘记分 swap 分区了
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
还没有装图形界面。和普通 Linux 没有多大差别，到现在为止。

### 联网
```sh
# 静态 ip
ip a add 166.111.*.*/24 dev eth0
# 静态网关
ip r add default via 166.111.*.*
# 静态 dns
vim /etc/resolv.conf
## Add line:nameserver 8.8.8.8
# 临时禁用ipv6
echo 1>/proc/sys/net/ipv6/conf/<interface-name>/disable_ipv6
wifi-menu
elinks
```

### yaourt
```sh
# 添加 archlinuxcn 库
vim /etc/pacman.conf
## Add:
## [archlinuxcn]
## Server = http://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
pacman -Syu archlinuxcn-keyring
pacman -S yaourt
```

### 安装 shadowsocks
```sh
sudo pacman -S shadowsocks
# There is an example at /etc/shadowsocks/example.json
vim /etc/shadowsocks/config.json
# Use filename of the json file. Set autostart.
sudo systemctl enable shadowsocks@config
# Show log.
journalctl -u shadowsocks@vps.service
```

### 时间设置
```sh
## Network time servers
# sudo pacman -S ntp
# sudo systemctl enable ntpd

timedatectl set-local-rtc 0
# or: timedatectl set-local-rtc 0
timedatectl set-ntp 1
```

### 无外网连接
没有外网连接时 Hpyer-V 的虚拟交换机不能正确分配 ip，需要新建一个新的虚拟交换机，新建时选择仅内部网络。这样 Archlinux 就有 ipv6 的地址了。在宿主机配置网络和共享中心那里设置`vEthernet(inner)`的 ipv4 地址，同时在 Archlinux 里使用`sudo ip a add xx.xx.xx.xx/24 dev eth0`的方式设置静态 IP。这样虚拟机和宿主机又可以互连了。
