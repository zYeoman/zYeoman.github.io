---
layout: post
title: Archlinux on real PC
category: 知识库
date: 2017-03-07
---

在 Windows 里的虚拟机装了 archlinux，到了实验室开始正式使用实体机上的 archlinux，使用 i3 作为窗口管理器，遇到了很多坑。

## 与 Windows 共存

### MBR
首先进入 GRUB 页面（即启动项选择页面按 c），执行
```
grub> ls -l # Get Windows boot 分区
grub> set root (hd0,msdos1) # For example
grub> chainloader +1 # Pass control to Windows boot loader
grub> boot
```

知道了 Windows 的启动分区以后就可以修改 GRUB 启动设置了。

```
# /boot/grub/grub.cfg

### BEGIN /etc/grub.d/30...###
menuentry 'Windows' {
    insmod part_msdos
    insmod ntfs
    set root='(hd0,msdos1)'
    chainloader +1
}
### END ....  ###
```

### UEFI
相比于MBR，UEFI整整难上了一个等级。也遇到了不少的坑。我的安装方式是直接空白磁盘安装Win10解决UEFI分区等问题，然后再安装archlinux做grub多重启动。

注意必须在BIOS里把Secure Boot给关掉！

安装时候选择 `UEFI ***` 的选项。不然会出现`UEFI varible not found`问题。

```sh
arch-chroot /mnt /bin/bash
mkdir /boot/efi
# EFI 分区在/dev/sda2
mount /dev/sda2 /boot/efi
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=arch_grub --boot-directory=/boot/efi/EFI --recheck
cp /boot/efi/EFI/arch_grub/grubx64.efi /boot/efi/shellx64.efi
grub-mkconfig -o <boot-directory>/grub/grub.cfg
# Windows
grub-probe --target=fs_uuid /boot/efi/EFI/Microsoft/Boot/bootmgfw.efi
# Output: 1ce5-7f28
grub-probe --target=hints_string /boot/efi/EFI/Microsoft/Boot/bootmgfw.efi
# Output: --hint-bios=hd0,gpt1 --hint-efi=hd0,gpt1 --hint-baremetal=ahci0,gpt1
# Add this code to /boot/efi/EFI/grub/grub.cfg
# menuentry "Microsoft Windows x86_64 UEFI-GPT" {
#    insmod part_gpt
#    insmod fat
#    insmod search_fs_uuid
#    insmod chain
#    search --fs-uuid --no-floppy --set=root --hint-bios=hd0,gpt1 --hint-efi=hd0,gpt1 --hint-baremetal=ahci0,gpt1 1ce5-7f28
#    chainloader /efi/Microsoft/Boot/bootmgfw.efi
# }
```

## 网络
使用`wifi-menu`连接无线网络。连接以后会自动产生配置文件。

```sh
systemctl enable netctl-auto@<interface>.service
```

配置自动联网。

螺母楼网络很诡异，使用dhcpcd会只获得ipv6地址，并且ipv6速度大约就是几KB/s，另外使用dhclient可以获得ipv4的地址，但是如果禁用dhcpcd自启动，改为手动启动貌似速度就快了？为什么啊！！！

### 可能的网络问题

* router设置问题：没有router或者router不对导致ipv6速度非常慢
* 没有获取到ip
* DNS配置问题
* 玄学：罗姆楼的网络主要依靠玄学，打开dhclient/dhcpcd/NetworkManager试试吧。
* 现在螺母楼已经不给我的电脑ipv6地址了，no router。不知道为什么。

## 窗口管理器
使用 i3 作为窗口管理器。

### 多显示器
`sudo pacman -S arandr` 使用 arandr 图形化配置显示器相对位置。

### 安装
```sh
yaourt -S i3-gaps i3lock i3status compton dmenu feh py3status xterm xorg xorg-xinit
```

其中 i3-gaps 是 i3 窗口管理器，i3lock 是锁屏工具，compton 用于窗口透明化、窗口动画等，feh 设置桌面背景，py3status 设置状态栏显示，xterm 为 Xorg 桌面终端模拟。

```sh
# font
yaourt -S wqy-microhei wqy-microhei-lite wqy-zenhei ttf-arphic-ukai ttf-arphic-uming adobe-source-han-sans-cn-fonts ttf-vista-fonts noto-fonts-emoji nodejs-emojione emojione-color-font ttf-google-fonts-git
```

### 配置
一共需要配置`.xinitrc`、`.config/i3/config`、`.i3status.conf`、`.zprofile`、`.Xresources`、`.compton.conf`等文件

```sh
# .xinitrc
# 打开 xorg 自动运行 i3
export LANG=zh_CN.UTF-8
export LANGUAGE=zh_CN:en_US
export LC_CTYPE=en_US.UTF-8

export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx

exec i3
```

```sh
# .zprofile
# shell 登录后自动运行 X
if [ -z "$TMUX" ] && [ -z "$DISPLAY" ] && [ -n "$XDG_VTNR" ] && [ "$XDG_VTNR" -eq 1 ]; then
  exec startx
fi
```

```sh
# .config/i3/config
# ...
# Last
# Start i3bar to display a workspace bar (plus the system information i3status
# finds out, if available)
#=============== 状态栏 ===============
bindsym $mod+m bar mode toggle
bar {
    i3bar_command i3bar -t
#    status_command i3status
    status_command py3status
    position bottom
    modifier Shift
    separator_symbol " | "

    colors {
        background #000000CC
        #statusline #000000FF
        separator #B8F788
        focused_workspace  #B8F788 #000000AA
        active_workspace   #FFFFFF #FFFFFFAA
        inactive_workspace #AAAAAA #000000AA #AAAAAA
        urgent_workspace   #E57B85 #000000AA
    }
}

#=============== 系统命令 ===============
set $mode_system  注销 (O) 关机 (S) 重启 (R) 取消 (Esc)
bindsym $mod+shift+q mode "$mode_system"
mode "$mode_system" {
    bindsym o exec i3-msg exit
    bindsym s exec systemctl poweroff
    bindsym r exec systemctl reboot
    bindsym Escape mode "default"
}
# Set lock png
bindsym Mod1+Shift+l exec --no-startup-id i3lock -i '/home/mickir/.lock.png'
# Set background jpg
exec_always --no-startup-id feh --bg-fill /home/mickir/.lock.jpg
exec i3-config-wizard
exec --no-startup-id compton -b
# Start fcitx
exec fcitx
```

## 输入法

### 安装
```sh
yaourt -S fcitx fcitx-configtool fcitx-im fcitx-cloudpinyin fcitx-sogoupinyin
```

### 问题
如果遇到输入栏黑色框是 compton 没开，阴影透明框是 compton 配置加的可以去掉，自行 google。

## 其他
### 文件管理器
```sh
yaourt -S thunar
```

```sh
# shell 的文件管理
yaourt -S ranger
```

### 浏览器
```sh
yaourt -S google-chrome
```

### PDF 阅读
```sh
yaourt -S zathura zathura-pdf-poppler
```

### 声音
```sh
yaourt -S pamixer alsa-utils alsa-plugins
```

使用 `alsamixer` 配置声音

## Ref
* [Archlinux 搭建高效便捷的平铺式桌面](https://segmentfault.com/a/1190000008280278)
* [Archlinux wiki](https://wiki.archlinux.org)
