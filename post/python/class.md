# class

## python class base

### function & method

function
instance method
class method
static method

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709201525.png" alt="image-20210522152429590" style="zoom: 50%;" />

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709201527.png" alt="image-20210522171633260" style="zoom:50%;" />

### constructor & dynamic binding

```python
'''
descripton: this python is for test dynamic binding in python
'''

class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __del__(self):
        print('a student is del')

if __name__ == '__main__':
    stu1 = Student('wy', 20)
    stu1.sex = 'girl'
    print(stu1.sex)
    def drive():
        print('this student is driving but i dont know it name')
    stu1.drive = drive
    stu1.drive()
```



## 封装 —— 提高程序安全性

封装方式：
使用双下划线

```python
class Test:
    def __init__(self, name):
		self.__name = name # 添加'__'表示私有

t = Test('testName')
print(t.__name) # 出错
print(t._Test__name) # 可以访问，但最好不用，否则封装就失去了意义
```



## 继承 —— 提高代码复用性

1.  object 是所有类的父类
1.  继承方式：
    类名后括号中添加父类

    ```python
    class Person(object):
        def __init__(self, name):
            self.name = name
        def info(self):
            return self.name
    
    class Student(Person):
        def __init__(self, name, school):
            super().__init__(name)
            self.school = school
    ```

1.  多继承

    ```python
    class A:
        pass

    class B:
        pass

    class C(A,B):
        pass
    ```

1. 重写(override)：对父类方法不满意就用相同的方法名重新写一遍


## 多态 —— 提高代码可拓展性可维护性

python多态，不关心对象是什么，只关心对象的行为

```python
class A:
    def __init__(self):
        pass
    def go(self):
        retrurn 'GO!!!'
class B:
    def __init__(self):
        pass
    def go(self):
        return 'gogogo!!!'

def runGO(obj):
    obj.go()

a = A()
b = B()
print(run(a)) # GO!!!
print(run(b)) # gogogo!!!
```


## special method

展示对象拥有的所有方法：`dir([class/instance name])`

```python
# 使对象可以实现相加:a+b
def __add__(self, other):
    return self.name+other.name
# 求对象的长度 len(a)
def __len__(self, other):
    return len(self.name)+1
# 创建对象
def __new__(cls):
    obj = super().__new__(cls)
    print('__new__() is running')
    return obj
# 初始化对象
def __init__(self):
    print('__init__() is running')

```

对象创建流程：

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709201533.png" alt="image-20210522170627197" style="zoom:50%;" />

