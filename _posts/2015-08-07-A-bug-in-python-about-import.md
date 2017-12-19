---
layout: post
title: 【Python】 import bug——Can't import *
category: 用
tags:
  - 原创
  - python
  - bug
date: 2015-08-07 20:02:42 +0800
create: 2015-08-07
---

还是没有系统学习过Python的原因，对于`import`还是有不清楚的地方，比如说会默认首先从当前文件夹import然后再到`PYTHONLIB`文件夹。

下面就是一个因此导致的BUG。

今天看了一下Python的一个Web框架，Flask（[1](http://python.jobbole.com/81396/)）。于是按照里面写的写了一个`Hello World`的程序如下：

```python
# -*- coding=utf-8 -*-
# Copyright (C) 2015 Yeoman Zhuang

from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello, World"

if __name__ == '__main__':
    app.run()
```

保存为`flask.py`后运行，发现报错
```
ImportError: cannot import name Flask
```
于是上`stackoverflow`查到这样的一个[解答](http://stackoverflow.com/questions/26960235/python3-cannot-import-name-flask)（类似的问题）:

> I tried the following simple code,

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
return "Hello World!"

if __name__ == "__main__":
app.run()
```

> it is running fine with,
>
> python hello.py
>
> but it gives an error when i try with python3

```python
ImportError: cannot import name 'Flask'
```

> A package is installed against a specific Python version/location. Installing Flask for Python 2 (which is probably what the python and pip commands are aliased to), doesn't install it for Python 3.
>
> You should really just use virtualenv to control exactly what versions and packages you are using.
>
> This creates a Python 3 environment and installs Flask:
>
> virtualenv -p /usr/bin/python3 my_py3_env
>
> source my_py3_env/bin/activate
>
> pip install flask

这个问题与我的问题类似，但是我的确用的是Python2.7啊！于是以为无法解决是下载的问题（真不该这么想），但是之前试过一个[`cookiecutter-flask`](https://github.com/sloria/cookiecutter-flask)这个貌似是自动生成一个flask博客的Github项目，最后是能够成功运行的，那里也`from flask import Flask`了也没问题啊，去看源代码也没问题啊。最后，突然发现，貌似我不应该把脚本名直接命名为flask的。。。改成`flask_test.py`立刻没问题了。

所以说，还是要系统学习一下Python的啊。

PS：单纯的删除`flask.py`是不行的，因为运行时`python`发现了这个脚本是一个模块后自动给编译生成了一个`flask.pyc`文件
