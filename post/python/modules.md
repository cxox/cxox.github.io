# Frequently used modules

## `Built-in`

<img src="modules.assets/image-20210522180527123.png" alt="image-20210522180527123" style="zoom: 80%;" />

### `sys`

```python

```

### `time`

```python

```

### `os`:操作系统相关

#### `os`

<img src="modules.assets/image-20210522193713529.png" alt="image-20210522193713529" style="zoom:67%;" />

```python
import os
os.system('notepad.exe') # 打开记事本
os.system('calc.exe') # 打开计算器
os.startfile('c:\Program Files\Tencent\QQ\Bin\qq.exe') # 打开QQ
```

#### `os.path`

![image-20210522195139758](modules.assets/image-20210522195139758.png)

```python
print(os.path.abspath('modules.py'))
print('modules.py is exist ',os.path.exists('modules.py'))
print('hello.py is exist   ',os.path.exists('hello.py'))   print(os.path.join(r'C:\Users\Asus\OneDrive\study\code\python\pythonTest\learnFromVideo','test.py'))
print(os.path.splitext('1.2.3.4.5.6.7.8.9'))
'''结果
C:\Users\Asus\OneDrive\study\code\python\pythonTest\learnFromVideo\modules.py
modules.py is exist  True
hello.py is exist    False
C:\Users\Asus\OneDrive\study\code\python\pythonTest\learnFromVideo\test.py
('1.2.3.4.5.6.7.8', '.9')
'''
```





### `calendar`

```python

```

### `urllib`

```python

```

### `json`

```python

```

### `re`

```python

```

### `math`

```python

```

### `decimal`

```python

```

### `logging`

```python

```



## other modules

导入方式

```bash
pip install [module name]
```

