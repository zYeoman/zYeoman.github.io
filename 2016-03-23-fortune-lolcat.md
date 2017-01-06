---
layout: post
title: fortune|lolcat -s 64
category: 奇技淫巧
date: 2017-01-06 18:38:30
---

每天一句格言警句。

<!-- more -->
2016-03-29 Update:

* 中文: `sudo apt-get install fortune-zh`
* 中文cowsay: [fortune](http://fosschef.com/2011/01/trick-of-fortune-for-linux-mint/)
修改`/usr/games/cowsay`

```perl
sub construct_balloon {
    my $max = &maxlength(@message);
    my $max2 = $max + 2;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ## border space fudge.

    ######## hack for Chinese ########
    $max2 = $max2*2 > 78 ? 78 : $max2 * 2;

    my $format = "%s %-${max}s %s\n";
    my @border; ## up-left, up-right, down-left, down-right, left, right
    if ($0 =~ /think/i) {
        $thoughts = 'o';
        @border = qw[ ( ) ( ) ( ) ];
    } elsif (@message < 2) {
        $thoughts = '\\';
        @border = qw[ < > ];
    } else {
        $thoughts = '\\';
        if ($V and $V gt v5.6.0) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Thanks, perldelta.
            @border = qw[ / \\ \\ / | | ];
        } else {
            @border = qw[ / \ \ / | | ];
        }
    }

    ######## hack for Chinese ########
    @border = qw[];

## no trailing spaces (#276144)
    push(@balloon_lines,
        " " . ("_" x $max2) . "\n" ,
        sprintf($format, $border[0], $message[0], $border[1]),
        (@message < 2 ? "" :
            map { sprintf($format, $border[4], $_, $border[5]) }
            &nbsp; &nbsp; @message[1 .. $#message - 1]),
        (@message < 2 ? "" :
&nbsp; &nbsp;&nbsp;        sprintf($format, $border[2], $message[$#message], $border[3])),
        " " . ("-" x $max2) . "\n"
    );
}
```


在[CommandLineFu.com](http://www.commandlinefu.com/commands/view/15925/bash-lolcat-a-s-250)上看到的这样一个命令

```
bash|lolcat -a -s 250
```

这个命令的效果大概是把终端里所有的输出都"彩色化"，例如

![效果图1](http://7xkunb.com1.z0.glb.clouddn.com/markdown/1458732915816.png)

然后回复里有有人Post了一条更有趣的(上面那一个没什么意思感觉)命令

```
fortune | cowsay -f tux | lolcat -s 64
```

其中fortune是一个随机格言的命令，cowsay产生一个字符画(牛)与对话框，然后lolcat搞出颜色。效果如下

![效果图2](http://7xkunb.com1.z0.glb.clouddn.com/markdown/1458733086462.png)

因为不知道fortune的功能，Google之，于是发现了阮一峰的[这个](http://www.ruanyifeng.com/blog/2015/04/fortune.html)可以使fortune产生的随机内容变成中文内容。

当然，貌似在ubuntu可以直接安装`fortune-zh`来获取中文内容

但是这样cowsay就会有bug，因为中文字符占两格，而对话框宽度是按照字符数算的，所以排版就没了！因此最终还是这样:

```
fortune | lolcat -s 64
```

即可。

还可以在`~/.bashrc`或者`~/.zshrc`上末尾添加这样的句子，每次启动shell窗口都显示一句格言。

```sh
echo
echo "=============== Quote Of The Day ==============="
echo
fortune|lolcat -s 64
echo
echo "================================================"
echo
```
