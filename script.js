'use strict';

//nulish - стандарт ES11
//const box = document.querySelector('.box');
//
//const newHeight = 100;
//const newWidth = 400;
//
//function changeParams(elem, h, w) {
//    elem.style.height = `${h ?? 200}px`;//?? - Данный знак означает или но только в случае 0 или undefined, то есть даже ноль тут будет отображаться
//    elem.style.width = `${w ?? 200}px`;
//}
//
//changeParams(box, newHeight, newWidth);

const box = document.querySelector('.box');
const block = document.querySelector('.block');


console.log(block)

console.log(block?.textContent);//если нет значения, не будет вылазить ошибка, а просто undefined. Работает только на чтение свойства

console.log(1+2);