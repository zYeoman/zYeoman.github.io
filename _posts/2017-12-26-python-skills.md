---
layout: post
title: Python奇技淫巧
category: 法
tags:
  - python
  - 奇技淫巧
date: 2017-12-26 22:55:28 +0800
create: 2017-12-26 16:07:57 +0800
---

关于Python的各种奇技淫巧。

- toc
{:toc}
## 列表推导

### 生成列表

```python
num = [1, 2, -3, 4]
# 直接生成列表
squard = [x**2 for x in num if x > 0]
# 产生生成器对象
squard = (x**2 for x in num if x > 0)
# 除非特殊原因，应该经常使用生成器对象，虽然不会有明显区别
```

### zip函数

```python
alist = [1, 2, -3, 4]
blist = [3, 2, 1, 4]
for a, b in zip(alist, blist):
    print(a, b)
```

### map,filter,reduce函数

三个操作列表的函数。`map`为映射，`filter`为过滤，`reduce`为累积。

## 装饰器

装饰器用于增加已有函数或类的功能。例如可以 **在函数的入口和出口时做专门操作**。

装饰器是一个包装了另一个函数的特殊函数，返回一个包装了主函数的替代函数。

```python
# 来自https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/0014318435599930270c0381a3b44db991cd6d858064ac0000
# 在函数开头打印调用信息
def log(func):
    @functools.wraps(func)
    def wrapper(*args, **kw):
        print('call %s():' % func.__name__)
        return func(*args, **kw)
    return wrapper

@log
def now():
    print('2015-3-25')
    
# 有参数的装饰器
def log(text):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kw):
            print('%s %s():' % (text, func.__name__))
            return func(*args, **kw)
        return wrapper
    return decorator

@log('execute')
def now():
    print('2015-3-25')
```

## 描述器

决定对象属性如何被访问，包括`__get__(self, instance, owner)`、`__set__(self, instance, value)`、`__delete__(self, instance)`

## 元类

类的类。。。

