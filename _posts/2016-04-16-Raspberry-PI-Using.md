---
layout: post
title: Raspberry PI Using
category: 器
tags:
  - 原创
  - 配置
  - linux
date: 2016-04-16 13:25:34
create: 2016-04-16
---

<!-- more -->

## 工具

```shell
sudo apt-get install git zsh tmux vim python-dev python-pip
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
curl https://j.mp/spf13-vim3 -L > spf13-vim.sh && sh spf13-vim.sh
```

## 网络

### 登录

```shell
git clone https://github.com/zYeoman/thu.git
sudo ln thu/run /usr/bin/thu
# usage:
#     thu net [login/logout]
#     thu usereg [ipdown]
```

### 支持IPV6

```shell
vi /etc/modprobe.d/ipv6.conf
```

注释掉alias net-pf-10 off
开启alias ipv6 on

```shell
reboot
```

### 发送IP

```python
#!/usr/bin/env python
#-*-coding:utf-8-*-

import socket
import time
import smtplib
import urllib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# 发送邮件
# smtp服务器地址 邮箱用户名 邮箱密码 发件人地址 收件人地址(列表) 邮件主题 内容


def sendEmail(smtpserver, username, password, sender, receiver, subject, msghtml):
    msgRoot = MIMEMultipart('related')
    msgRoot["To"] = ','.join(receiver)
    msgRoot["From"] = sender
    msgRoot["subject"] = subject
    msgText = MIMEText(msghtml, 'html', 'utr-8')
    msgRoot.attach(msgText)

    smtp = smtplib.SMTP()
    smtp.connect(smtpserver)
    smtp.login(username, password)
    smtp.sendmail(sender, receiver, msgRoot.as_string())
    smtp.quit()

# 检查网络连通性


def checkNet():
    i = 0
    while True:
        try:
            outip = urllib.urlopen('https://api.ipify.org/').read()
            print("Network is Ready")
            break
            if i > 10:
                break
            else:
                i += 1
        except Exception as e:
            print(e)
            print("Network is not ready, Sleep 5s....")
            time.sleep(5)
            return None
    return outip

# 获得ip地址


def getAddress():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(("1.1.1.1", 80))
    ipaddr = s.getsockname()[0]
    s.close()
    return ipaddr

if __name__ == '__main__':
    outip = checkNet()
    if outip:
        message = "out ip address: %s \n" % outip
    ipaddr = getAddress()
    email_addr = ''
    smtp_addr = ''
    message += ipaddr
    sendEmail(smtp_addr, email_addr, '', email_addr,
              ['@163.com'], 'IP Address Of Pi', message)
```

开机自动运行: 修改`/etc/rc.local`

### Shadowsocks

```shell
sudo pip install shadowsocks
sslocal -c config.json
```

```json
{
    "server":"",
    "server_port":,
    "local_address":"127.0.0.1",
    "local_port":1080,
    "password":"",
    "method":""
}
```

### Proxychains

```shell
# sudo apt-get install proxychains
# 上面是proxychains3
git clone https://github.com/rofl0r/proxychains-ng
cd proxychains-ng
./configure --prefix=/usr --sysconfdir=/etc
make
sudo make install
sudo make install-conf
alias p=proxychains4
vi /etc/proxychains.conf
```

最后一行改为

```shell
socks5 127.0.0.1 1080
```

## 聊天机器人

### 微信

```shell
apt-get install libxml2-dev libxslt1-dev python-dev
pip install requests qrcode lxml requests_toolbelt coloredlogs
git clone https://github.com/Urinx/WeixinBot
```

