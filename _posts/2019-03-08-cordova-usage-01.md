---
layout: post
title: cordova使用教程【1】——开始使用
category: 器
date: 2019-03-08 17:16:54 +0800
create: 2019-03-08 16:32:11 +0800
tags: 
  - 教程
ref: https://cordova.apache.org/docs/en/latest/guide/cli/index.html
---

- TOC
{:toc}

## 安装CLI
1. 首先需要安装`nodejs`和`npm`。
2. 使用`npm`安装`cordova`。在windows上不需要`sudo`
   ```sh
   sudo npm install -g cordova
   ```

## 创建第一个App
```sh
cordova create apppath com.example.hello AppClassName
```

### template
可以使用`--template`选项来从`template`创建新APP[^1]。例如`cordova create rizi com.mickir.app.rizi RiZi --template cordova-template-framework7-vue-webpack`。

### 文件结构
```
myapp/
|-- config.xml
|-- hooks/
|-- merges/
| | |-- android/
| | |-- windows/
| | |-- ios/
|-- www/
|-- platforms/
| |-- android/
| |-- windows/
| |-- ios/
|-- plugins/
  |--cordova-plugin-camera/
```
`www`文件夹包含项目文件，包括`index.html` `js/index.js`等等，但是使用`cordova-template-framework7-vue-webpack`以后，`www`目录会自动从`src`目录生成。

## 添加平台
创建新app后，进入app目录，可以通过`cordova`工具添加新平台，例如：
```sh
cordova platform add ios
cordova platform add android
cordova platform add browser
# ...
cordova platform ls
```
在添加完新平台后，可以测试平台支持。例如：
```
$ cordova requirements
Requirements check results for android:
Java JDK: installed .
Android SDK: installed
Android target: installed android-19,android-21,android-22,android-23,Google Inc.:Google APIs:19,Google Inc.:Google APIs (x86 System Image):19,Google Inc.:Google APIs:23
Gradle: installed

Requirements check results for ios:
Apple OS X: not installed
Cordova tooling for iOS requires Apple OS X
Error: Some of requirements check failed
```

* [Arch linux 安装android sdk](./2019-03-08-archlinux-android-sdk.html)，注意android gradle.build需要进行修改，`patch -p0 < android.patch`[^2]。
* [iOS配置要求](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#requirements-and-support)
* [Windows配置要求](https://cordova.apache.org/docs/en/latest/guide/platforms/windows/index.html#requirements-and-support)

## APP构建
```sh
cordova build
```
即可为所有平台执行构建。
| Option | Description |
| --- | --- |
| `<platform> [..]` | 构建目标平台，未指定时为所有平台构建|
| \--debug | Debug构建|
| \--release | Release构建|
| \--device | Build it for a device |
| \--emulator | Build it for an emulator. |
| --buildConfig=`<configFile>` | 默认使用根目录的`build.json` |
| \--browserify | Compile plugin JS at build time using browserify instead of runtime |
| `<platformOpts>` | To provide platform specific options, you must include them after`--`separator. Review platform guide docs for more details. |

## APP测试
### 使用虚拟机测试
```sh
cordova emulate android
```
### 使用真机测试
```sh
cordova run android
```
### 在网页上测试 - 推荐！
```sh
cordova run browser
```

## 添加插件
[插件列表](https://cordova.apache.org/plugins/)，包括存储、拍照等等插件。
```sh
cordova plugin add cordova-plugin-camera
```



[^1]: https://www.npmjs.com/search?q=cordova%3Atemplate
[^2]: https://gist.github.com/zYeoman/f037d91bddd764d820932e7e66c03fdf