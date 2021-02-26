# md
这是vscode的快捷键,
vscode比较适合写markdown
快捷键|作用
:-:|:-:
alt + v|打开编辑栏的查看
ctrl + b|左侧列表
ctrl+shift+k|删除一行

## 列表

```md
+ 我是谁
+ 这是哪里?
+ 这个怎么样?
+ 有序列表[^1]
+ 大苏打
    1. fedfsd
    2. fsdfsD
```
+ 我是谁
+ 这是哪里?
+ 这个怎么样?
+ 有序列表[^1]
+ 大苏打
    1. fedfsd
    2. fsdfsD

## 琐碎的东西

### md文件可以使用html语句
```html
<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848402655,92542552&fm=26&gp=0.jpg">
```
两张相同的图片，不同的书写方式
- <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848402655,92542552&fm=26&gp=0.jpg">
- ![img](https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848402655,92542552&fm=26&gp=0.jpg)

### 字体
```md
*斜体*
**粗体**
***粗斜体***
```
*斜体*
**粗体**
***粗斜体***

### 引用
```md
文章引用
> 鲁迅说:"哈哈哈  
哈哈哈哈"
```
文章引用
> 鲁迅说:"哈哈哈  
哈哈哈哈"

### 代码块
```md
    ```cpp
    # include<iostream>
    // 代码块
    ```
```
```cpp
# include<iostream>
// 代码块
```

### 删除线
```md
~~你好厉害,删除线~~
```
~~你好厉害,删除线~~

### 超链接
```md
[myWeb](http://www.xoxzzz.com "cx")  
```
[myWeb](http://www.xoxzzz.com "cx")  
```md
![图片1](https://i2.hdslb.com/bfs/archive/2fbf5632f0f79daae4cac0ab7a717473d3cbb413.jpg@336w_190h.webp "Visual Studio")
```
![图片1](https://i2.hdslb.com/bfs/archive/2fbf5632f0f79daae4cac0ab7a717473d3cbb413.jpg@336w_190h.webp "Visual Studio")

### 表格
[^1]:erdsfsdasafdasf111
```md
|表格|居中|靠右|
|-|:-:|---:|
 11|12|13
 21|22|23
 31|32|33
```
|表格|居中|靠右|
|-|:-:|---:|
 11|12|13
 21|22|23
 31|32|33

最后一行是前面写的注释