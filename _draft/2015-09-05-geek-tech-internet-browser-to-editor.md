---
layout: post
title: 奇技淫巧之浏览器变身编辑器
category: 法
tags:
  - 转载
  - javascript
  - 奇技淫巧
date: 2015-09-05 11:38:10 +0800
create: 2015-09-05
---

注：转自Textarea[奇技淫巧之浏览器秒秒钟变编辑器](https://www.textarea.com/voidy/qijiyinqiao-zhi-liulanqi-miao-miaozhong-bian-bianjiqi-79/)

英文原文在[这里](https://coderwall.com/p/lhsrcq/one-line-browser-notepad)

PS:这个好有意思啊，值得好好研究一下。

## 由来

有时，我仅仅想输入一些乱码。仅仅想放空自己。用编辑器来输入这些胡言乱语会使我很苦恼，因为这样会弄乱我项目的工作区。（我很挑剔，我懂得）

所以我就这么做。自从我生活在有浏览器的地方，我就只需打开新的标签，然后在地址栏里输入下面的内容：

```html
data:text/html, &lt;html contenteditable&gt;
```

瞧，浏览器记事本。

<!-- more -->

## 为什么代码会有效

你不需要记住它。它不是rocket science（哈哈，这里不是火箭科学，更不是那部电影，此处指艰深的学问以及复杂伤身的工作）。我们正在使用[数据URI格式(Data URI's format)](http://www.nczonline.net/blog/2009/10/27/data-uris-explained/)并且告诉浏览器对html进行渲染(尝试一下`javascript:alert('Bazinga');`)。html所说的内容是一种带有HTML的contenteditable（内容可编辑）的属性的HTML line。这仅仅在能识别这种属性的现代的浏览器上是有效的。点击编辑吧！

以上就是翻译的全部内容，原文戳[这里](https://coderwall.com/p/lhsrcq/one-line-browser-notepad)

    转载注：原文里貌似同样有以下的内容，并且更多的样子

效果图：

![](https://www.textarea.com/_image/1edacf59968dc9b49f05cfa2880c63ed.png)


## More

在作者发布这个消息之后，有很多的大神开始开动脑筋，绞尽脑汁，开始创作了各种碉堡的浏览器编辑器。下面这一款我比较喜欢的：

```html
data:text/html, &lt;style type="text/css"&gt;.e{position:absolute;top:0;right:0;bottom:0;left:0;}&lt;/style&gt;&lt;div class="e" id="editor"&gt;&lt;/div&gt;&lt;script src="http://d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js" type="text/javascript" charset="utf-8"&gt;&lt;/script&gt;&lt;script&gt;var e=ace.edit("editor");e.setTheme("ace/theme/monokai");e.getSession().setMode("ace/mode/java");&lt;/script&gt;
```

效果出众，最重要的是支持多种语言想用其它的语言的话，仅仅需要把`ace/mode/python`用下面的换掉即可：

```html
Markdown -&gt; `ace/mode/markdown`
Python -&gt; `ace/mode/ruby`
C/C++ -&gt; `ace/mode/c_cpp`
Javscript -&gt; `ace/mode/javascript`
Java -&gt; `ace/mode/java`
Scala- -&gt; `ace/mode/scala`
CoffeeScript -&gt; `ace/mode/coffee`
and
css, html, php, latex,
tex, sh, sql, lua, clojure, dart, typescript, go, groovy, json, jsp, less, lisp,
lucene, perl, powershell, scss, textile, xml, yaml, xquery, liquid, diff and many more...
```

更碉堡的是，主题也可以换的，仅仅把`ace/theme/monokai`用下面的换掉即可

```html
Eclipse -&gt; ace/theme/eclipse
GitHub -&gt; ace/theme/github
TextMate -&gt; ace/theme/textmate
and
ambiance, dawn, chaos, chrome, dreamweaver, xcode, vibrant_ink, solarized_dark, solarized_light, tomorrow, tomorrow_night, tomorrow_night_blue,
twilight, tomorrow_night_eighties, pastel_on_dark and many more..
```

如果你想用Markdown的话用下面的代码即可

```html
data:text/html,&lt;style type="text/css"&gt;.e{position:absolute;top:0;right:50%;bottom:0;left:0;} .c{position:absolute;overflow:auto;top:0;right:0;bottom:0;left:50%;}&lt;/style&gt;&lt;div class="e" id="editor"&gt;&lt;/div&gt;&lt;div class="c"&gt;&lt;/div&gt;&lt;script src="http://d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js" type="text/javascript" charset="utf-8"&gt;&lt;/script&gt;&lt;script src="http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"&gt;&lt;/script&gt;&lt;script&gt; function showResult(e){consoleEl.innerHTML=e}var e=ace.edit("editor");e.setTheme("ace/theme/monokai");e.getSession().setMode("ace/mode/markdown");var consoleEl=document.getElementsByClassName("c")[0];var converter=new Showdown.converter;e.commands.addCommand({name:"markdown",bindKey:{win:"Ctrl-M",mac:"Command-M"},exec:function(t){var n=e.getSession().getMode().$id;if(n=="ace/mode/markdown"){showResult(converter.makeHtml(t.getValue()))}},readOnly:true})&lt;/script&gt;
```

还有一个比较好玩的，是一个在编辑过程中会变色的，大家可以试试：

```html
data:text/html, &lt;html&gt;&lt;head&gt;&lt;link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'&gt;&lt;style type="text/css"&gt; html { font-family: "Open Sans" } * { -webkit-transition: all linear 1s; }&lt;/style&gt;&lt;script&gt;window.onload=function(){var e=false;var t=0;setInterval(function(){if(!e){t=Math.round(Math.max(0,t-Math.max(t/3,1)))}var n=(255-t*2).toString(16);document.body.style.backgroundColor="#ff"+n+""+n},1e3);var n=null;document.onkeydown=function(){t=Math.min(128,t+2);e=true;clearTimeout(n);n=setTimeout(function(){e=false},1500)}}&lt;/script&gt;&lt;/head&gt;&lt;body contenteditable style="font-size:2rem;line-height:1.4;max-width:60rem;margin:0 auto;padding:4rem;"&gt;
```

另外我已经将代码放在github上了，欢迎Fork。[浏览器-编辑器](https://github.com/Voidly/browser-notepad)

最后附上一张Python编辑器的图：

![](https://www.textarea.com/_image/f33a8f957e298ff42ccdd0a2f0b968a5.png)
