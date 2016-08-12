#!/usr/bin/python
# encoding:utf-8
import datetime

import sys
import os

if len(sys.argv) == 1:
    exit()

head = '''---
layout: {}
title: title
category:
date: %Y-%m-%d
---
'''


now = datetime.datetime.now()

date = now.strftime('%Y-%m-%d')

filename = date + '-{}.md'.format('-'.join(sys.argv[1:]))
head = head.format('post')

if not os.path.exists(filename):
    with open(filename, 'w') as f:
        f.write(now.strftime(head))

print(filename)
os.system('vim '+filename)
