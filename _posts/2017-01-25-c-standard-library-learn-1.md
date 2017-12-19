---
layout: post
title: C 标准库学习·一·assert.h
category: 理
tags:
  - 原创
  - c/c++
  - 更新中
date: 2017-01-28
create: 2017-01-25
---

嵌入式里基本用的是标准 C。而且感觉自己对于 C 的库只知道`stdio.h`和`stdlib.h`很不好，因此开始学习 C 标准库。

    因为个人喜好，左大括号不会另起一行。

## 背景知识
`<assert.h>`的唯一目的是提供宏`assert`的定义。在程序的关键部分使用`assert`进行断言。若断言非真则在`stderr`输出适当的提示信息并使之性异常中止。

断言只在调试程序的时候起作用。希望这些断言作为文档保留下来同时不希望它们产生代码。

### NDEBUG
**NDEBUG** 宏，通过定义`NDEBUG`改变断言的展开方式。

## 使用
* 使用宏`#define NDEBUG`来使断言不再起作用
* 很多编译器支持在任意 C 源文件之外定义宏，比如在 Makefile 里设置 NDEBUG。

## 实现
总体结构

```c
#undef assert  /* remove existing definition */
#ifdef NDEBUG
#define assert(test) ((void) 0)
#else
#define assert(test) ...
#endif
```

### 错误实现

```c
#define assert(test) if (!(test)) \
  fprintf (stderr, "Assertion failed: %s, file %s, line %i\n", \
      #test, __FILE__, __LINE__) /* UNACCEPTABLE! */
```

* 宏不能直接调用库的任何输出函数，例如`fprintf`，也不能引用宏定义`stderr`。这是在`<stdio.h>`中声明或者定义的。
* 宏必须能扩展为一个`void`类型的表达式。例如程序能包含一个形如`(assert(0<x), x<y)`的表达式，这样不能使用`if`语句了。
* 宏应该可以扩展为有效且紧凑的代码。这个版本调用了一个传递五个参数的函数。

### 正确的实现

    注意：`__LINE__`内置宏为十进制常量。使用`_STR`将`__LINE__`扩展成十进制常量，使用`_VAL`将十进制常量转变为字符串字面量

assert.h

```c
/* assert.h standard header */
#undef assert  /* remove existing definition */
#ifdef NDEBUG
    #define assert(test) ((void) 0)
#else
    void _Assert(char *);
    #define _STR(x) _VAL(x)
    #define _VAL(x) #x
    #define assert(test) ((test) ? (void) 0\
        : _Assert (__FILE__":"_STR(__LINE__)"" #test))
#endif
```

xassert.c

```c
/* _Assert function */
#include <assert.h>
#include <stdio.h>
#include <stdlib.h>

void _Assert(char *mesg) {
    fputs(mesg, stderr);
    fputs(" -- assertion failed\n", stderr);
    abort();
}
```

## 测试

tassert.c

```c
/* test assert macro */
#define NDEBUG
#include <assert.h>
#include <signal.h>
#include <stdio.h>
#include <stdlib.h>

        /* static data */
static int val = 0;

static void field_abort(int sig) {
    if (val == 1){
        puts("SUCCESS testing <assert.h>");
        exit(EXIT_SUCCESS);
    } else {
        puts("FAILURE testing <assert.h>");
        exit(EXIT_FAILURE);
    }
}

static void dummy() {
    int i = 0;
    assert(i == 0);
    assert(i == 1);
}

#undef NDEBUG
#include <assert.h>

int main() {
    /* test both dummy and working forms */
    assert(signal(SIGABRT, &field_abort) != SIG_ERR);
    dummy();
    assert(val == 0);    /* should not abort */
    ++val;
    fputs("Sample assertion failure message --\n", stderr);
    assert(val == 0);    /* should abort     */
    return(EXIT_SUCCESS);
}
```
