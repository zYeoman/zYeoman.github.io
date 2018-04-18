---
layout: post
title: 测试
category: 杂
tags:
  - 原创
  - 测试
date: 2018-04-18 16:21:34 +0800
create: 2015-08-03
---

这是一个测试页面

- TOC
{:toc}

## 副标题

* 列表 1[^1]
  * 1.1
  * 1.2
    * 1.2.1
* 列表 2

有序列表不支持嵌套
{: .notice--warning}

1. 有序列表 1
2. 有序列表 2

使用无序列表，通过添加{: .list}类标识的方式实现有序列表嵌套
{: .notice}

* 列表 1
  * 1.1
  * 1.2
    * 1.2.1
* 列表 2
{: .list}

*斜体*  **粗体**

_斜体_  __粗体__

~~还有~~

缩略词定义，缩略词是什么？

*[缩略词]: 简写的词语

Notice提示
{: .notice}

Notice信息
{: .notice--info}

Notice警告
{: .notice--warning}

![头像](https://i.loli.net/2017/12/05/5a265e00ae562.jpg '头像')
{: .align-right}

以及图片，和图片靠右摆放的语法。

:sparkles: jemoji 支持

@zYeoman : jekyll-mentions 测试



## 第二行标题

公式 $$\lambda a_1$$
$$\delta \times$$

$$E = mc^2$$

| 标题 1 | 标题 2 | 标题 3 | 标题 4 |
| ---- | :--- | :--: | ---: |
| 默认对齐 | 左对齐  | 居中对齐 |  右对齐 |

`T` `Ctrl+A` 行内代码。

<kbd>T</kbd> kbd。

```python
import os
import path
def test():
    print("Hello,World")
```

<!-- more -->

{% highlight python %}
def foo
  puts 'foo'
end
{% endhighlight %}

```matlab
% 测试代码高亮
function foo = bar()
return
```

[^1]: hehe
