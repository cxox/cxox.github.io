# 操作系统基本原理

## 概述

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210128210237220.png" alt="image-20210128210237220" style="zoom:50%;" />



<img src="basicPrinciplesOfOperatingSystem.assets/image-20210128210448049.png" alt="image-20210128210448049" style="zoom:50%;" />



## 进程管理

### 进程的状态

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210128210618230.png" alt="image-20210128210618230" style="zoom:50%;" />

### ==前驱图==

-   可以知道哪一些操作可以同步进行,以及操作的顺序


<img src="basicPrinciplesOfOperatingSystem.assets/image-20210128213037416.png" alt="image-20210128213037416" style="zoom:50%;" />

### 进程的同步与互斥

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210128213303117.png" alt="image-20210128213303117" style="zoom:50%;" />

互斥:不能同时使用资源
同步:可以同时使用资源

### ==PV操作==

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210128213832518.png" alt="image-20210128213832518" style="zoom:50%;" />

P 为 阻塞、加锁，当信号量不足是阻塞进程
V 为 唤醒、解锁，当信号量充足是唤起进程

==PV操作以及这里学的,不少东西都是一种思维方式,要认真学!!!==

### 进程的死锁问题

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129160948041.png" alt="image-20210129160948041" style="zoom:50%;" />

最少：  5个 // 一个一个完成
最多：13个 // 所有的都一起做，都差一个，再加一

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129161832539.png" alt="image-20210129161832539" style="zoom:50%;" />

有序资源分配法：资源的利用率比较低

银行家算法：分配资源的原则（放贷）

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129162326509.png" alt="image-20210129162326509" style="zoom:50%;" />

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129163520364.png" alt="image-20210129163520364" style="zoom:50%;" />
答案：B
<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129163706820.png" alt="image-20210129163706820" style="zoom:50%;" />



## 存储管理

### 分区存储组织

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129164931967.png" alt="image-20210129164931967" style="zoom:50%;" />

最佳适应算法缺点：会产生大量的碎片

### ==段页式存储==

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129165414824.png" alt="image-20210129165414824" style="zoom:50%;" />

#### ==页面置换算法==

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129211721874.png" alt="image-20210129211721874" style="zoom:50%;" />

最优算法：只是满分参考而已，用来给其他算法打分，就是一个马后炮
随机算法：随即淘汰一个页，性能也是随机的
FIFO：可能会产生抖动
LRU

抖动：给的资源多了，但是性能更差了
<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129212209443.png" alt="image-20210129212209443" style="zoom:50%;" />

FIFO与LRU的比较：

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129212241730.png" alt="image-20210129212241730" style="zoom:50%;" />

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129214340022.png" alt="image-20210129214340022" style="zoom:50%;" />



## 文件管理

### ==索引文件结构==

### 文件和树形目录结构

### ==空闲存储空间的管理==

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129220442991.png" alt="image-20210129220442991" style="zoom:50%;" />



## 作业管理



## 设备管理

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129220713852.png" alt="image-20210129220713852" style="zoom:50%;" />

### 虚设备与SPOOLING技术

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129221252138.png" alt="image-20210129221252138" style="zoom: 67%;" />



## 微内核操作系统

<img src="basicPrinciplesOfOperatingSystem.assets/image-20210129221538686.png" alt="image-20210129221538686" style="zoom:50%;" />

