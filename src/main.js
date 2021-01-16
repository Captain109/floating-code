let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*
欢迎，这是代码世界
没什么好说的
直接干吧
准备一个div
**/
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*
接下来把div变成八卦
首先将div变成一个圆
**/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/*
把圆变为黑白两色
**/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
加小球
**/
#div1::before {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
}
#div1::after {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(0,00,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    border-radius: 50%;
}
`;

let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n - 1] && string[n] === "\n") {
            string2 += "<br>";
        }
        else if (string[n] === " ") {
            string2 += "&nbsp";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n = n + 1;
            step();
        }
    }, 0);
};

step();