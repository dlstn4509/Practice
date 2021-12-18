let apiKey =
  'SaqPNX%2Fub%2FFdA3w2TFEoYdecDbMxS0Ex%2B2JhBJhJcD6tJYd13CFIMtwvtiwIwpCMoTiEyULLsp1QEs286MoGsA%3D%3D';
axios
  .get(
    `https://api.odcloud.kr/api/uws/v1/inventory?page=2&perPage=10&serviceKey=${apiKey}`
  )
  .then(function (r) {
    console.log(r.data.data);
    $('.lists').empty();
    let html = '';
    for (let i = 0; i < r.data.data.length; i++) {
      html = '<li class="list">';
      html += `<div>${r.data.data[i].name}</div>`;
      html += '</li>';
    }
    r.data.data.forEach((v, i) => {
      console.log(v.name);
    });
    document.querySelector('.lists').innerHTML = html;
  });
