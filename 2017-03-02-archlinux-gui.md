---
layout: post
title: Archlinux on real PC
category: 知识库
date: 2017-03-02
---

在 Windows 里的虚拟机装了 archlinux，到了实验室开始正式使用实体机上的 archlinux，使用 i3 作为窗口管理器，遇到了很多坑。

## 与 Windows 共存
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

## 窗口管理器
使用 i3 作为窗口管理器。

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
