---
layout: post
title: 华为笔试
category: 杂
date: 2019-09-25 21:27:48 +0800
create: 2019-09-25 20:59:53 +0800
tags: 
  - 笔试
  - 算法
---

- TOC
{:toc}

说实话，华为的笔试题真的挺简单的= =。

------

### 前因
大约7.25填好了简历也提交了，然后8.6又找HR小姐姐重新交了一次简历，~~然后就没下文了~~，大约8.19又问了一下。HR回复「我帮你查查」然后就没人了。

终于，9月25号的今天，收到了笔试通知并且在晚上开始了笔试。

----
## 笔试
### 1. 敏感词
字符串匹配，然后把匹配的词换成***。嗯，之前才看过BM算法，什么「坏字符」「好后缀」的原则，以及从后往前匹配的规则等等。

但是，`std::string`里头有`find`函数了。

```c++
/*
 * 1.cpp
 * Copyright (C) 2019 Yongwen Zhuang <zyeoman@163.com>
 *
 * Distributed under terms of the MIT license.
 */

#include <bits/stdc++.h>

int main(int argc, char *argv[]) {
  std::string st, mingan;
  std::string::size_type position;
  std::cin >> st >> mingan;
  position = st.find(mingan);
  if (position != st.npos) {
    for (int i = 0; i < mingan.length(); i++) {
      st[position + i] = '*';
    }
  }
  std::cout << st << std::endl;
  return 0;
}
```

### 2. 销售额
现在有N天的销售额，要进行M次操作。每次操作有两种方案，一是`Q A B`表示查询`[A,B]`区间的销售额平均值，二是`U A B`表示将第`A`天的销售额增加`B`。另外，还保证了所有销售额之和不超过 $10^9$ ，意味着直接上`int`就够了。

本来，这种区间求和、单点更新的操作，可以直接用线段树来做的。但是，我直接计算了一个前缀和（查询是`O(1)`），然后更新是`O(n)`的那种
，就是每次更新后面的所有前缀和。最后竟然没有超时！可喜可贺可喜可贺。

```bash
# 输入示例
# 3 1
# 1 2 3
# Q 1 3
```

```c++
/*
 * 2.cpp
 * Copyright (C) 2019 Yongwen Zhuang <zyeoman@163.com>
 *
 * Distributed under terms of the MIT license.
 */

#include <bits/stdc++.h>

int sells[30001] = {0};
int N, M;

int query(int A, int B) {
  int res = sells[B] - sells[A - 1];
  return res;
}

int update(int A, int B) {
  int delta = B;
  for (int i = A; i <= N; i++) {
    sells[i] += delta;
  }
  return 0;
}

int main(int argc, char *argv[]) {
  std::cin >> N >> M;
  for (int i = 1; i <= N; i++) {
    int tmp;
    std::cin >> tmp;
    sells[i] = tmp + sells[i - 1];
  }
  for (int i = 0; i < M; i++) {
    char op;
    int A, B;
    std::cin >> op >> A >> B;
    if (op == 'Q') {
      std::cout << query(A, B) / (B - A + 1) << std::endl;
    } else if (op == 'U')
      update(A, B);
  }

  return 0;
}

```

### 3. 能力值
小A每天锻炼会失误$a_i$次，之前每有一天失误次数更少，则能力值+1；每有一天失误次数更多，则能力值-1；失误次数相同，能力值不变。即
$$V(i)=\sum_{k=1}^i(a_k<a_i)-\sum_{k=1}^i(a_k>a_i)+V(i-1)$$
小A会锻炼K次，每次锻炼M天，问每次锻炼最大能力值和锻炼结束后的能力值。

#### 解答
结果还是要写线段树啊。。。这里用线段树存储的是失误次数在$[m,n]$之间的。每次遇到$a_i$，能力值改变就是$[0,a-1]$和$[a+1,+\infty]$ 的差，然后用$a_i$的值更新线段树。


```bash
# 输入示例
# 2
# 3
# 1 3 2
# 3
# 3 2 1
```

```c++
/*
 * 3.cpp
 * Copyright (C) 2019 Yongwen Zhuang <zyeoman@163.com>
 *
 * Distributed under terms of the MIT license.
 */

#include <bits/stdc++.h>

struct Node {
  int start, end, count;
  Node *left, *right;
  Node(int start, int end) {
    this->start = start;
    this->end = end;
    this->left = NULL;
    this->right = NULL;
    this->count = 0;
  }
};

int c[100001];

Node *build(int start, int end) {
  if (start > end) {
    return NULL;
  }

  Node *node = new Node(start, end);

  if (start < end) {
    int mid = (start + end) / 2;
    node->left = build(start, mid);
    node->right = build(mid + 1, end);
  }
  return node;
}

int query(Node *root, int start, int end) {
  if (root == NULL || start > end || root->start > end || root->end < start) {
    return 0;
  }
  if (start <= root->start && end >= root->end) {
    return root->count;
  }
  int mid = (root->start + root->end) / 2;
  int leftC = query(root->left, start, std::min(mid, end));
  int rightC = query(root->right, std::max(mid, start), end);
  return leftC + rightC;
}

void insert(Node *root, int value) {
  if (root == NULL) {
    return;
  }
  if (root->start == root->end && root->start == value) {
    root->count += 1;
    return;
  }
  int mid = (root->start + root->end) / 2;
  if (value <= mid) {
    insert(root->left, value);
  } else {
    insert(root->right, value);
  }
  root->count = root->left->count + (root->right ? root->right->count : 0);
}

void clear(Node *root) {
  if (root->left != NULL) {
    clear(root->left);
  }
  if (root->right != NULL) {
    clear(root->right);
  }
  delete root;
}

void count_smaller_bigger(int *a, int size) {
  Node *root = build(0, 100001);
  int pvalue = 0;
  int maxpvalue = 0;
  for (int i = 0; i < size; i++) {
    int smaller = query(root, 0, a[i] - 1);
    int bigger = query(root, a[i] + 1, 100001);
    pvalue += smaller - bigger;
    if (pvalue > maxpvalue) {
      maxpvalue = pvalue;
    }
    insert(root, a[i]);
  }
  std::cout << maxpvalue << " " << pvalue << std::endl;
  clear(root);
  return;
}

int main(int argc, char *argv[]) {
  int T;
  std::cin >> T;
  for (int i = 0; i < T; i++) {
    int n;
    std::cin >> n;
    for (int i = 0; i < n; i++) {
      scanf("%d", c + i);
    }
    count_smaller_bigger(c, n);
  }
  return 0;
}

```