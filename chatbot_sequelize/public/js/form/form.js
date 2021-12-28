/* 이미지 미리보기 */
function readURL(input, thumb) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#blah').attr('src', e.target.result);
      $(thumb).attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
/* 이미지 회전 */
let turnAngle = 0;
function imgTring(thumb, rotate) {
  turnAngle = turnAngle + 90;
  let bigImg = document.querySelector('.bigImg');
  bigImg.setAttribute(
    'style',
    'transform: rotate(' +
      turnAngle +
      'deg); max-width: 500px; max-height: 400px;'
  );
  let thumbImg = document.querySelector(thumb);
  thumbImg.setAttribute(
    'style',
    'transform: rotate(' + turnAngle + 'deg); max-width: 50px;'
  );
  let rotateVal = document.querySelector(rotate);
  rotateVal.value = turnAngle;
  console.log(rotate);
}
