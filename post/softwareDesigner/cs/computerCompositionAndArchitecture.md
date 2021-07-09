# 计算机组成与体系结构

视频地址 => <https://www.bilibili.com/video/BV1rW411j7e7>

==等待学习内容 -> 去网上(Baidu/Google)学习==

## 数据的表示

### 进制

- R进制转十进制
按权展开:例如二进制 10010=>1*2^4+1*2^1
- 十进制转二进制
短除法:其实就是按权展开的逆运算
- 2,8,10,16四种进制在16之内的相互转换要熟记
二进制|八进制|十进制|十六进制
-|-|-|-
0000|00|00|0
0001|01|01|1
0010|02|02|2
0011|03|03|3
0100|04|04|4
0101|05|05|5
0110|06|06|6
0111|07|07|7
1000|10|08|8
1001|11|09|9
1010|12|10|a
1011|13|11|b
1100|14|12|c
1101|15|13|d
1110|16|14|e
1111|17|15|f
- 原码,反码,补码,移码
    - 原码:(用于表示)
        - **正数**:就是正常的二进制数
        - **负数**:首位为 1
    - 反码:(用于过度)
        - **正数**:就是正常的二进制数
        - **负数**:首位为 1,其余按位取反
    - 补码:(用于计算)
        - **正数**:就是正常的二进制数
        - **负数**:首位为 1,反码加一
    - 移码:(用于浮点计算,比补码更接近人类理解,1为正):
    	- 补码首位取反
- 浮点数
- 计算方法
对阶(阶数相同,低的往高的变)=>尾数计算=>结果格式化(首位为1)

## 计算机结构

硬盘,显卡等都是外设!不包含在计算机结构中

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709200902.png" alt="image-20210203152501739" style="zoom:67%;" />

- CPU
    - 运算器
        - 运算逻辑单元(ALU)
        - 累加寄存器(AC)
        - 数据缓冲寄存器(DR)
        - 状态条件寄存器(PSW)

    - 控制器
        - 程序计数器(PC)
        - 指令寄存器(IR)
        - 指令译码器
        - 时序部件

- 主存储器

## 计算机体系结构分类 -Flynn分类法

- 体系结构类型
    - SISD:单指令流单数据流
    - SIMD:单指令流多数据流
    - MISD:多指令流单数据流
        - 被证明不可能
    - MIMD:多指令流多数据流
    <img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709200914.png" alt="flynn" style="zoom:67%;" />

## CISC & RISC

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709200918.png" alt="ciscRisc" style="zoom: 67%;" />

## 流水线

程序执行时多条指令重叠进行操作

指令的执行:
- 指令的执行:  
    取值 -> 分析 -> 执行

- **非流水线** 执行过程:  
    过程|1|2|3|4|5|6
    -|-|-|-|-|-|-
    取指|1|||1||
    分析||2|||2|
    执行|||3|||3

- **流水线** 执行过程:
    过程|1|2|3|4|5|6
    -|-|-|-|-|-|-
    取指|1|2|3|1||
    分析||2|3|1|2|
    执行|||3|1|2|3

### 流水线的 **周期**

指令执行事件最长的一段

### 流水线 **时间** 计算公式

1条指令执行时间 + ( 指令条数 - 1 ) * 流水线周期

### 流水线的吞吐率( Though Put rate, TP )计算:

- TP = 指令条数 / 流水线执行时间
流水线最大吞吐率
- TPmax = 1 / 流水线周期

### 流水线的加速比

s = 不使用流水线的时间 / 使用流水线的执行时间

### 流水线的效率

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709200923.png" alt="image-20210127221550726" style="zoom:67%;" />

n个任务占用的时区=>$ 4 \times (\vartriangle{t}+\vartriangle{t}+\vartriangle{t}+3\vartriangle{t}) $

k个流水段的总的时空区=>($15\vartriangle{t}$ * 4) = 60 * t



## 层次化存储结构

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709200928.png" alt="image-20210127223620368" style="zoom:67%;" />

### 存储器的层次结构

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709200931.png" alt="image-20210203152852105" style="zoom:67%;" />

### Cache

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709200938.png" alt="image-20210127224602920" style="zoom:67%;" />

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709200943.png" alt="image-20210128155039791" style="zoom: 67%;" />



### 局部性原理

- 时间局部性
  - 与循环有关
  - 一条指令被执行了，则不久后可能再次被执行
- 空间局部性
  - 与数组有关
  - 某一存储单元被调用，在一定时间内，与它相邻的单元可能被使用
- 工作集理论:
  - 工作集是进程运行时被频繁访问的页面的集合

### 主存

#### 分类

1. 随机存取存储器
   1. DRAM(Dynamic RAM ,动态存储器)
   2. SRAM(Static RAM ,静态)
1. 只读存储器	
	1. MROM(Mask ROM ,掩膜式ROM)
	1. PROM(Programmable ROM .一次可编程 ROM)
	2. EPROM(Erasable PROM ,可擦除的 PROM)
	3. 闪速存储器(dlash memory ,闪存)

#### 编址

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709200950.png" alt="image-20210128181639382" style="zoom: 67%;" />

(1)B
	C&FFFH + 1 - ACOOOH = 1C000H = 112k

(2)A
$$
\begin{align}
112 \times 16 & = 28 \times 16 \times x \\
         => x & = 4
\end{align}
$$
[计算机基本原理之内存编址](https://blog.csdn.net/u010924834/article/details/45620787)

### 磁盘结构与参数

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709200952.png" alt="image-20210128195149743" style="zoom: 67%;" />

题目:

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709200956.png" alt="image-20210128200800942" style="zoom:67%;" />

## 总线

根据所处的位置不同,总线通常被分成三种类型,分别是:

1. **内部总线** : 微机内部外围芯片与处理器之间的总线,芯片级别
2. **系统总线** : 微机中插件板与系统板之间的总线
   1. 数据总线
   2. 地址总线
   3. 控制总线
3. **外部总线** : 微机和外部的总线

## 系统可靠性分析与设计

### 串联系统与并联系统

- **串联系统**
  - 可靠度=>单机的可靠度相乘
  - 失效率(近似的,不准确的)=>单机的失效率相加
- **并联系统**
  - 可靠度
  - 失效率=> 1 - 可靠度

### 模冗余系统与混合系统

**R** : 可靠度

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709201001.png" alt="image-20210128203513870" style="zoom:50%;" />

$ R \times (1-(1-R)^3) \times (1-(1-R)^2) $

## 差错控制 - CRC与海明校验码

- ==循环校验码CRC==
- ==海明校验码==

