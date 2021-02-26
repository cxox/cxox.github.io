# mysql

## install

```bash
 mysqld --initialize-insecure --user=cibert # 初始化
 mysqld -install (==管理员身份运行==) # 安装
 net start mysql # 启动mysql
 mysql -u root -p # 不用输入密码
```

## MySQL常见命令

```mysql
 mysql> alter user user() identified by "cibert"; -- 修改密码
```

```mysql
show databases; -- 查看所有数据库
```
```mysql
use 库名; -- 打开指定数据库
```
```mysql
show tables; -- 查看当前数据库中的表
```
```mysql
show tables from 库名; -- 查看指定数据库中的表
```
```mysql
create table 表名( -- 创建表
	列明 列类型,
	列明 列类型,
	列明 列类型,
	……
	列明 列类型,
);
```
```mysql
desc 表名; -- 查看表结构
```

## 查看mysql版本

方法一：已经登陆mysql

```mysql
select version();
```

方法二：未登录mysql

```mysql
mysql --version
# or
mysql -V
```

