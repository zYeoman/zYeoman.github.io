---
layout: post
title: 中文版 What's New In Python
category: 理
tags:
  - 翻译
  - python
date: 2017-01-01
create: 2017-01-01
---

# What's New In Python 3.6

[resource](https://docs.python.org/3.6/whatsnew/3.6.html)

## 新特性

### PEP 498 语义化的字符串格式化方法。

```
>>> name = "Fred"
>>> f"He said his name is {name}."
'He said his name is Fred.'
>>> width = 10
>>> precision = 4
>>> value = decimal.Decimal("12.34567")
>>> f"result: {value:{width}.{precision}}"  # nested fields
'result:      12.35'
```

### PEP 526 变量注释语法

```python
primes: List[int] = []

captain: str  # Note: no initial value!

class Starship:
    stats: Dict[str, int] = {}
```

仅仅是变量类型注释，存储在`__annotations__`中，没有语法意义。用于第三方工具、库。

在PEP 484中已有用于函数参数和返回值的语法。

### PEP 515 数字中的下划线
可以在数字中添加下划线增加可读性。

```
>>> 1_000_000_000_000_000
1000000000000000
>>> 0x_FF_FF_FF_FF
4294967295
>>> '{:_}'.format(1000000)
'1_000_000'
>>> '{:_x}'.format(0xFFFFFFFF)
'ffff_ffff'
```

### PEP 525 异步生成器

```python
async def ticker(delay, to):
    ""Yield numbers from 0 to *to* every *delay* seconds.""
    for i in range(to):
        yield i
        await asyncio.sleep(delay)"
```

3.5中引入的`async`/`await`(PEP 492)不支持和`yield`同时用，现在支持了。

### PEP 530 异步列表推导
增加列表、集合、字典推导以及迭代器中`async for`和`await`支持。

```python
result = [i async for i in aiter() if i % 2]
result = [await fun() for fun in funcs if await condition()]
```

### PEP 487 更简单定制子类以及Descriptor Protocol Enhancements
`__init__subclass__`方法会在每次子类创建时调用。

```python
class PluginBase:
    subclasses = []

    def __init_subclass__(cls, **kwargs):
        super().__init_subclass__(**kwargs)
        cls.subclasses.append(cls)

class Plugin1(PluginBase):
    pass

class Plugin2(PluginBase):
    pass
```

后面那个没看懂 

```python
ass IntField:
    def __get__(self, instance, owner):
        return instance.__dict__[self.name]

    def __set__(self, instance, value):
        if not isinstance(value, int):
            raise ValueError(f'expecting integer in {self.name}')
        instance.__dict__[self.name] = value

    # this is the new initializer:
    def __set_name__(self, owner, name):
        self.name = name

class Model:
    int_field = IntField()
```

### PEP 519 增加一种文件系统路径协议
为了解决路径`str`与`bytes`两种表示之间的歧义，新增接口`os.PathLike`，只要实现`__fspath__()`方法，对象即可视为`path`。使用`os.fspath()`，`os.fsdecode()`、`os.fsencode()`来明确获得路径的`str`或`bytes`表示。

`open()`函数支持`os.PathLike`对象。

```
>>> import pathlib
>>> with open(pathlib.Path("README")) as f:
...     contents = f.read()
...
>>> import os.path
>>> os.path.splitext(pathlib.Path("some_file.txt"))
('some_file', '.txt')
>>> os.path.join("/a/b", pathlib.Path("c"))
'/a/b/c'
>>> import os
>>> os.fspath(pathlib.Path("some_file.txt"))
'some_file.txt'
```

### PEP 495 无疑议的本地时间
用于有夏令时的地方

```
>>> u0 = datetime(2016, 11, 6, 4, tzinfo=timezone.utc)
>>> for i in range(4):
...     u = u0 + i*HOUR
...     t = u.astimezone(Eastern)
...     print(u.time(), 'UTC =', t.time(), t.tzname(), t.fold)
...
04:00:00 UTC = 00:00:00 EDT 0
05:00:00 UTC = 01:00:00 EDT 0
06:00:00 UTC = 01:00:00 EST 1
07:00:00 UTC = 02:00:00 EST 0
```

### PEP 529 修改Windows文件系统编码为UTF-8
`sys.getfilesystemencoding()`默认为`utf-8`

### PEP 528 修改Windows控制台编码为UTF-8
默认`sys.stdin`, `sys.stdout`, `sys.stderr`编码为utf-8

### PEP 520 保持类属性定义顺序
顺序和属性存储在`__dict__`属性中。

### PEP 468 保持关键字参数顺序
即保持`**kwargs`的顺序。

### 新的字典实现
采用一种紧凑的实现方法。基于[a proposal by Raymond Hettinger](https://mail.python.org/pipermail/python-dev/2012-December/123028.html)，最初在`PyPy`中实现。与3.5相比，新的方法能够节约20%到25%的内存。

新的方法能够保持顺序，但是这仅仅是实现细节，未来可能会变化。

### PEP 523 向CPython添加框架评估API
在C的层面上。

### PYTHONMALLOC环境变量
设置Python内存分配器，安装debug钩子。`PYTHONMALLOC=debug`。

debug钩子的影响为

* 新分配的内存填充`0xCB`
* 释放的内存填充`0xDB`
* 探测违反Python内存分配器API的操作。例如使用`PyObject_Free()`释放`PyMem_Malloc()`分配的内存。
* 探测在缓冲区之前的写操作。buffer underflows
* 探测在缓冲区之后的写操作。buffer overflows
* 调用`PYMEM_DOMAIN_OBJ` `PYMEM_DOMAIN_MEM`域函数时，检查GIL。

使用`PYTHONMALLOC=malloc`来强制使用C的`malloc()`。

出错时，debug钩子使用`tracemalloc`模块存储出错的内存块。

### DTrace和SystemTap探测支持
可以使用`--with-dtrace`编译Python来支持静态标记以下事件

* 函数调用和返回
* 垃圾回收开始和结束
* 代码运行行

### 其他语言修改
* 全局或者非局部变量必须出现在受影响的命名之前。之前这是一个`SyntaxWarning`。
* 可以设置特殊方法为`None`来指定操作不可用。例如设置`__iter__()`为`None`，此类即不可迭代。
* 过长的traceback被简化为形如`[Previous line repeated {count} more times]`的格式。
* `import`现在抛出`ModuleNotFoundError`异常。之前的`try-except`依旧可用。
* 空参数的`super()`正确工作。

## 新模块

### secrets
secrets模块提供显式的方法来产生密码强度的伪随机数，用于管理账户认证、token等私密数据。

不要使用`random`！使用`secrets`或者`os.urandom()`

## 增强的模块
* array
* ast
* asyncio ->稳定
* binascii
* cmath
* collections
* concurrent.futures
* contextlib
* datetime
* decimal
* distutils
* email
* encodings
* enum
* faulthandler
* fileinput
* hashlib
* http.client
* idlelib and IDLE
* importlib
* inspect
* json
* logging
* path
* multiprocessing
* os
* pathlib
* pdb
* pickle
* pickletools
* pydoc
* random
* re
* readline
* rlcompleter
* shlex
* site
* sqlite3
* socket
* socketserver
* ssl
* statistics
* struct
* subprocess
* sys
* telnetlib
* time
* timeit
* tkinter
* traceback
* tracemalloc
* typing
* unicodedata
* unittest.mock
* urllib.request
* urllib.robotparser
* venv
* warnings
* winreg
* winsound
* xmlrpc.client
* zipfile
* zlib

## 性能

## 编译与C API改变

## 不赞成

## 移出

## 迁移


