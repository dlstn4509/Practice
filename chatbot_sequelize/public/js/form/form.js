function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#blah').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
function readURL2(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#blah2').attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

let btnTring = document.querySelector('.btn-tring');

btnTring.addEventListener('click', imgTring);

let turnAngle = 0;
function imgTring() {
  turnAngle = turnAngle + 90;
  let img = document.querySelector('.img1');
  img.setAttribute('style', 'transform: rotate(' + turnAngle + 'deg)');
  let rotate = document.querySelector('input[name="rotate"]');
  rotate.value = turnAngle;
  console.log(rotate);
}
