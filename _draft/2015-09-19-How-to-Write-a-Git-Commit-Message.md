---
layout: post
title: 怎样优雅地Git Commit
category: 用
tags:
  - 翻译
  - git
date: 2015-09-19 10:34:16 +0800
create: 2015-09-19
---

![haha](http://imgs.xkcd.com/comics/git_commit.png)

## 简介：为什么要有好的 Commit Messages

随机打开一个Git Repo的log记录，它的Commit Messages可能就（或多或少地）像翔一样。例如我（原作者）之前的一个[项目](https://github.com/spring-projects/spring-framework/commits/e5f4b49?author=cbeams)

```sh
$ git log --oneline -5 --author cbeams --before "Fri Mar 26 2009"

e5f4b49 Re-adding ConfigurationPostProcessorTests after its brief removal in r814. @Ignore-ing the testCglibClassesAreLoadedJustInTimeForEnhancement() method as it turns out this was one of the culprits in the recent build breakage. The classloader hacking causes subtle downstream effects, breaking unrelated tests. The test method is still useful, but should only be run on a manual basis to ensure CGLIB is not prematurely classloaded, and should not be run as part of the automated build.
2db0f12 fixed two build-breaking issues: + reverted ClassMetadataReadingVisitor to revision 794 + eliminated ConfigurationPostProcessorTests until further investigation determines why it causes downstream tests to fail (such as the seemingly unrelated ClassPathXmlApplicationContextTests)
147709f Tweaks to package-info.java files
22b25e0 Consolidated Util and MutableAnnotationUtils classes into existing AsmUtils
7f96f57 polishing
```

再与更近一点的Commit对比一下

```sh
$ git log --oneline -5 --author pwebb --before "Sat Aug 30 2014"

5ba3db6 Fix failing CompositePropertySourceTests
84564a0 Rework @PropertySource early parsing logic
e142fd1 Add tests for ImportSelector meta-data
887815f Update docbook dependency and generate epub
ac8326d Polish mockito usage
```

你更喜欢哪个？

前者长度和格式变化多端，而后者简洁一致；前者是默认的，后者则不可能是偶然现象。

虽然大部分Repo的log信息都像前者一样，但是，肯定有例外，比如牛逼的[Linux kernel](https://github.com/torvalds/linux/commits/master)或者[git](https://github.com/git/git/commits/master)本身就是非常好的例子。还有[Spring Boot](https://github.com/spring-projects/spring-boot/commits/master)，或者所有[Tim Pope](https://github.com/tpope/vim-pathogen/commits/master)管理的Repo。

所有以上Repo的贡献者们都知道，一个好的Commit Messages是最好的与共同开发者（甚至包括将来的他们自己）交流改动内容的方法。diff会告诉你什么改变了，但是只有Commit Message会告诉你为什么改变。Peter Hutterer[说得好](http://who-t.blogspot.co.at/2009/12/on-commit-messages.html)

> Re-establishing the context of a piece of code is wasteful. We can't avoid it completely, so our efforts should go to reducing it [as much] as possible. Commit messages can do exactly that and as a result, a commit message shows whether a developer is a good collaborator.

> 重新明确一小段代码的语境与目的是非常浪费时间的，但是我们不可能完全避免掉它，因此我们应该尽可能地去减少它。Commit Message就是这样的工具，并且同时Commit Message会告诉你一个开发者是不是一个好的合作者。

如果你还没有思考过怎么样才能写出好的Commit Message，那么可能你还没有花太多时间在`git log`和相关命令上。这儿有一个恶性循环，因为提交历史是无组织而混乱的，那么就不会花太多时间去使用或者关心它；正因为不会花太多时间关心和使用它，它就会依旧是无组织并且混乱的。

但是一个好的log是优美而有用的。`git blame`, `revert`, `rebase`, `log`, `shortlog`, 和其他`git`命令有了作用。审查他人的Commits和提交改动(PR)成了值得做的事情，并且可以独自完成。理解几个月甚至几年前为什么如此改动变成了有可能并且有效用的事。

一个长期项目依靠它的可维护性成功，项目历史(log)是维护人员最有效的工具之一。学习怎样恰当地维护Commits是值得的，一开始这可能令人烦恼，慢慢地这会变成习惯，最终这将令人自豪，并使你在任何复杂状况下保持生产力。

在这篇文章中，我将只讨论保持一个优雅的Commit History的最基本的要素：怎样写一个独特的Commit Message。有很多其他的我不会提到的重要的练习，也许我可能在将来继续介绍。

大部分编程语言都有很好的使用习惯的约定，比如命名和缩进和其他的一切。当然有多种多样约定，但是大多数开发者都认为选择并且遵守其中一个会比每个人各行其是导致的混乱好很多。

一个团队的Commit log不应该是不同的。要建立一个有用的版本历史，在Commit格式上团队首先要约定至少一下三件事：

**风格**。 句式，空格，语法，标点等等。将这一切定下来，删除臆测的写法，并让一切足够简单。这样产生的将是优雅一致，可读易读的log。

**内容**。 Commit Message的内容（如果有）应该包含什么信息，*不*应该包含什么信息？

**元数据**。 怎样引用Issue ID，pull request number等元数据？

幸运地是，已经有了很好的写git commit message的惯例约定。当然，他们中很多都是被git命令行功能实现了。你不需要重复造轮子，只有遵守以下七条原则然后像大牛一样commit吧。

## 优雅commit message 的七条准则

> 注意：[这些](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)[都](http://www.git-scm.com/book/en/Distributed-Git-Contributing-to-a-Project#Commit-Guidelines)[是](https://github.com/torvalds/subsurface/blob/master/README#L82-109)[早](http://who-t.blogspot.co.at/2009/12/on-commit-messages.html)[就有](https://github.com/erlang/otp/wiki/writing-good-commit-messages)[的](https://github.com/spring-projects/spring-framework/blob/30bce7/CONTRIBUTING.md#format-commit-messages)！

1. 分隔题目与内容
2. 限制标题宽度为50字符
3. 大写标题行（对汉语没有用啊）
4. 不用句号结束标题
5. 使用命令模式
6. 限制内容宽度每72字符换行
7. 解释做了什么和为什么做而非怎样做的

### 1. 分隔题目与内容
在`git commit` 帮助页面里：
>Though not required, it's a good idea to begin the commit message with a single short (less than 50 character) line summarizing the change, followed by a blank line and then a more thorough description. The text up to the first blank line in a commit message is treated as the commit title, and that title is used throughout Git. For example, git-format-patch(1) turns a commit into email, and it uses the title on the Subject line and the rest of the commit in the body.

>即使没有要求，在commit message前加上一段单独的（少于50单词）行来概括修改，其后接一个空行和一个更全面的解释会更好。在commit message第一个空行之上的文字将被视为标题，同时标题会在整个Git中使用。例如，git-format-patch(1)将一个commit变成email，同时它会使用标题作为email主题，其他的作为email内容。

首先，不是所有的commit都需要有标题和内容两部分。有时简单的一行就足够了，特别是当改动简单到毋庸赘述的时候。例如：

```
Fix type in introduction to user guide
```

不需要说更多了，如果读者想知道tyoe是啥，他可以自己看，例如使用`git show` 或 `git diff` 或 `git log -p`。

如果在命令行commit的话，你可以很简单地用`git commit`的`-m`选项

```sh
$ git commit -m"Fix typo in introduction to user guide"
```

当然，如果commit值得一点解释的话，你需要写内容行，比如

```
Derezz the master control program

MCP turned out to be evil and had become intent on world domination.
This commit throws Tron's disc into MCP (causing its deresolution)
and turns it back into a chess game.
```

在这里使用使用`-m`选项是不合适的，你需要一个编辑器。如果你的确没有一个在命令行用于git的编辑器的话，看[这里](http://git-scm.com/book/ch7-1.html#Basic-Client-Configuration)。

在任何情况下阅读log时，在标题和内容间加空格都是有意义的。这是log的全部输出

```sh
$ git log
commit 42e769bdf4894310333942ffc5a15151222a87be
Author: Kevin Flynn <kevin@flynnsarcade.com>
Date:   Fri Jan 01 00:00:00 1982 -0200

 Derezz the master control program

 MCP turned out to be evil and had become intent on world domination.
 This commit throws Tron's disc into MCP (causing its deresolution)
 and turns it back into a chess game.
```

然后使用`git log --oneling`，这将只显示标题行

```sh
$ git log --oneline
42e769 Derezz the master control program
```

或者使用`git shortlog`，这将将commits按用户分组，同时只显示标题行

```sh
$ git shortlog
Kevin Flynn (1):
      Derezz the master control program

Alan Bradley (1):
      Introduce security program "Tron"

Ed Dillinger (3):
      Rename chess program to "MCP"
      Modify chess program
      Upgrade chess program

Walter Gibbs (1):
      Introduce protoype chess program
```

在git中有非常多的能够区分标题与内容的情况，但是没有一种能够恰当地处理两者之间无空行的情况。

### 2. 限制标题宽度为50字符
50字符不是很严格的要求，而只是一个简单规则。使标题行只有这么长能够很好地保证可读性，同时能够强迫作者思考如何准确描述改动。

> Tips:如果你难以概括你的改动，那么可能你一下子提交了太多改动。努力做到[atomic commits](http://www.freshconsulting.com/atomic-commits/)（关于如何分离改动）吧

> [原子化你的commits](/blog/2015/09/Keep-Your-Commits-Atomic.html)

GitHub的UI会在你的提交超过50字符的时候显示warning。并且会用省略号把任何长于69字符的标题行截断

因此尽可能少于50字符并且不要多于69字符。


### 3. 大写标题行
很简单。

### 4. 不用句号结束标题
在标题行中句号是无用的，同时也是多余的。

### 5. 使用命令模式
命令模式在英语中就是祈使句。以动词开头，例如
* 清理房间
* 关门
* 倒垃圾

这七条规则也是按照命令模式写的。

因为命令模式可能听起来很不礼貌，我们不常用它。但是对于git commit 的标题句来说命令模式是完美的。一个原因是**git本身使用命令模式**

例如使用`git merge`的默认输出为

```
Merge branch 'myfeature'
```

而`git revert`为

```
Revert "Add the thing with the stuff"

This reverts commit cc87791524aedd593cff5a74532befe7ab69ce9d.
```

因此当你用命令模式书写你的Commit Message时，你正遵守着git自身内建的规范。


### 6. 限制内容宽度每72字符换行
Git不会自动换行。当你书写你的commit message时，注意换行。

推荐行宽度为72个字符，这样git就有足够空间处理缩进使所有字符串短于80个字符。

好的文本编辑器可以帮助你换行。例如，你可以很简单地配置Vim，让它在你书写Message时以72个字符宽度自动换行。而IDE，一般都不会提供这么好的便利（即使最近IntelliJ IDEA做得[更](http://youtrack.jetbrains.com/issue/IDEA-53615)[好](http://youtrack.jetbrains.com/issue/IDEA-53615#comment=27-448299)[了](http://youtrack.jetbrains.com/issue/IDEA-53615#comment=27-446912)）

### 7. 解释做了什么和为什么做而非怎样做的
这个[Bitcoin Core](https://github.com/bitcoin/bitcoin/commit/eb0b56b19017ab5c16c745e6da39c53126924ed6)(比特币)的commit是一个很好的例子。

```
commit eb0b56b19017ab5c16c745e6da39c53126924ed6
Author: Pieter Wuille <pieter.wuille@gmail.com>
Date:   Fri Aug 1 22:57:55 2014 +0200

   Simplify serialize.h's exception handling

   Remove the 'state' and 'exceptmask' from serialize.h's stream
   implementations, as well as related methods.

   As exceptmask always included 'failbit', and setstate was always
   called with bits = failbit, all it did was immediately raise an
   exception. Get rid of those variables, and replace the setstate
   with direct exception throwing (which also removes some dead
   code).

   As a result, good() is never reached after a failure (there are
   only 2 calls, one of which is in tests), and can just be replaced
   by !eof().

   fail(), clear(n) and exceptions() are just never called. Delete
   them.
```

看一下所有的diff，考虑一下作者花时间提供背景知识节约了多少同伴或者未来的提交者们的时间。

大多数情况，你可以丢下改变的细节，代码会自己解释的（如果代码太复杂并且需要解释的话，那是注释的事）。只要专注于弄清楚做出改变的原因——在改变之前的运行方式（和有什么问题）以及现在的运行方式和你为什么这样解决问题。

未来的维护人员（有可能是你）会感谢你的！

## Tips

### 抛开IDE，爱上命令行
已经有git命令了，拥抱命令行吧！Git已经不可思议地强了；IDE同样强大但是两者是不一样的。我每天用IDE(IntelliJ IDEA)和其他可扩展的编辑器(Eclipse)，但是我没有见过比（一旦知道了）命令行强大和简单的整合了Git的IDE。

某些与GIT有关的IDE功能是无价的，比如`git rm`。而当你使用IDE来commit, merge, rebase时一切都被割裂了。

唯一能发挥Git所有力量的方法就是使用命令行。

记住无论你是用Bash还是Z-shell，都有自动补全。

### 阅读Pro Git
[Pro Git](http://git-scm.com/book)是一本免费的优秀的Git书籍。（有中文版）

-----
[翻译](http://chris.beams.io/posts/git-commit/)
