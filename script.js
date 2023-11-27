'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;//?? - Данный знак означает или но только в случае 0 или undefined, то есть даже ноль тут будет отображаться
    elem.style.width = `${w ?? 200}px`;
}

changeParams(box, newHeight, newWidth);