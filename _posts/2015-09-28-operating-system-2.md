---
layout: post
title: 操作系统2——进程与线程
categories: 操作系统 笔记
date: 2015-09-28 16:19:22
---

这也是操作系统处理机管理的部分。

<!-- more -->

## 进程的定义描述

* 进程的概念：进程是操作系统中最核心的概念，操作系统其他所有内容都是围绕进程概念展开的；
    * 程序的顺序执行和并发执行
    * 进程的定义和描述
    * 进程的状态

程序的顺序执行和并发执行：顺序执行有着顺序性、封闭性和可再现性的美好的性质，可惜没有效率；并发执行间断、失去了封闭性和可再现性（外界环境影响），但是它效率高啊！而且顺序执行显然不物理，没有人是顺序执行的。。。

并发执行的程序，会共享系统资源，用程序是不能方便描述的，于是就引入了进程的概念，用于描述程序执行时动态特征。通常，OS核心不是一个进程。

进程的特征包括：动态性、独立性、并发、异步、交互、结构化等等。

* 进程与程序的区别：
    * 进程是动态的，程序是静态的
    * 进程是暂时的，程序是长久的
    * 进程与程序的组成不同：进程包括程序、数据和进程控制块
    * 对应关系：一个程序可对应多个进程（多次执行）；一个进程可包括多个程序（调用）



* 进程控制块（PCB）：操作系统管理和控制进程的一个专门数据结构，记录进程的外部特征，描述进程的运动变化过程；PCB是系统感知进程存在的唯一标识，同时PCB与进程也是一一对应的。
    * 内容包括进程描述信息、进程控制信息、资源占用信息、CPU现场保护信息
        * 进程描述信息：PID，进程名、用户标识符、进程组
        * 进程控制信息：当前状态、优先级、代码执行入口地址、程序外存地址、运行统计信息（执行时间、页面调度）、进程间同步和通信、阻塞原因
        * 资源占用信息：虚拟地址空间的现状和打开文件列表
        * CPU现场保护信息：寄存器值（通用、PC、PSW、地址包括栈指针），指向赋予该进程的段/页表的指针
    * PCB表的组织方式：系统把所有PCB组织在一起放在内存固定区域，就构成了PCB表，或者进程表；大小决定了最多可同时存在的进程个数
        * 链接结构：统一状态PCB构成一链表，例如阻塞链表、就绪链表
        * 索引结构：同意状态进程归入一个index表，例如就绪索引表、阻塞索引表
* 进程映象：用户程序、数据、堆栈、PCB
* 进程上下文：对进程执行活动全过程的静态描述。由进程的用户地址空间内容，硬件寄存器内容以及相关的核心数据结构组成
    * 用户级上下文：进程的用户地址空间，包括用户正文段、数据段和用户栈
    * 寄存器级上下文：程序寄存器、处理机状态寄存器、栈指针、通用寄存器的值
    * 系统及上下文：静态部分（PCB和资源表格）、动态部分（核心栈）
* OS和进程的关系
    * UNIX：OS作为进程地址空间的一部分
    * Windows NT：OS功能分别在核心和系统服务进程中，只有OS核心作为进程地址空间的一部分。

### 实例：Linux进程控制块
在Linux内核中，所有进程用一个双向循环链表联系起来形成一个**进程链表**，链表的前后指针为PCB中的`struct list_head tasks`中的`prev`和`next`成员，表头为`init_task`进程控制块。


## 线程模型
每个进程内部有一个或多个线程。

* **多线程** 特指一个进程内部可以有多个线程
* 线程共享进程的地址空间和资源
* 多个线程可以共同完成一个任务。
* 多线程——每个线程有自己的头(TCB)，每个线程有其自己的(用户和内核)栈(自己的局部变量、函数、传递参数)

### 进程与线程的比较
* 地址空间和其他资源：进程间相互独立，线程共享部分资源
* 通信：线程相互通信无须调用内核(IPC)
* 调度：线程调度(创建、结束、同进程间切换)开销小
* 缺点：在程序设计模型中引入复杂性

### 线程应用实例
* 字处理程序
    * 输入——分析——字/命令(存盘/...)/...——输入。如果单线程存盘则会阻塞，然后`***.exe未响应`，多线程则不会发生这种问题。
* 多线程Web服务器
    * 用户请求——在内存取出——若不在内存则从硬盘读取到内存——返回...。同样是硬盘读取阻塞

## 线程实现机制

### 用户级线程(ULT)
* 由应用程序完成所有线程管理，与操作系统无关
* 线程切换不需要核心态特权，并且是应用特定的
* POSIX的pthread多线程编程接口
* 线程在一个运行时系统上运行
    * 线程库(运行时系统)：创建撤销线程、线程之间传递消息和数据、调度线程执行、保护和回复线程上下文
* 每个进程有专用线程表
* 内核活动：操作系统内核不知道线程，依然管理进程；线程调用系统调用时，整个进程阻塞；对线程库来说，线程仍然是运行状态，即线程状态和进程状态是独立的。
* 优点
    * 切换不需要内核，性能良好
    * 调度是应用程序特定的，可针对应用优化
    * 任何操作系统上运行
* 缺点
    * 调度非抢先、简单
    * 系统调用阻塞所有线程
    * 内核只将处理器分给进程

### 内核级线程
* 由内核管理，没有线程库但有API
* 内核维护线程，以线程为单位调度
* 不需要线程库线程表，内核有总线程表
* 优点
    * 多处理器，内核可以同时调度多个线程
    * 阻塞是在线程一级完成的
    * 内核例程是多线程的
* 缺点：同一进程内的线程切换调用内核，导致性能下降

### 混合实现
使用内核级线程，将用户级线程与某些或者全部内核级线程复用起来

## Windows线程
Windows支持内核级线程，进程什么都不执行，只有4GB的地址空间用来存放应用程序需要的代码数据DLL等。

* 进程是惰性的，必须至少有一个线程来负责执行包含在地址空间中的代码
* 多线程，都在地址空间中并发
* 每个线程有自己的CPU寄存器组和栈
* 第一个线程自动创建

### 线程状态
* 就绪状态：已获得除处理机以外的资源，等待执行。选择执行->备用态
* 备用状态：已选择好处理器，等待上下文切换。每个处理器只有一个备用态线程。
    * 抢先->就绪
    * 上下文切换->运行
* 运行状态：直到内核抢先、线程终止、时间片用完或进入等待
    * 等待对象句柄->等待状态
    * 抢先或执行结束->就绪态
    * 执行完成->终止
* 等待状态：等待某事件发生，结束后根据优先级进入运行、就绪态
    * 等待完成->就绪或运行
    * 换出的内核堆栈->过渡
* 过渡状态：准备执行且内核堆栈处于外存
    * 内核堆栈调入内存->就绪
* 终止：重新初始化->初始化
* 初始化：线程创建过程中的线程状态
    * 放入就绪队列->就绪

### API
* `CreateThread()`：创建线程
* `ExitThread()`：退出线程
* `SuspendThread()`：挂起指定线程
* `ResumeThread()`：挂起倒计时

```c
#include <windows.h>
#include <stdio.h>

#define MAX_THREAD 3

typedef struct _MyData{
    int val1;
    int val2;
}MYDATA, *PMYDATA;

DWORD WINAPI ThreadProc(LPVOID lpParam){
    PMYDATA pData;
    pData = (PMYDATA)lpParam;
    printf("This is Thread %d, the Parameter is %d\n", pData->val1, pData->2);

    HeapFree(GetProcessHeap(), 0, pData);

    return 0;
}

void main(){
    PMYDATA pData;
    DWORD dwThreadId[MAX_THREAD];
    HANDLE hThread[MAX_THREAD];
    int i;

    for(i=0; i<MAX_THREAD; i++ ){
        pData = HeapAlloc(GetProcessHeap(), HEAP_ZERO_MEMORY, sizeof(MYDATA));

        if(pData==NULL)
            ExitProcess(2);

        pData->val1 = i;
        pData->val2 = i+100;
        hThread[i] = CreateThread(
            NULL,
            0,
            ThreadProc,
            pData,
            0,
            &dwThreadId[i]);
        if(hThread[i]==NULL)
            ExitProcess(i);
    }
    
    WaitForMultipleObjects(MAX_THREAD, hThread, TRUE, INFINITE);

    for(i = 0;i<MAX_THREAD;i++)
        CloseHandle(hThread[i]);
}

```

## POSIX线程
pthread线程库调用

开头

```c++
#define _REENTRANT
#include <pthread.h>
```

并编译时使用`-lpthread`选项连接

## Linux线程
实现线程机制非常独特。从内核角度，只有进程没有线程，线程仅仅被视为共享资源的进程

实现线程使用一个新的系统调用`sys_clone()`

## 进程间通信问题
* 进程如何传递信息
* 保证对共享资源访问不引起冲突
* 保证正确的操作顺序——互斥与同步问题

> 共享资源访问冲突例子：
> 飞机订票系统，两个终端运行T1 T2，冲突x>=1 x-=1然后最后一张票卖出了
两张。
>
> 操作顺序冲突：三个进程get,process,print只有顺序进行才是对的。

进程间关系
* 竞争——互斥：相互不感知，独占分配到的资源
* 通过共享进行协作——同步：间接感知，等待来自其他进程信息
* 通过通信进行协作——通信：直接感知，一个结果依赖于其他进程信息

概念
* 竞争条件：两个或多个进程访问共享资源，最终结果取决于进程运行的
精确时序
* 临界资源：共享的软件或硬件，多个进程对其进行访问(写入或修改)，必须互
斥地进行

代码分区
* 进入区：检查是否可以进入临界区的代码，进入后设置“正在访问临界区标志”
* **临界区** ：进程中访问临界资源的代码片段
* 退出区：清除“正在访问临界区”标志
* 剩余区：剩余部分

解决互斥问题条件
1. 任何两个进程不能同时处于临界区
2. 不能对CPU速度和数量有任何假设
3. 临界区外进程不能阻塞其他进程
4. 不得使进程无限期等待进入临界区

目的：避免竞争条件

### 几种算法
* 禁止中断：进入临界区前关中断，离开临界区后开中断。简单但是把禁止中断
权利交给用户进程导致可靠性差，同时不适用多处理器违反 *条件2*
* 锁变量：共享锁变量lock，为0无进程在临界区，1有进程在临界区。可能违反
*条件1* ，忙等待。
    * 忙等待：连续测试一个变量知道出现某个值为止。
    * 浪费CPU时间。
    * 用于忙等待的锁，称为自旋锁。
* 严格轮转法：整型变量turn记录轮到那个进程进入临界区。要求严格轮流进入
临界区，可能违反*条件3*。忙等待
* Peterson算法
    * 当一个进程想进入临界区，调用enter_region函数
    * 进程从临界区退出，调用leave_region函数
    * 可以正常工作，还有忙等待
```c
#define FALSE   0
#define TRUE    1
#define N       2

int turn;
int interested[N];

void enter_region(int process){
    int other = 1-process;
    interested[process] = TRUE;
    turn = process;
    while(trun==process && interested[other]==TRUE);
}

void leave_region(int process){
    interested[process] = FALSE;
}
```

* 硬件指令方法；利用处理机提供的专门硬件指令，对一个字的内容进行检测和
修改。解决共享变量的完整性和正确性——读写操作由一条指令完成，保证读操作
和写操作不被打断
    * 测试并设置指令(X86)
        * `BTS OP1 OP2`：OP1的第OP2位保存到标志寄存器，并将被测试位置1
        * `BTR OP1 OP2`：OP1的第OP2位保存到标志寄存器，并将被测试位置0
        * TS指令(其中LOCK用于锁内存总线)：
            ```
            enter_region:
                LOCK BTS lock,0
                JS enter_region
                RET
            leave_region:
                LOCK BTR lock,0
                RET
            ```
    * 仍然忙等待
    * 优点：适用任意数目进程、简单易验证、支持多个临界区

* Peterson和硬件方法都是正确的，但是忙等待；而且可能造成优先级反转（L
在临界区，H就绪开始忙等待，L优先级低出不来临界区。死锁了）
* 信号量算法：每个信号量s有一个整数值s.count(计数)，有一个进程等待队列
s.queue，队列中阻塞在信号量上的哥哥进程标识
    * s.count：大于零表示有多少个资源可用，等于零表示无资源可用，小于零
    表示等待队列中进程个数。*资源信号量*。如果不需要计数，只用于互斥访问，
    则称为*互斥信号量*
    * P，V原语：P表示申请一个资源，使信号量减1，信号量小于零则被阻塞不
    能进入临界区；V表示释放一个资源，信号量增一，若不大于零则唤醒一个被
    阻塞的进程。
    * 代码 

    ```c
P(s){
    --s.count;
    if(s.count<0){
        //调用进程进入等待队列s.queue;
        //阻塞调用进程
    }
}
V(s){
    ++s.count;
    if(s.count<=0){
        //从等待队列s.queue取出一个进程P 
        //进程p进入就绪队列
    }
}
    ```

    * 要求必须成对使用P和V原语，次序不能错误重复或遗漏

### 信号量使用
* 实现进程间同步
    * 并发进程P1和P2中有代码C1和C2，要求C1在C2之前完成——*前趋关系*
    * 为每个前趋关系设置一个互斥信号量S12，*初始值为0*
    * C1后V(S12)，C2前P(S12)
* 生产者——消费者问题
    * 若干进程通过有限共享缓冲区交换数据。生产者进程不断写入，消费者进
    程不断读出
    * 共享缓冲区共有n个数据单元
    * 任何时刻只能有一个进程对共享缓冲区操作
    * 两个资源信号量full初值0和empty初值n。存在关系，full+empty=n 
    * mutex访问缓冲区时的互斥，初值1
    * 生产者：`P(empty);P(mutex);生产1;V(mutex);V(full);`
    * 消费者：`P(full);P(mutex);消费1;V(mutex);V(empty);`
    * 注意：P顺序不能变
* 使用要点：
    * PV成对出现
        * 互斥操作处于同一进程
        * 同步操作在不同进程中出现
    * P(S1) P(S2)两个操作在一起时，顺序至关重要；同步P在互斥P前
    * V操作顺序无关紧要
* 信号量缺点：控制分布在整个程序中，正确性分析很困难
    * 同步操作分数：可能导致死锁
    * 易读性差
    * 不利于修改和维护
    * 正确性难以保证
* 管程：封装信号量和操作原语

### 几种算法续
* 消息传递：用于分布式系统
    * 原语：`send(destination,&message)` `receive(source,&message)`。是
    系统调用而不是语言成分
    * 问题
        * 不可靠消息传递中的成功通信问题
        * 进程命名问题
        * 身份认证问题
        * 性能问题

### 经典IPC问题
* 哲学家进餐问题（第5讲P63-64）
* 读者——写者问题：多个读者读，不允许读者写者同时操作，不允许多个写者
同时操作（第5讲P66）
* 睡眠理发师问题：（第5讲P67）

### Windows的互斥和同步机制
* 互斥对象Mutex
    * 相当于互斥信号量
    * `CreateMutex` `OpenMutex` `ReleaseMutex`
* 信号量对象Semaphore
    * 相当于资源信号量
    * `CreateSemaphore` `OpenSemaphore` `ReleaseSemaphore`
* 事件对象Event
    * 相当于设置触发器，可通知一个或多个线程某事件出现
    * `CreateEvent` `OpenEvent` `SetEvent` `PulseEvent` `ResetEvent`
* 其他方法
    * 临界区对象
        * 只能在同一进程内使用的临界区，同一进程内各线程对它的访问是互斥进行
        的
    * 互锁变量访问
        * 相当于硬件指令，对一个整数（进程内的变量或进程间的共享变量）进行
        操作。避免线程间互相切换的影响。

### POSIX互斥和同步机制
* 互斥锁mutex：几乎与Windows一样，
    * `pthread_mutex_init(destroy lock unlock)`
    * P操作是lock，V操作是unlock
* 条件变量
    * 类似Windows事件
    * 用来等待，等待条件成立而挂起，另一个线程使条件成立
* 信号量

## Linux的进程间通信
### 信号
* 信号相当于软中断
* 种类
    * 一个进程向另一个进程或进程组或自己发送：必须有相同用户ID
    * 某些键盘按键，`Ctrl+C` 中断字符`Ctrl+Z`暂停字符
    * 硬件条件：除数为0，浮点运算错误，访问非法地址等异常条件
    * 软件条件：如Socket中有加急数据到达
* 处理
    * 进程可以设置信号处理例程，接收到时被调用，称为捕获
    * 忽略指定信号
    * 内核执行默认处理例程
* 实现
    * 用一个足够宽的数据，每一位表示一个信号
    * Linux中用一个字表示所有信号，32位平台信号有32种

### 管道Pipe
