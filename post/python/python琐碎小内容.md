-   占位符：pass

    -   ```python
        if 2>1:
            pass
        else:
            pass
        # 先把位置给占住，并且编辑器不报错
        ```
    
-   列表生成式

    -   ```python
        list = [i*i for i in range(10)]
        ```
    
-   if

   -   ```python
		print(a if(a>b) else b)
       ```
   
-   字典生成式

    -   ```python
        li1 = list([1,2,3,4,5])
        li2 = ['q','w','e','r','t']
        dic = {key:value for key,value in zip(li1,li2)}
        ```

-   集合生成式

    -   ```python
        set = {i**2 for i in range(100)}
        ```

-   元组是不可变序列，没有生成式

![image-20210320152337501](python%E7%90%90%E7%A2%8E%E5%B0%8F%E5%86%85%E5%AE%B9.assets/image-20210320152337501.png)