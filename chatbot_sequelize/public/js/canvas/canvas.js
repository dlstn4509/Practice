// https://www.w3schools.com/graphics/canvas_intro.asp
// https://velog.io/@mokyoungg/JS-JS%EC%97%90%EC%84%9C-Canvas-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0%EB%A7%88%EC%9A%B0%EC%8A%A4%EB%A1%9C-%EA%B7%B8%EB%A6%AC%EA%B8%B0
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;
ctx.strokeStyle = 'red';

// ctx.fillStyle = 'green';
// ctx.fillRect(0, 0, 500, 500); // 색채우기
// ctx.strokeRect(10, 10, 200, 50); // border
// ctx.clearRect(30, 30, 160, 90); // 일부 지우기
// ctx.beginPath();

// ctx.moveTo(0, 0);
// ctx.lineTo(300, 150);
// ctx.stroke();

let downX = 0;
let downY = 0;
let drag = false;

canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mouseout', mouseOut);

function mouseDown(e) {
  downX = e.offsetX;
  downY = e.offsetY;
  // console.log(downX);
  // console.log(downY);
  drag = true;
}
function mouseUp() {
  drag = false;
}
function mouseMove(e) {
  if (drag) {
    let moveX = e.offsetX;
    let moveY = e.offsetY;
    canvasDraw(moveX, moveY);
    downX = moveX;
    downY = moveY;
  }
}
function canvasDraw(x, y) {
  ctx.beginPath();
  ctx.moveTo(downX, downY);
  ctx.lineTo(x, y);
  ctx.stroke();
}
function mouseOut() {
  drag = false;
}

document.querySelector('.btReset').addEventListener('click', function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
