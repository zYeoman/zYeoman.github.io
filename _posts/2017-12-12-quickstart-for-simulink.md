---
layout: post
title: Simulink快速入门
category: 用
tags:
  - 转载
  - matlab
date: 2017-12-13 17:33:41 +0800
create: 2017-12-12 16:08:44 +0800
ref: https://www.mathworks.com/videos/introduction-to-simulink-82514.html
---

- toc
{: toc}

Matlab 仿真工具Simulink是一个非常好用的仿真工具箱。
![信号处理](https://i.loli.net/2017/12/13/5a30f30a222ba.gif)

## Simulink是什么

Simulink是一个动态系统建模仿真和分析的环境，由Mathworks公司开发，与MATLAB深度集成。它可以对时变系统进行精确设计，实现通讯系统、控制系统、信号处理系统和图像处理系统的实现和测试。它有多种预定义的模块库，同时提供了嵌入式的仿真测试工具，代码生成工具，与MATLAB的深度集成。

## Simulink使用

可以在MATLAB中直接键入`Simulink`来启动Simulink（也可以通过MATLAB上的按钮启动）。打开Simulink后的界面（R2016a）如下图。

![Simulink主界面](https://i.loli.net/2017/12/12/5a2f9e86064d9.png)

可以看到Simulink有着丰富的预定义模板和Examples，工具箱包括DSP System Toolbox、Embedded Coder、Fixed-Point Designer、HDL Coder、Computer Vision System Toolbox、Robotics System Toolbox以及Communications System Toolbox等等。学习Simulink可以通过下载Examples中的例程熟悉并测试，也可以查看Mathworks公司提供的教程。

下面通过[ref](https://www.mathworks.com/videos/introduction-to-simulink-82514.html)的一个DEMO来感受一下Simulink的强大威力！

## DEMO

### 最简单的Demo

在Simulink主菜单中新建一个Blank Model ![Blank Model](https://i.loli.net/2017/12/12/5a2fa0e391bbb.png)

在新窗口中选择Tools→Library Browser打开模块浏览器。

![Tools](https://i.loli.net/2017/12/12/5a2fa132a4252.png)

在模块浏览器中搜索`Sine Wave` `Integrator` `Scop`等模块并添加，当然，如果对模块浏览器很熟可以不必搜索，直接点击当前窗口的空白处键入模块名即可（如下图）。在空白处双击可以添加文字。

![直接键入模块名](https://i.loli.net/2017/12/12/5a2fa2f6ce937.png)

通过箭头将三个模块连接起来得到一个最简单的Demo系统，可以双击模块来修改模块参数，双击Scop模块查看示波器显示。

![最简单的Demo](https://i.loli.net/2017/12/12/5a2fa434ad9cb.png)

当然，看到的示波器结果显然是一个$$-\cos(x)$$

### 非线性、噪音、并行化、采样

添加一些非线性的内容，可以通过加入`saturation`饱和模块来限位，或者添加`Band-Limited White Noise`带通白噪声信号提供噪声。

由于Simulink和MATLAB是高度集成的，所以在Simulink里也可以很方便地使用MATLAB的并行化特点，例如如果我们想要得到初始信号的10个不同比例放大的信号分别执行，可以在数据流中加入一个放大器`gain`模块，设置`gain`为`1:10`，即可得到1..10倍放大信号。

模块属性可以直接引用MATLAB工作区的变量
{: .notice}

通过在数据通路中添加一个`Zero-Order Hold`零阶保持器来得到时间离散信号。

最终数据通路和结果如下图

![非线性、噪音、并行化、采样](https://i.loli.net/2017/12/12/5a2fc79db2806.png)

可以通过右键Scope界面`Configuration Properties`设置输入端口和图形化的Layout
{: .notice}

### 自定义模块

当然，Simulink是支持自定义模块的，添加`MATLAB Function`（旧版里为`Embeded Matlab`）模块，双击该模块可以进入代码编辑器，编辑函数。

这里使用的代码是均方根函数

```matlab
function y = fcn(u)
%#codegen

y = sqrt(sum(u.*conj(u)))/size(u,1);
```

直接保存以后即可运行查看结果。

![自定义模块](https://i.loli.net/2017/12/12/5a2fc9e1f0af8.png)

### 模块组合和引用

#### 组合

直接选中需要组合的模块们`Ctrl+G`或者右键`Create Subsystem from Selection`就可以获得一个子系统，此时双击此子系统即可进入内部查看子系统内部连接。

生成的子系统会自动生成合适的输入输出端口
{: .notice}

更进一步，如果想要子系统拥有自己的变量空间，可以通过`Ctrl+M`或者右键Mask→Create Mask来对子系统进行封装。封装之后的子系统就可以不使用MATLAB变量空间里的变量了。

下图是子系统设置页面，`Icon drawing commands`可以设置子系统封装的外观，这里是子系统的`peaks`信号响应。在第二个标签页可以设置子系统的变量，设置了这个变量以后双击子系统打开的就是变量设置页面。在最后一个标签页可以设置子系统的Doc。

总是可以使用右键`Open`打开子系统内部视图
{: .notice}

![封装界面](https://i.loli.net/2017/12/12/5a2fcd0b6abb4.png)

#### 引用

所谓引用，即引用别人做好的一个Model。可以通过添加一个`Model(Model Reference)`模块来实现。最终功能与子系统类似，但是运行时间要比子系统慢，因为运行时会自动将model复制进来。

### 定点处理

可以通过打开Subsystem，双击自动生成的输入端口来设置定点化。如下图，选择第二个标签页，`Data type`有很多选项，这里可以选择`fixdt(1,16)`16位定点数，通过上面的`Minimum`和`Maximum`来设置数据范围，`Data type`右边的`>>`按钮可以进行定点数的更进一步的设计。

仿真时类型不匹配可以通过添加`Data Type Conversion`模块，这个模块会自动匹配输入输出的数据类型。

通过Display→Signals & Ports→Port Data Types可以在每条数据通路上显示`Data type`
{: .notice}

Display里还可以显示处理时序、速度等更多信息
{: .notice}

![定点端口](https://i.loli.net/2017/12/12/5a2fcfcb8493b.png)

### 快捷操作

* 滚轮缩放
* 按住滚轮拖动
* 连接线会自动连接
