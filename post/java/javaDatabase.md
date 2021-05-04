# Java 与 数据库 连接操作

## 加载驱动 
```java
Class.forName();
```

## 建立连接 
```java
Connection conn = Driverment.getConnection(url,username,password);
```

## 执行 
```java
Statement stat = conn.createStatement();
```

### 更安全的版本 -> `prepareStatement` 防止`SQL`注入

```java
String sql = "select * from student where name = ? ";
PrepareStatement stat = conn.ptepateStatement();
stat.setString(1,sql);
```

#### 提取方法
```java
/**
*Object... params 可变参数 相当于数值
*/
public int executeUpdate(String sql, Object... params) throws SQLException{
    int result = 0;
    stat = conn.prepareStatement(sql);
    for(int i=0;i<prepareStatement.length;i++){
        stat.setObject(i+1;Params[i]);
    }
    result = stat.executeUpdate();
    return result;
}
```

#### 保证事务的原子性

```java
// try...catch
conn.setAutoCommit(false);
// 省略sql 操作
conn.commit();
// 捕获异常后
conn.rollback();
```

## 保存结果

```java
ResultSet rs = stat.executeQurey();
```