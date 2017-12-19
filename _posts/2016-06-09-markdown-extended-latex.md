---
layout: post
title: markdown extended 增加 math支持
category: 器
tags:
  - 原创
  - markdown
  - sublime
  - 配置
date: 2016-06-01 13:02:22
create: 2016-06-09
---


使用`PackageResourceViewer`打开markdown extended的文件夹中的`syntax/Markdown Extended.YAML-tmLanguage` `-comment`下添加如下代码

```yaml
- name: markup.raw.block.markdown markup.raw.block.fenced.markdown
  begin: \$\$
  end: \$\$
  # captures:
    # '1': {name: punctuation.definition.fenced.markdown}
    # '2': {name: variable.language.fenced.markdown}
    # '3': {name: punctuation.definition.fenced.markdown}
  patterns:
  - include: text.tex.latex
```

然后使用`PackageDev`运行`convert(YAML,JSON) to ...` 生成`.tmLanguage`文件


