---
layout: post
title: C++一个神奇的bug
category: 法
date: 2020-08-05 21:35:02 +0800
create: 2020-08-05 21:26:29 +0800
tags: 
  - bug
---

- TOC
{:toc}

```cpp
struct foo{
  int a;
  int b;
  foo operator+(int i){
    foo res;
    res.a = a + i;
    return res;
  }
};
int main() {
  foo bar = bar + 1;
  return 0;
}
```

上面这段代码，很明显有一个问题，就是 `foo bar = bar + 1`这里，bar还没init就用了。但是g++不会报任何warning。使用来自[这里](https://stackoverflow.com/a/9862800)的warning设置，即`-pedantic -Wall -Wextra -Wcast-align -Wcast-qual -Wctor-dtor-privacy -Wdisabled-optimization -Wformat=2 -Winit-self -Wlogical-op -Wmissing-declarations -Wmissing-include-dirs -Wnoexcept -Wold-style-cast -Woverloaded-virtual -Wredundant-decls -Wshadow -Wsign-conversion -Wsign-promo -Wstrict-null-sentinel -Wstrict-overflow=5 -Wswitch-default -Wundef -Werror -Wno-unused` 依旧没有任何warning。

不过`clang++`是会报warning的。

```
-> % clang++ test.cpp
test.cpp:44:13: warning: variable 'bar' is uninitialized when used within its own initialization [-Wuninitialized]
  foo bar = bar + 1;
      ~~~   ^~~
1 warning generated.
```