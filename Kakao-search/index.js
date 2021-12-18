let url = 'https://dapi.kakao.com/';
let auth = 'KakaoAK accdfd5267af756d07efcd007e13bcee';
let cate = '';

let searchWrapper = document.querySelector('.search-wrapper');
let searchInput = document.querySelector('.search-wrapper input');
let btn = document.querySelector('.search-btn');
let category = document.querySelector('#cate');
let cateValue = category.options[category.selectedIndex].value;

function changeCate(value) {
  return (cateValue = value);
}

function getPath(cateValue) {
  return url + (cateValue === 'book' ? 'v3' : 'v2') + '/search/' + cateValue;
}

function getParams(query) {
  return {
    params: { query: query },
    headers: { Authorization: auth },
  };
}

function onSubmit(e) {
  e.preventDefault();
  axios
    .get(getPath(cateValue), getParams(searchInput.value))
    .then(function (e) {
      console.log(e.data.documents);
    })
    .catch(function (err) {
      console.log(err);
    });
}

btn.addEventListener('click', onSubmit);
