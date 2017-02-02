---
layout: post
title: Python Learn
category: 知识库
date: 2017-02-02
---
#Python 学习（第一天）

Tags: Python

---
[TOC]

##1.Python 解释器
---
###1.1 启动
* Linux

```sh
sudo apt-get install python3.3
python
```
结束输入：`Commond-D`or`quit()`

* Windows
未设置 PATH 时，

```
set path=%path%;C:\Python33
python33
```
结束输入：`Ctrl-Z`or `quit()`

* 另外的启动方式
`python -c command [arg]`，在命令行中执行 python 命令

####1.1.1 参数传递
启动解释器时，脚本名和附加参数传入字符串列表`sys.argv`，通过`import sys`获取该列表。
####1.1.2 交互模式
`>>>`主提示符
`...`从属提示符

###1.2 解释器及其环境
####1.2.1 错误处理
####1.2.2 执行 python 脚本
* Linux
在脚本文件开头加上
```sh
#! /usr/bin/ python33
```
指定文件和模式

* Windows
自动

####1.2.3 源程序编码
脚本第二行加上
```sh
# -*- coding: encoding -*-
```

####1.2.4 交互执行文件
可以是解释器每次启动时自动运行一些程序

####1.2.5 本地化模块

来自 [Python33](http://www.zmaitech.com/python/interpreter.html)

##2.Python 简介
###2.1 变量

* 可以使用`del`删除对象，语法为`del var1[,var2[,var3[...,varN]]]`

####2.1.1 数字
* 运算符：`+` `-` `*` `/` `**`幂 `//`（整除） `%`; 逻辑运算`and` `or` `not`
* 成员运算`in` `not in`
* 身份运算：判断成员是不是来自同一对象，`is` `not is`

* 数：整数、浮点数、复数
    - 复数方法：z.real,z.imag

* 最后一个表达式值 ANS 存储在`_`中

#####2.1.1.1 关于数字的函数

* 类型转换

|函数名|类型|
|------|----|
|int(x [,base ])         |将 x 转换为一个整数
|long(x [,base ])        |将 x 转换为一个长整数
|float(x )               |将 x 转换到一个浮点数
|complex(real [,imag ])  |创建一个复数
|str(x )                 |将对象 x 转换为字符串
|repr(x )                |将对象 x 转换为表达式字符串
|eval(str )              |用来计算在字符串中的有效 Python 表达式，并返回一个对象
|tuple(s )               |将序列 s 转换为一个元组
|list(s )                |将序列 s 转换为一个列表
|chr(x )                 |将一个整数转换为一个字符
|unichr(x )              |将一个整数转换为 Unicode 字符
|ord(x )                 |将一个字符转换为它的整数值
|hex(x )                 |将一个整数转换为一个十六进制字符串
|oct(x )                 |将一个整数转换为一个八进制字符串

* 数学、随机数、三角函数略
* pi，e 为常量


####2.1.2 字符串
* 标识：单引号`''`，双引号`""`，三个引号`'''`or`"""`将得到原样输出。
使用`\`标志本行未结束，字符串前上 r（例如：r"hehe\n")，将得到无转义的输出

* 运算：
    - `+`连接
    - `*`重复
    - 使用 [] 获得字符串片段，负数将导致从字符串右边开始计数，但是字符顺序不会变。python 能自动修复上下界溢出的问题。
    - len() 返回字符串长度
    - `%`格式化字符串
    - `r/R`原始字符串

```python
example = "Hello"+",World"
print example[5:]
print example[:5]
print example[3]
print example[5:-1]
print example[:-5]
print example[5:100]
```

* **注意：字符串不可变**

#####2.1.2.1 转义字符

|字符|描述|
|----|----|
|`\` |（在行尾时） 续行符
|`\\` | 反斜杠符号
|`\'` | 单引号
|`\"` | 双引号
|`\a` | 响铃
|`\b` | 退格 (Backspace)
|`\e` | 转义
|`\000` | 空
|`\n` | 换行
|`\v` | 纵向制表符
|`\t` | 横向制表符
|`\r` | 回车
|`\f` | 换页
|`\oyy` | 八进制数，yy 代表的字符，例如：\o12 代表换行
|`\xyy` | 十六进制数，yy 代表的字符，例如：\x0a 代表换行
|`\other` | 其它的字符以普通格式输出

#####2.1.2.2 字符串函数

|函数|描述|
|----|----|
string.capitalize() | 把字符串的第一个字符大写
|string.center(width) | 返回一个原字符串居中，并使用空格填充至长度 width 的新字符串
|string.count(str, beg=0, end=len(string)) | 返回 str 在 string 里面出现的次数，如果 beg 或者 end 指定则返回指定范围内 str 出现的次数
|string.decode(encoding='UTF-8', errors='strict') | 以 encoding 指定的编码格式解码 string，如果出错默认报一个 ValueError 的 异 常 ， 除 非 errors 指 定 的 是 'ignore' 或 者'replace'
|string.encode(encoding='UTF-8', errors='strict') | 以 encoding 指定的编码格式编码 string，如果出错默认报一个 ValueError 的异常，除非 errors 指定的是'ignore'或者'replace'
|string.endswith(obj, beg=0, end=len(string)) | 检查字符串是否以 obj 结束，如果 beg 或者 end 指定则检查指定的范围内是否以 obj 结束，如果是，返回 True, 否则返回 False.
|string.expandtabs(tabsize=8) | 把字符串 string 中的 tab 符号转为空格，默认的空格数 tabsize 是 8.
|string.find(str, beg=0, end=len(string)) | 检测 str 是否包含在 string 中，如果 beg 和 end 指定范围，则检查是否包含在指定范围内，如果是返回开始的索引值，否则返回 -1
|string.index(str, beg=0, end=len(string)) | 跟 find() 方法一样，只不过如果 str 不在 string 中会报一个异常。
|string.isalnum() | 如果 string 至少有一个字符并且所有字符都是字母或数字则返回 True, 否则返回 False
|string.isalpha() | 如果 string 至少有一个字符并且所有字符都是字母则返回 True, 否则返回 False
|string.isdecimal() | 如果 string 只包含十进制数字则返回 True 否则返回 False.
|string.isdigit() | 如果 string 只包含数字则返回 True 否则返回 False.
|string.islower() | 如果 string 中包含至少一个区分大小写的字符，并且所有这些（区分大小写的）字符都是小写，则返回 True，否则返回 False
|string.isnumeric() | 如果 string 中只包含数字字符，则返回 True，否则返回 False
|string.isspace() | 如果 string 中只包含空格，则返回 True，否则返回 False.
|string.istitle() | 如果 string 是标题化的（见 title()) 则返回 True，否则返回 False
|string.isupper() | 如果 string 中包含至少一个区分大小写的字符，并且所有这些（区分大小写的）字符都是大写，则返回 True，否则返回 False
|string.join(seq) | Merges (concatenates) 以 string 作为分隔符，将 seq 中所有的元素（的字符串表示）合并为一个新的字符串
|string.ljust(width) | 返回一个原字符串左对齐，并使用空格填充至长度 width 的新字符串
|string.lower() | 转换 string 中所有大写字符为小写。
|string.lstrip() | 截掉 string 左边的空格
|string.maketrans(intab, outtab]) | maketrans() 方法用于创建字符映射的转换表，对于接受两个参数的最简单的调用方式，第一个参数是字符串，表示需要转换的字符，第二个参数也是字符串表示转换的目标。
|max(str) | 返回字符串 str 中最大的字母。
|min(str) | 返回字符串 str 中最小的字母。
|string.partition(str) | 有点像 find() 和 split() 的结合体，从 str 出现的第一个位置起，把 字 符 串 string 分 成 一 个 3 元 素 的 元 组 (string_pre_str,str,string_post_str), 如果 string 中不包含 str 则 string_pre_str == string.
|string.replace(str1, str2,  num=string.count(str1)) | 把 string 中的 str1 替换成 str2, 如果 num 指定，则替换不超过 num 次。
|string.rfind(str, beg=0,end=len(string) ) | 类似于 find() 函数，不过是从右边开始查找。
|string.rindex( str, beg=0,end=len(string)) | 类似于 index()，不过是从右边开始。
|string.rjust(width) | 返回一个原字符串右对齐，并使用空格填充至长度 width 的新字符串
|string.rpartition(str) | 类似于 partition() 函数，不过是从右边开始查找。
|string.rstrip() | 删除 string 字符串末尾的空格。
|string.split(str="", num=string.count(str)) | 以 str 为分隔符切片 string，如果 num 有指定值，则仅分隔 num 个子字符串
|string.splitlines(num=string.count('\n')) | 按照行分隔，返回一个包含各行作为元素的列表，如果 num 指定则仅切片 num 个行。
|string.startswith(obj, beg=0,end=len(string)) | 检查字符串是否是以 obj 开头，是则返回 True，否则返回 False。如果 beg 和 end 指定值，则在指定范围内检查。
|string.strip([obj]) | 在 string 上执行 lstrip() 和 rstrip()
|string.swapcase() | 翻转 string 中的大小写
|string.title() | 返回"标题化"的 string, 就是说所有单词都是以大写开始，其余字母均为小写（见 istitle())
|string.translate(str, del="") | 根据 str 给出的表（包含 256 个字符）转换 string 的字符，要过滤掉的字符放到 del 参数中
|string.upper() | 转换 string 中的小写字母为大写
|string.zfill(width) | 返回长度为 width 的字符串，原字符串 string 右对齐，前面填充 0
|string.isdecimal() | isdecimal() 方法检查字符串是否只包含十进制字符。这种方法只存在于 unicode 对象。

#####2.1.2.3 关于 unicode
使用`\u`+ 两位 16 进制表示 unicode 字符
字符串对象提供 *encode()*方法转换成特定编码的字符序列

```python
print "Hello\u0020World!"
print "Hello".encode()
```

###2.1.3 列表
**list** 用`[]`标志
列表元素可以是不同类型，序号从零开始，可以切片和连接，允许修改元素，也可以对切片幅值， *len()*返回长度，允许嵌套，*append()*在列表尾添加新项，*del*删除列表项

```python
test = ["hello",1,2.1,'world']
test2= ['good',test]
test.append('~!\n')
```

1. list.append(obj) 在列表末尾添加新的对象
2. list.count(obj) 统计某个元素在列表中出现的次数
3. list.extend(seq) 在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）
4. list.index(obj) 从列表中找出某个值第一个匹配项的索引位置
5. list.insert(index, obj) 将对象插入列表
6. list.pop(obj=list[-1]) 移除列表中的一个元素（默认最后一个元素），并且返回该元素的值
7. list.remove(obj) 移除列表中某个值的第一个匹配项
8. list.reverse() 反向列表中元素
9. list.sort([func]) 对原列表进行排序


###2.2.4 元组
**Tuple** 用`()`标志
相当于只读列表

###2.2.5 字典
**Dict** 用`{}`标志
无序，通过键`key`存取元素

```python
dict1={'hehe':2,'Code':123}
```

###2.2.6 数据类型转换

|函数|功能|
|----|----|
|int(x [,base]) | 将 x 转换为一个整数
|long(x [,base] ) | 将 x 转换为一个长整数
|float(x) | 将 x 转换到一个浮点数
|complex(real [,imag]) | 创建一个复数
|str(x) | 将对象 x 转换为字符串
|repr(x) | 将对象 x 转换为表达式字符串
|eval(str) | 用来计算在字符串中的有效 Python 表达式，并返回一个对象
|tuple(s) | 将序列 s 转换为一个元组
|list(s) | 将序列 s 转换为一个列表
|set(s) | 转换为可变集合
|dict(d) | 创建一个字典。d 必须是一个序列 (key,value) 元组。
|frozenset(s) | 转换为不可变集合
|chr(x) | 将一个整数转换为一个字符
|unichr(x) | 将一个整数转换为 Unicode 字符
|ord(x) | 将一个字符转换为它的整数值
|hex(x) | 将一个整数转换为一个十六进制字符串
|oct(x) | 将一个整数转换为一个八进制字符串

##2.2 开始编程
例子：（包含多重赋值与 while)

```python
a,b=0,1
while b<1000
    print b,end=','
    a,b=b,a+b

```

###2.2.1 标示符
以下划线开头的标识符是有特殊意义的。以单下划线开头（`_foo`）的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用"from xxx import *"而导入；

以双下划线开头的（`__foo`）代表类的私有成员；以双下划线开头和结尾的（`__foo__`）代表 python 里特殊方法专用的标识，如`__init__（）`代表类的构造函数。

###2.2.2 保留字符

| | |
|----|----|---|
| and | exec | not
| assert | finally | or
| break | for | pass
| class | from | print
| continue | global | raise
| def | if | return
| del | import | try
| elif | in | while
| else | is | with
| except | lambda | yield

###2.2.3 行和缩进

* 利用缩进代替`{}`
* 多行代码用`\`表示该行未结束
* 函数之间、类方法之间、类与函数入口之间加空行分割
* 一行之内多行语句用`;`

##3 流程控制

###3.1 if 语句
`if...else`
`if elif ... elif...`

###3.2 while 语句
同样适用`break` `continue`

###3.3for 语句
可以遍历任何序列（列表字典字符串元组）的项目

```python
for letter in 'Python':     # First Example
   print 'Current Letter :', letter

fruits = ['banana', 'apple',  'mango']
for fruit in fruits:        # Second Example
   print 'Current fruit :', fruit

print "Good bye!"

#另一种方法
fruits = ['banana', 'apple',  'mango']
for index in range(len(fruits)):
   print 'Current fruit :', fruits[index]

print "Good bye!"
```

###3.4pass 语句
占位的空语句

###3.5else 语句
`for..else`和`while..else`执行循环正常结束（不是`break`) 后会执行 else 语句

###3.6 日期和时间

time and calendar 模组
*time.time()* 返回 1970.1.1 到今天的毫秒数
`struct_time`元组，0-9 分别为 4 位数年、月、日、小时、分钟、秒、一周第几日 (0= 周一）、一年第几日、夏令时
实例

```python
import time;
import calendar;

localtime = time.localtime(time.time())
print "Local current time :", localtime
localtime = time.asctime( time.localtime(time.time()) )
print "Local current time :", localtime
cal = calendar.month(2008, 1)
print "Here is the calendar:"
print cal;

```

输出

```
Local current time : time.struct_time(tm_year=2013, tm_mon=7, tm_mday=17, tm_hour=21, tm_min=26, tm_sec=3, tm_wday=2, tm_yday=198, tm_isdst=0)
Local current time : Tue Jan 13 10:17:09 2009
Here is the calendar:
    January 2008
Mo Tu We Th Fr Sa Su
    1  2  3  4  5  6
 7  8  9 10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30 31
```

详细函数：time,calendar

##4 函数

```python
def functionname( parameters ):
   "函数_文档字符串"#用于存放函数说明
   function_suite
   return [expression]

#可写函数说明，命名参数
def printinfo( name, age ):
   "打印任何传入的字符串"
   print "Name: ", name;
   print "Age ", age;
   return;

#调用 printinfo 函数
printinfo( age=50, name="miki" );

#不定长参数
# 可写函数说明
def printinfo( arg1, *vartuple ):
   "打印任何传入的参数"
   print "输出："
   print arg1
   for var in vartuple:
      print var
   return;

# 调用 printinfo 函数
printinfo( 10 );
printinfo( 70, 60, 50 );
```

* 所有变量都是按引用传递的

###4.1 匿名函数
语法：`lambda [arg1 [,arg2,.....argn]]:expression`

```python
#!/usr/bin/python

#可写函数说明
sum = lambda arg1, arg2: arg1 + arg2;

#调用 sum 函数
print "Value of total : ", sum( 10, 20 )
print "Value of total : ", sum( 20, 20 )
```

##5python 模块
导入模块搜索顺序为
* 当前目录
* PYTHONPATH 环境变量目录
* 默认路径

**`dir()`函数**
输出模块里定义的所有函数变量
**globals() locals()**
**reload()**

###包
包是一个分层次的文件目录结构，它定义了一个由模块及子包，和子包下的子包等组成的 Python 的应用环境。

考虑一个在 Phone 目录下的 pots.py 文件。这个文件有如下源代码：

```python
#!/usr/bin/python

def Pots():
   print "I'm Pots Phone"
   同样地，我们有另外两个保存了不同函数的文件：
```

Phone/Isdn.py 含有函数 Isdn()
Phone/G3.py 含有函数 G3()
现在，在 Phone 目录下创建 file __init__.py：

Phone/__init__.py
当你导入 Phone 时，为了能够使用所有函数，你需要在__init__.py 里使用显式的导入语句，如下：

```py
from Pots import Pots
from Isdn import Isdn
from G3 import G3
```

当你把这些代码添加到__init__.py 之后，导入 Phone 包的时候这些类就全都是可用的了。

```py
#!/usr/bin/python

# Now import your Phone Package.
import Phone

Phone.Pots()
Phone.Isdn()
Phone.G3()
```

以上实例输出结果：

I'm Pots Phone
I'm 3G Phone
I'm ISDN Phone
如上，为了举例，我们只在每个文件里放置了一个函数，但其实你可以放置许多函数。你也可以在这些文件里定义 Python 的类，然后为这些类建一个包。

##6 I/O
`print` `raw_input`（读入一行字符串） `input`（读入有效表达式）

```python
#!/usr/bin/python

str = input("Enter your input: ");
print "Received input is : ", str
```

输出

```
Enter your input: [x*5 for x in range(2,10,2)]
Recieved input is :  [10, 20, 30, 40]
```

`open`打开文件
`file object = open(file_name [, access_mode][, buffering])`

```python
#!/usr/bin/python

# 打开一个文件
fo = open("foo.txt", "wb")
print "Name of the file: ", fo.name
print "Closed or not : ", fo.closed
print "Opening mode : ", fo.mode
print "Softspace flag : ", fo.softspace

str = fo.read(10);
print "Read String is : ", str

# 查找当前位置
position = fo.tell();
print "Current file position : ", position

# 把指针再次重新定位到文件开头
position = fo.seek(0, 0);
str = fo.read(10);
print "Again read String is : ", str
# 关闭打开的文件
fo.close()
```

###重命名和删除源文件
Python 的 **os 模块** 提供了帮你执行文件处理操作的方法，比如重命名和删除文件。
要使用这个模块，你必须先导入它，然后可以调用相关的各种功能。
rename() 方法：
rename() 方法需要两个参数，当前的文件名和新文件名。
`os.rename(current_file_name, new_file_name)`
remove() 删除文件
mkdir()
chdir()
rmdir()
listditr()
getcwd()
