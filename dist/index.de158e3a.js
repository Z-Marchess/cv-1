let html = document.querySelector('#html');
let style = document.querySelector('#style');
let str = `
/*你好，我叫zmc
接下来我演示一下我的前端功底
首先我要准备一个div*/
#div1{
    width: 200px;
    height: 200px;
    border: 1px solid red;
}
/*接下来我把 div1 变成一个八卦图
注意看好了
首先，把 div1变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border:none;
}
/*八卦是阴阳形成的
一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个球 */
#div1::before {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);}
#div1::after {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);}
`;
let n = 0;
let step = function() {
    if (n < str.length) setTimeout(()=>{
        if (str[n] === '\n') html.innerHTML += '<br>';
        html.innerHTML += str[n];
        style.innerHTML = str.substring(0, n + 1);
        window.scroll(0, n) //每个一个字符向下滚动滚动条
        ;
        html.scroll(0, n);
        n++;
        step();
    }, 0);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
