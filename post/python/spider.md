# spider

## `Scrapy`框架

### `scrapy`安装

```bash
pip install scrapy
```

### `scrapy`生成项目

```bash
# 创建项目
scrapy startproject [projectName]
# 生成爬虫
cd ./[projectName]
scrapy genspider [spiderName] [domainName]
```

### `scrapy`结构

![scrapy_architecture](https://gitee.com/mygiteecx/img/raw/master/img//20210709201619.png)

![image-20210630145156799](https://gitee.com/mygiteecx/img/raw/master/img//20210709201626.png)


```
w目录：
-   project：项目位置
    -   [projectName]：项目名
        -   spiders/：爬虫文件夹
            -   __init__.py
        -   __init__.py
        -   items.py
        -   middlewares.py：中间件
        -   pipelines.py：管道，数据持久化
        -   settings.py：设置
    -   scrapy.cfg：项目配置
```

相关内容

1.  xpath
    -   浏览器F12右键需要找的元素->复制->xpath
1.  re(正则表达式)

