---
title: 'Jekyll Editor Hack记录'
layout: post
tags:
  - Jekyll
  - 编辑器
date: '2017-12-08T17:02:36.690Z'
create: '2017-12-08T10:02:36.690Z'
category: 工具
---
找到一个很好用的Jekyll Blog编辑工具，[Jekyll Editor](https://chrome.google.com/webstore/detail/jekyll-editor/dfdkgbhjmllemfblfoohhehdigokocme)。虽然好用，但是有几点不喜欢的地方，因此试图去Hack一下修改掉不喜欢的部分。:smile:

- TOC
{:toc}

## 提前准备
找到Jekyll Editor在Chrome里的扩展源文件所在地。有两种方法：

1. 扩展程序[Extension Source Locator](https://chrome.google.com/webstore/detail/extension-source-locator/cmhbfegjgncgaikpopenldnaidbhdopp)
2. 直接搜索。https://chrome.google.com/webstore/detail/jekyll-editor/dfdkgbhjmllemfblfoohhehdigokocme 后面的一串字符就是应用ID，直接用Everything搜索即可定位到应用位置。

## 文件列表不显示问题
![调试位置](https://i.loli.net/2017/12/08/5a2a4a9615ae8.png)
{: .align-right}

打开 chrome://extensions 开启开发者模式，然后找到Jekyll Editor，点击检查视图中的`index.html`即可打开Chrome的调试窗口。

然后最终定位到问题文件`post.js`，从Github获取markdown文件是没有丝毫问题的，但是在如下代码进行`parse`时出现了问题，因为我的`_posts`里头有一个用于vim编辑作用的`ed.py`，而这个文件自然是没有YAML头的。因此`parse`出现了问题，然后结果就是显示不出文件列表（在这里直接ERROR了）。

```javascript
  parse: function(rawContent) {
    var mt;
    //get the yaml matters
    var patt = /---([\s\S]*?)---(\r\n|\n)([\s\S]*)/;
    var res = rawContent.match(patt);
    mt = {};
    mt['meta'] = YAML.parse(res[1]);
    mt['content'] = res[3];
    if (mt.meta.published === undefined || mt.meta.published === null) {
      mt.meta.published = true;
    }
    return mt;
  }
```

一个比较丑陋的解决方案是直接在这里加一个判断，如果正则没有匹配的话就直接手动生成一个`mt`出来（毕竟我不可能手贱地去修改`ed.py`这类东西）

将上面的代码改成下面这样

```javascript
  parse: function(rawContent) {
    var mt;
    //get the yaml matters
    var patt = /---([\s\S]*?)---(\r\n|\n)([\s\S]*)/;
    var res = rawContent.match(patt);
    mt = {};
    try {
      mt['meta'] = YAML.parse(res[1]);
      mt['content'] = res[3];
      if (mt.meta.published === undefined || mt.meta.published === null) {
        mt.meta.published = true;
      }
    }
    catch(e) {
      mt['meta'] = {'date':'now','slug':'noting'};
      mt['content']='';
      mt.meta.published = true;
    }
    return mt;
  }
```

另外一个解决方案就是我抛弃我的`ed.py`全面拥抱Jekyll Editor或者把我的`ed.py`移出去。(这也是我的最终解决方法:joy:)
{: .notice}

## YAML头部内容hack
这个也是在`post.js`里就能完成的。在`post.js`里有与Post有关的所有函数，包括如下几个函数：
1. `parse`：处理从Github同步过来的`.md`文件。主要把YAML头变成JS对象，获得文件内容。
2. `dump`：将YAML头变为字符串再加上文件内容，返回文件的全部内容。
3. `new`：新建文件。主要是新建YAML头。
4. `sync`：从Github中同步`_posts`文件夹所有文件。
5. `_fetchPost`和`_sortPost`：功能函数，没什么用。
所以大概修改一下`new`函数和`dump`函数就差不多了。

在`new`函数里添加我需要的`create`字段，在`dump`函数里存储时重新生成`date`（修改时间）字段。

## 主题修改
现在的主题还算不错其实。剩下的主要是工具栏添加了一个切换两栏模式的按钮(参见[Editor.md](https://pandao.github.io/editor.md/))，其次是添加了单栏模式的一些CSS。

```css
<style type="text/css">
.CodeMirror-scroll {
    padding-bottom: 40em;
    margin: auto;
    max-width: 1000px;
}
.CodeMirror-scroll::-webkit-scrollbar {
    display: none;
}

.CodeMirror-gutters {
    background-color: unset;
}
</style>
```
