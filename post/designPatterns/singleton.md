# 单例模式

## 1、饿汉式

```java
/* 
类加载到内存中时就直接实例化一个单例，JVM保证其线程安全
简单实用
缺点：不管用不用它都存在
*/
class Singleton{
	private static final Singleton INSTANCE = new Singleton();
    private Singleton(){};
    public static Singleton getInstance(){ return INSTANCE;}
    
    public static void m(){}
}
```

## 2、懒汉式1.0

```java
/*
需要时才加载
缺点：多线程访问时有问题
*/
class Singleton{
	private static Singleton INSTANCE;
    private Singleton(){};
    public static Singleton getInstance(){
        if(INSTANCE == null){
	        INSTANCE = new Singleton();
        }
        return INSTANCE;
    }
    
    public static void m(){}
}
```

## 3、懒汉式2.0

```java
/*
加锁
需要时才加载
缺点：效率低
*/
class Singleton{
	private static Singleton INSTANCE;
    private Singleton(){};
    public static synchronized Singleton getInstance(){
        if(INSTANCE == null){
	        INSTANCE = new Singleton();
        }
        return INSTANCE;
    }
    
    public static void m(){}
}
```

## 4、懒汉式3.0

```java
/*
判断->加锁->判断->new
需要时才加载
*/
class Singleton{
	private static volatile Singleton INSTANCE;
    private Singleton(){};
    public static Singleton getInstance(){
        if(INSTANCE == null){
            synchronized(Singleton.class){
    	        if(INSTANCE == null){
			        INSTANCE = new Singleton();
            	}
            }
        }
        return INSTANCE;
    }
    
    public static void m(){}
}
```

## 5、静态内部类

```java
/*
完美写法之一
*/
class Singleton{
    private Singleton(){};
    private static class SingletonInstanceHelper{
    	private final static Singleton INSTANCE = new Singleton();
    }
    public static Singleton getInstance(){
        return SingletonInstanceHelper.INSTANCE;
    }
    
    public static void m(){}
}
```

## 6、枚举

```java
/*
超级完美
不仅解决线程同步，还可以防止反序列化
*/
public enum Singleton{
	INSTANCE;
    
    public static void m(){}
}

```