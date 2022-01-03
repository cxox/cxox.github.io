# HTML标签

## `a`标签

- `href`属性
    1. 外部网址
    1. 内部地址
    1. 元素id
- `target`属性
    1. `_self`: 在当前窗口打开新页面
    1. `_blank`: 新打开一个窗口展示新页面
    1. `view_window`: 只用一个新窗口展示新页面
    1. ...

## `table`标签

部分属性

- `cellpadding`: 单元格内填充
- `cellspacing`: 单元格间距
- `rowspan`: 跨行
- `colspan`: 跨列

### 结构

```html
<table>
    <!-- 表头 -->
    <thead>
        <tr>
            <td>name</td>
            <td>age</td>
        </tr>
    </thead>
    <!-- 表格主体 -->
    <tbody>
        <tr>
            <td>name1</td>
            <td>age1</td>
        </tr>
        <tr>
            <td>name2</td>
            <td>age2</td>
        </tr>
        <tr>
            <td>name3</td>
            <td>age3</td>
        </tr>
    </tbody>
</table>
```

## 列表

### `ul` 无序列表

- `li`

### `ol` 有序列表

- `li`

### `dl` 自定义列表

- `dt`
- `dd`

## `form` 表单

### `input` 输入

- `text`
- `password`
- `button`
- `submit`
- `reset`
- `radio` 单选
- `cheakbox` 多选
- `select` 下拉菜单
  - `option` 选项
- ...

## `label` 标签

- `for`: 常与`form`结合，使得选择输入框变得容易
