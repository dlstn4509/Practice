document.querySelectorAll('.btDelete').forEach((v) => {
  v.addEventListener('click', onDelete);
});

function onDelete(e) {
  let id = this.dataset['id'];
  let parent = this.parentNode.parentNode;
  console.log(parent);
  axios.delete('/chat/list/' + id).then(onSuccess);

  function onSuccess(r) {
    if (r.status == 200) parent.remove();
  }
}

document.querySelectorAll('.content').forEach((v) => {
  v.addEventListener('click', moveView);
});

function moveView(e) {
  console.log(this.dataset['id']);
  location.href = '/chat/view/' + this.dataset['id'];
}

let thumb = document.querySelectorAll('.thumb');
let thumb2 = document.querySelectorAll('.thumb2');

thumb.forEach((v) => {
  v.addEventListener('mouseenter', function (e) {
    const mouseX = e.clientX + 10;
    const mouseY = e.clientY + 10;
    v.nextElementSibling.style.display = 'block';
    v.nextElementSibling.style.left = mouseX + 'px';
    v.nextElementSibling.style.top = mouseY + 'px';
  });
});

thumb.forEach((v) => {
  v.addEventListener('mouseleave', function () {
    v.nextElementSibling.style.display = 'none';
  });
});
