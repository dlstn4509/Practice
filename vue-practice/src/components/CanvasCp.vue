<template>
  <div class="canvas-wrap">
    <canvas id="canvas"></canvas>
    <div class="btn-wrap mt-5">
      <button class="btn btn-success btReset">초기화</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CanvasCp',
  mounted() {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 500;
    ctx.strokeStyle = 'red';

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
  },
};
</script>

<style lang="scss" scoped>
.canvas-wrap {
  text-align: center;
  margin-top: 3em;
  canvas {
    border: 1px solid red;
  }
}
</style>
