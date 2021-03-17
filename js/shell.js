// 接收元素
var input = document.getElementById("input");
var beforeInput = document.getElementById("beforeInput");
var commitButton = document.getElementById("commitButton");
var historyInfo = document.getElementById("historyInfo");

// 定义变量
var br = '<br/>'
var login = `login :`;
var baseInfoText = `[cibert@xoxzzz ~]$`;
var inputValue = '';
var addText = '';
// 需要查找的信息
var info_ls = `<a href="https://xoxzzz.com">xoxzzz</a> `
            +`<a href="https://xoxzzz.com/note">note</a> `
            +`<a href="https://xoxzzz.com/ls">ls</a> `;
var info_ll = `<table>\
<tr><td><a href="https://xoxzzz.com">xoxzzz</a></td><td>xoxzzz控制页面</td></tr>\
<tr><td><a href="https://xoxzzz.com/note">note</a></td><td>学习笔记</td></tr>\
<tr><td><a href="https://xoxzzz.com/ls">ls</a></td><td>其他笔记</td></tr>\
</table>`;
var url = `<table>\
<tr><td><a href="https://baidu.com">baidu</a></td><td>1</td></tr>\
<tr><td><a href="https://bilibili.com">bilibili</a></td><td>2</td></tr>\
<tr><td><a href="https://zhihu.com">zhihu</a></td><td>3</td></tr>\
</table>`;

// 系统信息
historyInfo.innerHTML = 'xoxzzz 0.1';

// 输入行之前的相关信息
beforeInput.innerHTML = baseInfoText;

// 按钮点击后
commitButton.onclick = function(){
    inputValue = input.value;
    switch (inputValue){
        case 'clear':
            historyInfo.innerHTML = '';
            break;
        //case 'desktop':
        //    window.open('/desktop.html','_self')
        //    break;
        case 'exit':
            window.close();
            break;
        case 'url':
            addText = url;
            addHistory();
            break;
        case 'ls':
            addText = info_ls;
            addHistory();
            break;
        case 'll':
            addText = info_ll;
            addHistory();
            break;
        default:
            addText = 'command "'+ inputValue +'" not found'
            addHistory();
            break;
    }
    initInput();
}

addHistory = function(){
    historyInfo.innerHTML += br + baseInfoText+ '  ' + inputValue;
    if(inputValue != ''){
        historyInfo.innerHTML += br + addText;
    }
}

// 每次输入后，清空输入信息
initInput = function(){
    input.value = ''; // 回车后清空输入框
    addText = '';
}