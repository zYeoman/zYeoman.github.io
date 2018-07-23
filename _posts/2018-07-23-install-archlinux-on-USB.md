---
layout: post
title: 在U盘上安装archlinux
category: 用
date: 2018-07-23 20:35 +0800
create: 2018-07-23 19:25:29 +0800
---

[来源1](https://www.cnblogs.com/askDing/p/5111352.html)

[来源2](https://www.jianshu.com/p/44daa17ed60c)

[Archlinux Wiki](https://wiki.archlinux.org/index.php/Installing_Arch_Linux_on_a_USB_key_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

## 分区
看了两篇文章，最后决定还是不去尝试GPT分区了。反正U盘只有64G，GPT没啥优势，还是用MBR（但是我那块酷比魔方平板只支持UEFI启动，因此还是要分EFI分区）

现在分区顺序不影响了，Windows会把MBR所有分区都识别出来，并提醒你ext4格式的分区需要格式化。
{: .notice}

```bash
# sudo su
# (sudo) fdisk /dev/sdx
# m for help
o # 新建MBR分区表
n # 新建EFI分区：Partition Number:[Enter] First Sector: [Enter] Last Sector: +128M
n # 新建`/`分区：Partition Number:[Enter] First Sector: [Enter] Last Sector: +20G
n # 新建普通U盘分区：Partition Number:[Enter] First Sector: [Enter] Last Sector: [Enter]
w # 保存并退出

ls /dev/sdx*
# /dev/sdx /dev/sdx1 /dev/sdx2 /dev/sdx3
# FAT32格式化EFI分区
# 需要安装 ntfs-3g 包
mkfs.fat -F 32 /dev/sdx1
# Fat32格式化用于普通U盘的分区
mkfs.fat -F 32 /dev/sdx3
# 根目录分区格式化为不带日志的EXT4
mkfs.ext4 -O "^has_journal" /dev/sdx2
# 挂载
mount /dev/sdx2 /mnt
mkdir -p /mnt/boot/efi
mount /dev/sdx1 /mnt/boot/efi
# 检查
df -h
```

注意：上面的所有`sdx`都要修改成实际值，例如`sdb`
{: .notice}

## 系统安装与配置
可以使用软件包[archlinux-install-scripts](https://www.archlinux.org/packages/?name=arch-install-scripts)很方便的安装系统。

```bash
# 安装系统
pacstrap -i /mnt base base-devel ntfs-3g # git vim tmux zsh htop openssh ...
```
大概要安装1G多一点文件，时长与U盘读写速度有关。

```bash
# 生成文件系统表
genfstab -U -p /mnt > /mnt/etc/fstab
# 进入新系统
arch-chroot /mnt
```

之后的过程基本上与[Archlinux安装记录](/blog/archlinux-install.html)差不多了，复制一下

```bash
## 时区
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
## Locale
vi /etc/locale.gen
### uncomment en_US,zh_CN
locale-gen
echo LANG=en_US.UTF-8 > /etc/locale.conf
## 主机名
echo Mercury > /etc/hostname
## 网络 使用wifi-menu配置wifi
pacman -S iw wpa_supplicant wireless_tools net-tools dialog
## Root 密码
passwd

# 编辑 /etc/mkinitcpio.conf ，检查 HOOKS 段， 让 block 参数紧挨着 udev 参数之后（早一点加载）
mkinitcpio -p linux
# 安装引导
pacman -S grub
grub-install --target=x86_64-efi --efi-directory=/mnt/boot/efi --bootloader-id=grub --removable --recheck
grub-mkconfig -o /boot/grub/grub.cfg
cp -v /usr/share/grub/{unicode.pf2,ascii.pf2} /boot/grub/
cp -v /usr/share/locale/en\@quot/LC_MESSAGES/grub.mo /boot/grub/locale/en.mo

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
```

### 启动
找台电脑，从U盘启动！试一试吧！

### 后续安装
参见我的另一篇[Archlinux on real PC](https://mickir.me/blog/archlinux-gui.html)
