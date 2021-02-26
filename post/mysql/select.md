# select语句

```mysql
SELECT
	* 
FROM 
	student
```

别名

```mysql
SELECT
	sn studentName -- 标准一点 sn AS studentName
FROM
	student
```

列名有空格时

```mysql
SELECT
	sn `student Name`
FROM
	student
```

不重复

```mysql
SELECT
	DISTINCT
	name
FROM
	student
```

WHERE条件过滤

```mysql
SELECT
	name
FROM
	student
WHERE
	sex='女'
	AND age<21
```

