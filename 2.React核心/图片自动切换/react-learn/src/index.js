import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import src1 from './assets/1.png';
import src2 from './assets/1kz28dozm5cjqgy0t7ppd8rzjzqtg3kk77fmkrnliksnbnesv0h(1).bmp';
import src3 from './assets/7whbkaz3msum3kfa06iflpbu3ca6w3myyjiheex0zcoke81h3(1).jpg';

const strArr = [src1, src2, src3];
let index = 0;
let timer;
const container = document.getElementById('root');

function start() {
    stop();
    timer = setInterval(() => {
        index = (index + 1) % 3;
        render();
    }, 2000);
}

function stop() {
    clearInterval(timer);
}

function render() {
    ReactDOM.render(<img src={strArr[index]} />, container);
}

render();

container.onmouseenter = function () {
    start();
};

container.onmouseleave = function () {
    stop();
};
