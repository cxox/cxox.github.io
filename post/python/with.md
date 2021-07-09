# with 上下文管理器

![image-20210522191850862](https://gitee.com/mygiteecx/img/raw/master/img//20210709201633.png)

<img src="https://gitee.com/mygiteecx/img/raw/master/img//20210709201636.png" alt="image-20210522191808789" style="zoom: 80%;" />



怎样使上下文管理器对自己的类有效：

```python
class MyContextMgr:
    def __enter__(self):
		print('enter')
    def __exit__(self, exc_type, exc_val, exc_tb):
        print('exit')
    def show(self):
        print('show')

with MyContextMgr() as m:
    m.show()

'''结果
enter
show
exit
'''
```

