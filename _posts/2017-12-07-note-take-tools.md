---
category: 器
create: '2017-12-07 13:34:17'
date: 2018-06-08 11:31:08 +0800
layout: post
tags:
  - 列表
title: 记笔记工具试用
---

乱七八糟地活了这么多年以后，还是想要有一个记笔记的工具来搞一搞。于是做了一下笔记工具调查，发现——都不太满意。

主要调查测试路径按照[AlternativeTo](https://alternativeto.net/software/evernote/)网站的内容，查询AlternativeToEvernote的方式来的。

![纸小墨](http://www.chole.io/assets/editor.png)

  但是貌似内测几年了就没发布过

* toc
{: toc}

## Evernote类
所谓Evernote类即很像evernote的一类记笔记工具，包括Evernote、OneNote、为知笔记、有道云笔记、LeanNote等等。这一类工具的特点都是大而全，基本包括了所有你需要的记笔记的需求。一大缺点就是无法定制，一些让人不爽快的地方也只能任由他让人不爽了。

我不用这一类的工具的一个原因是：收集资料太方便了。对，因为随便剪辑个网页是如此的方便，所以，就像Steam库存里那一堆吃灰的游戏一样，这些剪贴下来的网页也将会永久性地躺在笔记集里吃灰。:joy:

* EverNote：收费！不支持Markdown！太大！
* OneNote：挺好用的，之前一直用来做日记，但是后来发现日记这种东西还是应该手写。
  * 在网络不好的时候同步起来很慢。
  * 封闭的环境。
* 为知笔记：收费，但是可以本地离线运行。几年前用过，不是很好用的感觉。支持Markdown
  * 一个优点：可以编辑保存下来的Web页面
* 有道云笔记：有Web端。免费。
* StandardNotes：插件化的笔记工具（但是插件收费）。中文字体还是有问题。
* RedNoteBook：Linux风格的工具，所以丑啊。
* OpenNote: Self-host，以文件夹/文件的方式管理。我还不如直接用资源管理器呢...

## Markdown类
所谓Markdown类，其实就是支持或者仅仅支持Markdown的一类笔记记录工具的集合。

当然，有很多这样的工具实质上仅仅是Markdown编辑器而已，至于其他的可能需要Jekyll或者别的工具来展示。

* Jekyll-Editor：自动读取`<username>.github.io`repo里的`_posts`文件夹进行编辑的Chrome应用。如果没有1、读取不出之前创建的文件；2、新建文件的YAML无法自定义；这两个问题的话现在应该就是主力工具了。经过一定的[魔改](/blog/jekyll-editor-hack.html)以后解决了这两个问题。
* Typora：目前正在用的。所见即所得的Markdown编辑器（独一家），而且支持主题定制！只需要修改CSS就行了，真是可喜可贺可喜可贺。
* MarkText：又一个markdown编辑器，类似Typora，但是功能更不全。。。https://marktext.github.io/website/
* Sublime Text：编辑器，用来写Markdown但是没有一个很方便的实时预览是很难受的。
* VScode & Atom：编辑器，用nodejs写的那种，有预览，但是个人对nodejs写的东西有洁癖。
* vim：编辑器！某些情况很好用，但是很多情况不是很方便，例如插图什么的。
* Laverna：自带加密的Markdown Note工具。问题也出在自带加密上，我不想要自带加密。我只需要能在文件夹里看到的`.md`文件而已。因为最终的东西是想要放到Blog上的。
* SimpleNote：整体很好看，但是因为不能换主题和字体而抛弃了它。[#274](https://github.com/Automattic/simplenote-electron/issues/274) Github上的讨论。（中文宋体太丑了）
* Turtl：据说是加密版EverNote，但是我的Win10上显示错误。
* Yu Writer：一个专门的Markdown编辑工具，但是设计上有点奇怪。同样不支持主题定制，同样中文字体不是我想要的。不过可以通过Hack方法修改一下主题。
* 马克飞象：用于印象笔记的Markdown Chrome应用，曾经的主力，用来导出PDF写报告用的。现在看依然非常不错。
* [prose.io](http://prose.io/)：嗯，和Jekyll-Editor差不多，不过不是本地工具；也没有分栏预览。
* CMD Markdown：之前用过很长时间，挺好用的。但是文件之间的关系不清晰，和Jekyll存在`_post`里的markdown文件没什么区别。又不能处理本地文件，只好放弃了。
* BoostNote：说是适合程序员的Note工具，但是可惜的是不能编辑本地文件，或者说只能编辑他文件库里的东西。
* 小书匠：功能貌似很多，但是其实和上面的差不多。
* [Madoko](https://www.madoko.net/editor.html)：Microsoft Research出品，能直接导出类似论文排版的PDF，但是对中文支持需要一定的修改。
* mininote: self-hosted，没有亮点。

## Wiki类
* Cherrytree：丑！（Linux软件的特色）
* Zim：Python写的全平台wiki工具。丑。自己的一套语法。
* WikidPad：维基方式记笔记的工具。比较丑。

## Google Keep类
GoogleKeep类即一堆类似Google Keep的仅仅只能做小笔记整理的工具。

* Google Keep：偶尔用一下
* CintaNote：丑，并不会用。（虽然挺小的）
* EPIM：大而全的个人信息管理软件（包括待办事项、备忘录等等内容）。但是有点卡的。
* 方片收集：收集工具

## 总结

目前用的是Typora作为主要编辑器，vim用作修修补补，使用[魔改](/blog/jekyll-editor-hack.html)后的Jekyll Editor修改Blog，Onenote负责剪辑网页内容等（突发奇想貌似可以用ditto之类的工具来剪辑网页内容）。

- [vimwiki](https://github.com/vimwiki/vimwiki): 基于vim的wiki系统
