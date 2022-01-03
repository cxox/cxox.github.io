# css3的新特性介绍

## 选择器

### 属性选择器

```css
input[value] {
    /* css内容 */
}

input[value="content"] {
    /* css内容 */
}

input[value^="start"] {
    /* css内容 */
}

input[value*="have"] {
    /* css内容 */
}

input[value$="end"] {
    /* css内容 */
}
```

### 结构伪类选择器

```css
section div:first-child {
    /* css内容 */
}

section div:last-child {
    /* css内容 */
}

section div:nth-child(n) {
    /* css内容 */
}

section div:first-of-type {
    /* css内容 */
}

section div:last-of-type {
    /* css内容 */
}

section div:nth-of-type(n) {
    /* css内容 */
}
```

#### Tip

1. **重点**：`div:first-child`这里用了`交集选择器`，可以不使用。例如：

    ```css
    section :first-child {
        /* css内容 */
    }
    ```

1. 含有`child`的是选择器是为父元素中的所有建立了一个列表
1. 含有`type`的选择器是为父元素中相同类型的元素各建了一个列表
1. 含有`nth`的选择器中可以使用数字、关键字、公式。
    - `even`,`odd`
    - `2n`,`2n+1`,`5n`: `n`会从0自动加1,**重要**
    - `n+5`: 从第5个开始选

### 伪元素选择器

- `element::after`: 在后面插入内容
- `element::before`: 在前面插入内容

tip:

- 为元素选择器必须加`content属性`
- 作为子元素添加
- 属于行内元素
- 权重为 1

## 盒子模型

1. `box-sizing: content-box`: 盒子大小为 width + padding + border-width
1. `box-sizing: border-box`: 盒子大小为 width

## 特殊的属性

`filter`
    - `blur`: 模糊`filter: blur(1px)`
    - `calc`: 计算`filter: calc(100% - 30px)`, 要有空格

## 动画

### 过渡

`transition`: 要过渡的属性 花费时间 运动曲线 何时开始;

#### tips

- 谁做过渡给谁加
- 一般过渡后效果用hover

## 高级一点

### 2D转换

`transform`: 转换

- `translate`: 移动
    1. 百分比是相对于自己的宽高
    1. 对行内标签无效
- `rotate`: 旋转
    1. 单位`deg`
- `scale`: 缩放
    1. 参数为原来的倍数，没有单位
    1. 从中心点延伸

#### tips

1. 不会影响其他元素
1. 设置中心点`transform-origin: x y;`
    - 方位名词（center left right top bottom）
    - 像素
    - 百分数
1. 简写的时候如果有移动，先写移动

### 动画(animation)

相比过渡的优点

- 更多变化
- 更多动作
- 连续自动播放

#### 动画的基本使用

1. 定义动画
    ```css
    <!-- 动画序列 -->
   @keyframes move{
       0% {
           <!-- 开始状态 -->
       }
       100% {
           <!-- 结束状态 -->
       }
   }
   <!-- 0% 100% 等价于 from to -->
    ```