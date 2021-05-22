# file

<img src="file.assets/image-20210522183351957.png" alt="image-20210522183351957" style="zoom:50%;" />

eg:

```python
f = open('file.txt','a+')
f.write('sssssss')
f.flush()
print(f)
f.close()
```

[with(上下文管理器)](with.md)