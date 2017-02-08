---
layout: post
title: "【jekyll】修复 Jekyll 里 Markdown 代码高亮问题"
category: 知识库
date: 2017-02-08
---

## 修复代码高亮问题

利用 [Jekyll Light](https://github.com/pexcn/Jekyll-Light) 的主题制作了这样一个好看的博客以后，兴冲冲地开始了测试，然后遗憾地发现不支持 markdown GFM 的代码高亮。

然后经过了一系列的 google 终于找到了一个靠谱的解决方案，具体见 [liberize.blog](http://liberize.me/tech/bootstrap-tweaks.html)。但是表格又不支持了。

总之经过很多折腾以后终于成功了

```
markdown: redcarpet
redcarpet:
  extensions: ["no_intra_emphasis", "fenced_code_blocks", "autolink", "strikethrough", "with_toc_data", "tables", "underline", "lax_spacing", "footnotes"]
```
## 修复数学公式问题

Theme 里自带的是`[]`来表示行内公式，这可不行。应该把`life.html` `blog.html`里改成这样子

```html
<script src="http://cdn.bootcss.com/mathjax/2.4.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script><script>MathJax.Hub.Config({tex2jax:{inlineMath: [['$','$']],displayMath: [['$$','$$']],processEscapes: true}});</script>
```
<!-- more -->
-----
reference

[BLOG](http://soranoiseki.com/blog/2015/01/11/post/)

[各种字符串的解释](http://jiangtao92.github.io/jekyll%20%E5%8D%9A%E5%AE%A2%E6%9E%84%E5%BB%BA%E7%AC%94%E8%AE%B0/2014/01/23/markdownredcarpet/)

[tex2jax](http://docs.mathjax.org/en/latest/options/tex2jax.html)
