2D Tilemaps:地图编辑器 (unity在Github上有2D-extars 里面有特殊的笔刷)
2D IK
2D Sprite Shape:场景搭建,像在PS中一样画地形
2D Animation System
2D Light (Shader Graph)
Sorting Group:确定渲染顺序
TexMesh Pro
unity的Sprite Editor里设置贴图,在Secondary Textures选项上,名字必须是_NormalMap,然后才能加上贴图
Render-pipelines.light:插件 着色器
自动寻路 : https://arongranberg.com/astar/参考视频 : https://www.bilibili.com/video/av55205727

Shift+空格 最大化窗口
同一个窗口可以打开多个
------------------Inspector-----------------------
私有变量添加[SerializeField]后可以在Inspector面板显示
公开变量添加[HideInspector]后可以在Inspector面板隐藏
对类和结构体添加[System.Serializable]后可以在Inspector改变
[Range(0f,2f)]有一个滑动条
[Space]加一行空行
[Header()]添加一行文字
[Tooltip]显示鼠标悬浮时的提示
把对象多分层更有利于操作,可以锁定某些层防止误操作
新建层时使用 / 可以添加子菜单方便整理项目 如BackGround/Sky
取色器可以去所有地方的颜色
右上角的菜单有Debug选项,连私有变量都显示
------------------Project-------------------------
文件夹快捷方式可以添加到Project内,方便常用文件的打开
用 t:资源类型 快速找到所有该类型的物体
Create/Assembly Definition创建自定义的程序集,放在那个文件夹下,C#文件就编译到哪
场景文件拖动到另一个上何以合并
------------------Scene---------------------------
选中游戏组件后按F聚焦显示,双击F可以在物体运动时跟踪物体
在场景试图选择摄像机并按下 Ctrl+Shift+F 可以把摄像机对齐到当前的场景视图
------------------Script---------------------------
比较两个标签时用CompareTag()函数更有效率
用 Alt+上下键 可以调整代码的顺序而不用复制粘贴
[MenuItem("又一个菜单/DoSomething")]把下面的函数放到unity编辑器的菜单界面上
Debug.Log()可以在后面加入游戏对象,之后再点击Debug的显示问泵后可以高亮显示
图形化显示某一个变量的变化public AnimationCurve a = new AnimationCurve(); a.AddKey(Time.realtimeSinceSttartup, value) 
拼接字符串用StringBuilder更有效率
用SriptableObject作为父类,可以保存游戏信息
用EditorWindow作为父类,可以自定义unity窗口
私有变量性能更好
代码中出现的文本或数字最好在前面用变量表示,不改的最好用static readonly ...表示
用#region 移动 #endregion为代码分区,并添加折叠块
-------------------Hierarchy----------------------
可以创建空物体命名为"----------Background---------"来分组
在Hierarchy面板搜索组件,得到所有有这个组件的物体
按住Alt时点击小三角可以打开全部或关闭全部
-------------------Menu-------------------------
Edit/Physics 2D/  可以改变层级之间的碰撞关系
Edit/Selection/可以保存现在选中的对象
-------------------Console-------------------------


学习C#结构体
Destroy(game object,2f);