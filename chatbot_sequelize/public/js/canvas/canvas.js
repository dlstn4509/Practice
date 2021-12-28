let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 500, 500); // 색채우기
ctx.strokeRect(10, 10, 200, 50); // border
ctx.clearRect(30, 30, 160, 90); // 일부 지우기

// https://www.w3schools.com/graphics/canvas_intro.asp
