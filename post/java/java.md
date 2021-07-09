# Java

Java百度介绍<https://baike.baidu.com/item/Java/85979?fr=aladdin>

## Java的三大版本

- JavaSE => 标准版（桌面，控制台开发……）
- JavaME => 嵌入式开发（手机，小家电……）
- JavaEE => 企业级开发（web开发，服务器开发……）

## Java构成

> JDK : java development kit
>
> > JRE : java runtime envirnment
> >
> > > JVM : java virtual machine

Java概念图

![Java概念图](https://gitee.com/mygiteecx/img/raw/master/img//20210709201918.jpg)

## Java的删除

（JAVA_HOME没有也行，方便其他软件找到Java，但现在哪些软件变聪明了）

1. 先去系统环境变量
2. 删除Java安装目录
3. *删除java_home*
4. 删除path下关于Java的目录

## IDE(集成开发环境)

- [Eclipse](https://www.eclipse.org/)
- [IDEA](https://www.jetbrains.com/zh-cn/)

## javaDoc

### 参数信息

![image-20210204202422981](https://gitee.com/mygiteecx/img/raw/master/img//20210709201930.png)

### 生成Java文档

```bash
javadoc -encoding UTF-8 -charset UTF-8 [java文件名]
```

