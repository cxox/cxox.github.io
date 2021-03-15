var str_hello = document.getElementById('h2');

var left_dis = 0;
var top_dis = -25;
var today = new Date();

time = today.getSeconds();
str_hello.innerHTML = ` 时间 `+today.getDay() + ` : `+today.getMinutes()+` : `+today.getSeconds();
str_hello.setAttribute("style","position:fixed;left:"+left_dis+"px;top:"+top_dis+"px;");
