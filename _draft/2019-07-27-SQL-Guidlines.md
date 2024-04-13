---
layout: post
title: 备忘录-SQL Guidelines
category: 法
date: 2019-09-23 21:01:04 +0800
create: 2019-07-27 15:11:51 +0800
tags: 
  - 备忘录
---

来自[mattm/sql-style-guide](https://github.com/mattm/sql-style-guide)

* 使用小写关键字：X
  * 我更喜欢大写关键字，这能告诉我我在用SQL。`SELECT * FROM table;`
* `SELECT`数目超过两个的时候，需要使用多行的写法。
  ```sql
    -- Good
    select id, email
    from users
    where email like '%@gmail.com'

    -- Good
    select user_id, count(*) as total_charges
    from charges
    group by user_id

    -- Good
    select
        id,
        email,
        created_at
    from users
     ```
* 全部左对齐
* 使用单引号
* 使用`!=`而非`<>`
* 缩进`WHERE`的条件。
* 在IN条件里的长列表缩进分行。
* 表名、列名用下划线命名法
* 列名命名规范：`is_` `has_` `does_`，只有日期`_date`, 日期时间`_at`
* 列名排序：id第一，foreign id第二，系统列最后
* JOIN
  * 显式标记`inner join`
  * 把ref的表放在最前面
  * 只有一个条件的时候，只用一行；否则`join`和每个条件各一行
  * 避免别名
* 除非必要，不要在列名前写表名
* 使用`AS`重命名函数集合。`SELECT count(*) AS count FROM users`
* 显式判断布尔变量
* Group by column name
* Grouping columns should go first
* 缩进`CASE WHEN`
* 使用CTE

```sql
-- Good
with ordered_details as (

    select
        user_id,
        name,
        row_number() over (partition by user_id order by date_updated desc) as details_rank
    from billingdaddy.billing_stored_details

),

final as (

    select user_id, name
    from ordered_details
    where details_rank = 1

)

select * from final

-- Bad
select user_id, name
from (
    select
        user_id,
        name,
        row_number() over (partition by user_id order by date_updated desc) as details_rank
    from billingdaddy.billing_stored_details
) ranked
where details_rank = 1
```