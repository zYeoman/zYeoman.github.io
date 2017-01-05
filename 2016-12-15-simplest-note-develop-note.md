---
layout: post
title: SimplestNote开发记录
category: 知识库
date: 2017-01-06
---

[github](https://github.com/zYeoman/SimplestNote)

## 起源
大一暑假暑期实践的时候去某公司学习了一下android开发，然后当时就写了一个名叫Baidu的笔记APP。只有添加、查看和删除全部三个功能。这个APP存在在我两部手机上。最近使用了一下发现意外的好用啊，如果作为纯粹的日常事项记录的话，能够显著改善记录以后就一直存在那里从来不会去看第二遍的问题。因为只有一下子删除全部的功能，每日日记以后就立即销毁，所以只能每天把记录的小细节都转移到类似onenote的工具上，算是一个督促自己日记的工具吧。但是那是用adt开发的，同时基于Android 4.4。虽然功能还不错，但是太丑了啊。因此萌生了用Android Studio重写的冲动。

### 准备
有着超快网速的代理和至少8G内存和Android Studio。

## 进展
需要实现的功能不多，基本上就是数据库文件创建、表创建、查找、删除以及内容显示而已。

### 更新
* 返回、退出自动添加input内内容。通过实现EditText类并重写`onBackPressed`函数实现。
* 删除两个Activity，只留下一个主要的。一个输入框下面直接是ListView
* 删除FloatingActionButton。添加只需软键盘“下一项”即可，删除可以使用setting的功能。
* 增加分享到功能。
* 使用onWindowFocusChanged函数和Timer来实现打开后自动弹出IME软键盘的功能。

### 新建项目
打开android studio，新建项目，新建空白项目。

    Tips: 名字随便取，company domain随便取，Minimum SDK选API21，Empty Activity然后直接finish。

创建完成后主要需要修改的就是`MainActivity.java`文件。一般情况下里头都有一个onCreate函数，基本上（我要写的简单应用）就只需修改这里的内容就可以了。布局文件是`res/layout/content_main.xml`

    Tips：在布局文件`design`选项卡添加控件和修改id后，在java文件里可以用类似`Button mButton = findViewById(R.id.yourid)`的方式获得该控件的对象。使用`alt+return`自动cast。

### 数据库操作
这里就是让我折腾了一个下午的地方，最终还是没有避免新建一个类的结局。

    Tips：可以直接在`MainActivity.java`新建类，然后利用warning信息自动把新建的类移动到新文件里。（方便快捷的解决方案）

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
                FeedEntry.COLUMN_NAME_TITLE + " TEXT," +
                FeedEntry.COLUMN_NAME_SUBTITLE + " TEXT )"
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
    public static final String COLUMN_NAME_TITLE = "content";
    public static final String COLUMN_NAME_SUBTITLE = "time";
}
```

其他数据库操作基本都是`db.execSQL`这个样子的。

### 布局
一共有两个Activity，新建Activity只要File-New-Activity即可。

一个Activity用于添加Note，另一个用于展示Notes。添加Note的Activity里有一个新版的TextInputLayout，自带各种动画效果。展示Note使用ListView。同时按钮使用github上搜索到的FloatingActionButton库。只需要在app的`build.gradle`里的dependencies里添加`compile 'com.molnykov:floatingactionbutton:1.3.0'（[地址](https://github.com/makovkastar/FloatingActionButton)）即可。真是方便啊。

![MainActivity](https://ooo.0o0.ooo/2016/12/16/5853fe29948a2.png)

![ShowActivity](https://ooo.0o0.ooo/2016/12/16/5853fe81603c0.png)

### ListView
ListView需要`setAdapter`连接数据库

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

    Tips：输入框自动换行以及回车自动添加的奇技淫巧：EditText布局文件里添加`android:singleLine="true"`同时在`onCreate`函数里添加`input.setHorizontallyScrolling(false);input.setMaxLine(Integer.MAX_VALUE);`

    Tips: Icon使用 [icons-launcher](http://romannurik.github.io/AndroidAssetStudio/icons-launcher.html) 生成
