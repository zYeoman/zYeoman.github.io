---
layout: post
title: SimplestNote 开发记录
category: 法
tags:
  - 原创
  - android
  - 记录
date: 2017-02-18
create: 2016-12-15
---

[github](https://github.com/zYeoman/SimplestNote)

## 起源
大一暑假暑期实践的时候去某公司学习了一下 android 开发，然后当时就写了一个名叫 Baidu 的笔记 APP。只有添加、查看和删除全部三个功能。这个 APP 存在在我两部手机上。最近使用了一下发现意外的好用啊，如果作为纯粹的日常事项记录的话，能够显著改善记录以后就一直存在那里从来不会去看第二遍的问题。因为只有一下子删除全部的功能，每日日记以后就立即销毁，所以只能每天把记录的小细节都转移到类似 onenote 的工具上，算是一个督促自己日记的工具吧。但是那是用 adt 开发的，同时基于 Android 4.4。虽然功能还不错，但是太丑了啊。因此萌生了用 Android Studio 重写的冲动。

### 准备
有着超快网速的代理和至少 8G 内存和 Android Studio。

## 进展
需要实现的功能不多，基本上就是数据库文件创建、表创建、查找、删除以及内容显示而已。

### 更新
* 返回、退出自动添加 input 内内容。通过实现 EditText 类并重写`onBackPressed`函数实现。
* 删除两个 Activity，只留下一个主要的。一个输入框下面直接是 ListView
* 删除 FloatingActionButton。添加只需软键盘“下一项”即可，删除可以使用 setting 的功能。
* 增加分享到功能。
* 使用 onWindowFocusChanged 函数和 Timer 来实现打开后自动弹出 IME 软键盘的功能。
* 添加 Snackbar UNDO 功能。

### 新建项目
打开 android studio，新建项目，新建空白项目。

    Tips: 名字随便取，company domain 随便取，Minimum SDK 选 API21，Empty Activity 然后直接 finish。

创建完成后主要需要修改的就是`MainActivity.java`文件。一般情况下里头都有一个 onCreate 函数，基本上（我要写的简单应用）就只需修改这里的内容就可以了。布局文件是`res/layout/content_main.xml`

    Tips：在布局文件`design`选项卡添加控件和修改 id 后，在 java 文件里可以用类似`Button mButton = findViewById(R.id.yourid)`的方式获得该控件的对象。使用`alt+return`自动 cast。

### 数据库操作
这里就是让我折腾了一个下午的地方，最终还是没有避免新建一个类的结局。

    Tips：可以直接在`MainActivity.java`新建类，然后利用 warning 信息自动把新建的类移动到新文件里。（方便快捷的解决方案）

```java
public class SimplestNoteDbHelper extends SQLiteOpenHelper {
    // If you change the database schema, you must increment the database version.
    public static final int DATABASE_VERSION = 1;
    // Name of saved file
    public static final String DATABASE_NAME = "SimplestNote.db";

    public SimplestNoteDbHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    // Create new table
    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL("CREATE TABLE " + FeedEntry.TABLE_NAME + " (" +
                FeedEntry._ID + " INTEGER PRIMARY KEY," +
                FeedEntry.CONTENT + " TEXT," +
                FeedEntry.TIME + " TEXT )"
        );
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
    }
}
```

额，其中的`FeedEntry`也是一个类

```java
public  class FeedEntry implements BaseColumns {
    public static final String TABLE_NAME = "notes";
    public static final String CONTENT = "content";
    public static final String TIME = "time";
    public static final String FLAG="flag";
    public static final int Exist = 0;
    public static final int Del = 1;
}
```

#### 数据库操作举例

```java
// 添加行
ContentValues mValues = new ContentValues();
mValues.put(FeedEntry.CONTENT, "Sample content");
mValues.put(FeedEntry.TIME, "01-01 12:00:00");
mValues.put(FeedEntry.FLAG, 1);
db.insert(FeedEntry.TABLE_NAME, null, mValues)

// 更新所有 FLAG 列为 1
ContentValues mValues = new ContentValues();
mValues.put(FeedEntry.FLAG, 1);
db.update(FeedEntry.TABLE_NAME, mValues, null, null);

// 删除所有 FLAG 列为 1 的行
ContentValues mValues = new ContentValues();
mValues.put(FeedEntry.FLAG, 1);
db.delete(FeedEntry.TABLE_NAME, mValues, FeedEntry.FLAG + "=1", null);
```

### 布局
一共有两个 Activity，新建 Activity 只要 File-New-Activity 即可。

一个 Activity 用于添加 Note，另一个用于展示 Notes。添加 Note 的 Activity 里有一个新版的 TextInputLayout，自带各种动画效果。展示 Note 使用 ListView。同时按钮使用 github 上搜索到的 FloatingActionButton 库。只需要在 app 的`build.gradle`里的 dependencies 里添加`compile 'com.molnykov:floatingactionbutton:1.3.0'（[地址](https://github.com/makovkastar/FloatingActionButton)）即可。真是方便啊。

![MainActivity](https://ooo.0o0.ooo/2016/12/16/5853fe29948a2.png)

![ShowActivity](https://ooo.0o0.ooo/2016/12/16/5853fe81603c0.png)

**目前已经只有一个 Activity 了**

### ListView
ListView 需要`setAdapter`连接数据库

```java
String selectQuery = "SELECT  * FROM " + FeedEntry.TABLE_NAME + " ORDER BY " + FeedEntry._ID + " DESC;";
Cursor cursor = mdb.rawQuery(selectQuery, null);
list.setAdapter(new SimpleCursorAdapter(
        this,
        android.R.layout.simple_list_item_2,
        cursor,
        new String[]{FeedEntry.COLUMN_NAME_TITLE, FeedEntry.COLUMN_NAME_SUBTITLE},
        new int[]{android.R.id.text1,android.R.id.text2}));
```

    Tips：`simple_list_item_2`是系统自带的布局，可以自己建立一个布局实现更多的特效。

### 其他
其他就没有什么特别需要说的了。

    Tips：输入框自动换行以及回车自动添加的奇技淫巧：EditText 布局文件里添加`android:singleLine="true"`同时在`onCreate`函数里添加`input.setHorizontallyScrolling(false);input.setMaxLine(Integer.MAX_VALUE);`

    Tips: Icon 使用 [icons-launcher](http://romannurik.github.io/AndroidAssetStudio/icons-launcher.html) 生成
