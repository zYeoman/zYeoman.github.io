---
layout: post
title: 简化 markdown 中的贴图流程
category: 法
tags:
  - 原创
  - jekyll
  - markdown
date: 2017-04-07
create: 2015-12-03
---

## 更新方法
使用 ShareX，一些上传[插件](https://github.com/ShareX/CustomUploaders)

我用的是 [sm.ms](https://sm.ms)，注意要修改插件把`ssl`选项改为`true`

-------
以下方法已弃用

方法主要来自[这里](http://tianweishu.com/2015/10/16/simplify-the-img-upload-in-markdown/)

<!-- more -->

看到了 weishu 上面那个 Blog 以后，想要在 windows 下实现。于是就照着来了。

## 截图
这里不是用什么截图工具，而是使用安装电脑版微信自带的一个 DLL，在`C:\Program Files (x86)\Tencent\WeChat\PrScrn.dll`，使用 Autohotkey 新建一个热键

```
^!a::
h := DllCall("C:\Program Files (x86)\Tencent\WeChat\PrScrn.dll\PrScrn")
if ErrorLevel
  MsgBox %ErrorLevel%
return
```

以上是实现`Ctrl+Alt+A`快捷键截图，调用 DLL 中的 PrScrn 截图。安装 QQ 时也会带类似的 DLL，实际上，任何带有截图功能的工具都应当有类似的 DLL。

使用 DLL 的主要原因是不想另外安装软件。

## 上传
使用七牛空间，未验证身份证的体验用户也有免费 3G 的空间，简直业界良心。使用七牛的 Python SDK，代码与[这里](http://tianweishu.com/2015/10/16/simplify-the-img-upload-in-markdown/) 是一样的，里头加了一句 print，在后面有用。

```python
def upload_qiniu(path):
    ''' upload file to qiniu'''
    dirname, filename = os.path.split(path)
    key = 'markdown/%s' % filename  # upload to qiniu's markdown dir

    token = q.upload_token(bucket_name, key)
    ret, info = put_file(token, key, path, check_crc=True)
    os.remove(path)
    print 'http://7xkunb.com1.z0.glb.clouddn.com/%s' % key,
    return ret is not None and ret['key'] == key
```

访问剪贴板：Python 在 Windows 访问剪贴板获取剪贴板里的图片可以使用`PIL`库里的`ImageGrab`里`ImageGrab.grabclipboard()`函数

```python
def get_image():
    '''get Image from clipboard'''
    im = ImageGrab.grabclipboard()
    if im is not None:
        now = int(time.time() * 1000)
        filename = '%s.png' % now
        filepath = 'D:/t/%s' % filename
        im.save(filepath)
        return filepath
    else:
        return False
```

## 地址

因为在上传函数里有 print 语句，所以地址完全可以用`upload.py | clip`来复制到剪贴板上。

使用 Autohotkey 代码为

```py
^!v::
runwait,cmd /c E:\6script\imageupload.py | clip,,Hide
Send ^v
return
```

注册`Ctrl+Alt+v`复制地址。

