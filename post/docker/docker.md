# docker

相关网站

- [Docker official](https://www.docker.com/)：官网
- [Docker Hub](https://hub.docker.com/)：仓库

## ducker的基本组成

![image-20210708160612084](C:\Users\cx\AppData\Roaming\Typora\typora-user-images\image-20210708160612084.png)

- 镜像（image）
  - 模板
- 容器（container）
- 仓库（repository）
  - Docker Hub 默认国外镜像
    需要配置镜像加速



## 安装docker

[Docker Documentation](https://docs.docker.com/)

安装后`docker version`验证安装结果

## 配置docker

1. 更改镜像源，使用阿里云镜像加速

## 基本命令

### 帮助命令

```bash
docker version			# 显示docker的版本信息
docker info				# 显示docker的系统信息，包括容器和镜像的数量
docker [command] --help	# 帮助命令
```

[网络援助！！！](https://docs.docker.com/engine/reference/run/)

### 镜像命令

```bash
docker search [name]	# 搜索镜像
docker pull [name]		# 拉取镜像
docker rmi -f [name/id]	# remove image
```

### 容器命令

```bash
docker pull [name]
docker run [可选参数] [name]
# 参数说明
# --name="[name]" 容器名字
# -d 后台运行
# -it 交互方式运行，进入容器查看内容
# -p
#	-p 主机端口：容器端口
#	-p 容器端口
docker rm [name/id] # 删除容器
```



```bash
docker ps # 正在运行的容器
docker ps -a # 最近运行容器
```

