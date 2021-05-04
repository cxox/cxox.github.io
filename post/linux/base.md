# linux基础

## 界面

[abc@localhost ~]$
[root@localhost /]#

- @之前时当前用户名
- @之后时机器名称
- 空格之后为当前所在的文件夹
- $结尾表示普通用户
- #结尾表示root用户

## 目录

### cd

```bash
cd / # 跳转到根目录
cd /home/abc/desktop # 根据绝对路径跳转
cd root # 根据相对路径跳转
cd - # 返回刚才的路径
# 回到家目录
cd #1
cd ~ #2
```

### pwd => 当前工作目录

### ls => list

```bash
ls /home # 显示文件夹内的文件列表
ls /home/abc/1.c # 显示文件目录，没什么作用
ls -l 1.c # 显示文件基础信息，'-l'表示'long'
ls -a # 显示隐藏文件，隐藏文件以'.'开头
ls -l -d # 显示文件夹的属性
ls -l -h # 'h'表示human，人性化显示文件的大小信息，否则就是用字节为单位
```

### mkdir => make directory

```bash
mkdir abc # 在当前目录创建
mkdir /abc # 在根目录创建
mkdir a b c # 创建多个目录
mkdir -p a/b/c # 创建多级目录
```

### rmdir => remove directory

删除空目录，基本不用这个命令

```bash
rmdir a # 删除a目录
```

## 文件

### touch 创建文件

```bash
touch a # 生成一个a文件
```

### rm 删除

```bash
rm a # 删除a文件，需要确认
rm -f a # 强制删除a文件，不需要确认
rm -r a # 删除a目录，-r表示递归
rm -rf a # 强制删除a目录，不需要确认
```

### cp 复制

```bash
cp a/b.txt c/ # 把b.txt复制到c目录下
cp -r /home /tmp # 把home目录复制到tmp文件夹下
cp -r -p /home /tmp # 复制后文件的属性（所有权，时间等）不变
```

### mv 移动

```bash
# 与cp类似
mv /home/abc/def/ /tmp # 移动文件夹不需要-r属性
# mv还用于给文件重命名
```

## 其他

### history

```bash
history # 显示命令记录
!123 # 执行历史命令中的第123条
# ↑ ↓ # 调出前后输入过的命令
```

## 通配符

```bash
* # 匹配任意数量的任意字符
? # 匹配任意单个字符
[abc] # 匹配之中的一个字符
{a,b,c} # 相当于一个列表，例如touch {a,b,c}同时创建a，b，c3个文件
```

## 文件内容操作

### cat

显示到文件最底部

```bash
cat a # 查看a文件内容
cat -n a # 查看a文件内容，带上行号
```

### more

从头开始，分页显示，只能向下看，文件显示结束自动退出

```bash
more a # 查看a文件
```

### less

从头开始，可以上下自由翻动，文件不会自动退出，需要按下q键

```bash
less a # 插件a文件
```

### head

查看文件的前几行内容

```bash
head a # 查看a文件的前几行，默认10行
head -3 a # 查看a文件的前3行
```

### tail

查看文件的最后几行

```bash
tail a # 查看a文件的后几行，默认10行
tail -3 a # 查看a文件的后3行
tail -f a # 实时显示a文件的内容,crtl+c退出
```

### wc => word count

文件内容统计

```bash
wc a # 查看a文件内容数量
wc -l a # 查看a文件有几行，’l‘表示line
```

### echo

```bash
echo 'hello' > hello # 向文件中添加字符串，没有文件就新建
echo 'world' >> hello # 向文件中追加字符串
```

### grep **正则表达式** 在文件中查收指定的内容

grep不支持 `* ?`简单的通配符 

```bash
grep 'root' /etc/passwd # 在文件中查找root字段
grep '^root' /etc/passwd # 以root开头
grep 'root$' /etc/passwd # 以root结尾
grep -n 'root$' /etc/passwd # 显示行号
grep -v 'root$' /etc/passwd # 反转查找结果
grep -i 'root$' /etc/passwd # 忽略大小写
grep -w 'root' /etc/passwd # 精确的匹配单词
grep -r 'root' /etc/ # 从指定目录向下递归查找
```
### diff =>different

```bash
diff a b # 比较a与b的不同，相同则不返回任何结果
```

## 零碎内容

### date

```bash
echo $(date +%F)
```

### $(date)

### hwclock => hardware 硬件时钟

### cal 显示日历

### stat 查看文件元数据，差不多是文件属性

### alias 起别名

```bash
alias cpw='cat /etc/passwd' # cpw后面不加空格
unalias cpw # 撤销别名
```

### > 重定向

```bash
# > 正确的信息重定向
# 2> 错误的信息重定向
# &> 所有的信息重定向
find / -name "hello" &> hello.txt
```

### | 管道操作

​	左边找到的文本给右边处理

{} 代表前面的结果

```bash
find /tmp -name "*.txt" | wc l # 统计/tmp文件夹下有多少.txt结尾的文件
```

## 文件查找

### locate

需要建立索引数据库（在系统空闲时间创建，不是实时更新），结果不准确

```bash
locate sshd_config # 全局查找名字中带有sshd_config的文件位置
```

### find

find [查找目录] [选项] [查找条件] [处理动作]

```bash
find /etc -name "*net*" # 根据文件名查找
find /etc -iname "*net*" # 名字不区分大小写
find /etc -empty # 查找空目录
find /etc -type d # 查找目录 d目录 f文件 l链接文件
find /etc -size +1M # 查找大小大于1M的文件，单位k,M,G,符号+大于，-小于
find /etc -not -size -1k # 取反，就是不找这个

# 按时间查找
# 以天为单位
# atime 访问时间
# mtime 更改时间，更改文件内容
# ctime 改动时间，更改文件属性
# 以分钟为单位
# amin 访问时间
# mmin 更改时间
# cmin 改动时间
# 用+-表示之前，之后
find /etc -atime +7 # 7天之前访问

# 查找后的处理
# exec 把find找到的结果作为文件处理
# {} 代表查找到的结果
# 最后必须加上 \; 表示结束
find /etc -atime -7 -exec cp {} ~/desktop/change/ \;
find /etc -atime -7 -exec grep "ssh" {} \;
# 另一种处理方式
# 不仅显示文件内容，还能显示文件路径
# 如果xargs要使用{}需要在xargs后加上 -i 
find /etc -atime -7 | xargs grep "ssh"

# 复合使用
find /etc -type f -size +1M -name "*net*"
```

[bash02](post/linux/base02.md)