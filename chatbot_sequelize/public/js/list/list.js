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
