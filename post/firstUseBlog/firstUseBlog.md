---
title: "FirstUseBlog"
description: "第一次写blog自然是要记录一下使用的工具"
date: 2021-01-22T13:06:39+08:00
draft: false
image: /post/firstUseBlog/test.jpg
categories:
    - tool
tags:
    - hugo
---

# this is my Blog
第一次写Blog当然是要写我的这个东西是怎么弄的了,不然以后忘记了还要到处找

## 用了哪些东西
构成|具体工具
:-:|:-:
存放平台|GitHub
版本工具|Git
Blog工具|hugo
主题|keepit

## 一些命令
首先要搭配环境变量
- `新建一个Blog站点`
    ```cmd
    hugo new site blog
    ```
- `选择主题` 去`themes.gohugo.io`
    ```cmd
    // 每一个主题的页面都有使用方法
    cd themes
    git clone [主题地址]
    ```
- `本地运行`
    ```cmd
    hugo server [--buildDrafts]
    ```
    buildDrafts是显示草稿
- `新建文章`
    ```cmd
    hugo new post/[文章文件夹]/[文章名字]
    ```
- `生成public文件夹`
    ```
    hugo
    ```
- `git相关`
    先到public目录下
    ```git
    git init
    git add .
    git commit -m "第一次提交"
    // git仓库新建时有提示
    git remote add origin git@github.com:xxxx/x.github.io.git
    git push -u master
    ```