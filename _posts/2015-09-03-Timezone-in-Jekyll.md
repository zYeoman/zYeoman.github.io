---
layout: post
title: Jekyll日期显示不对问题
category: Jekyll
date: 2015-09-03 15:23:19
---

`Jekyll`默认时间是格林尼治时间，或者说是`GMT`时间(Greenwich Mean Time，格林尼治平时)，然后生成的时候又会本地化一次变成`UTC`(Universal Time Coordinated，协调世界时)。

因此如果文件的`YAML`头部信息里的`date`时间精确到秒的话（像我的这样），那么最后使用`page.date|date %d`时日期就有可能变化，比如9月3日17点就会变成9月4日1点。。。

被这个问题折磨了好久QAQ。

解决方案是在`_config.yal`里加上这样一行

```
timezone: CN
```

各个时区的缩写在[这里](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

