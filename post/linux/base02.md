## tar (tape archive)/(归档)

```bash
tar -cvf example.tar example1 example2
```

![image-20210321214802734](base02.assets/image-20210321214802734.png)

```bash
tar -xvf example.tar # 解压，默认当前目录
tar -xvf example.tar -C example/ # 自选目录
```

参数添加 z 表示压缩

## 