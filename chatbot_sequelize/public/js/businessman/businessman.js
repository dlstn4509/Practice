let searchInput = document.querySelector('.searchInput');
let searchNum = document.querySelector('.searchNum');
let searchName = document.querySelector('.searchName');
let searchStart = document.querySelector('.searchStart');
let searchTitle = document.querySelector('.searchTitle');
let tbody = document.querySelector('.tbody');
let tbody2 = document.querySelector('.tbody2');

document.querySelector('.bt-search').addEventListener('click', searchBusiness);
document
  .querySelector('.bt-search2')
  .addEventListener('click', searchBusiness2);

/*********************************************************/

function searchBusiness() {
  let data = JSON.stringify({
    b_no: [searchInput.value],
  });

  let config = {
    method: 'post',
    url: 'https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=SaqPNX%2Fub%2FFdA3w2TFEoYdecDbMxS0Ex%2B2JhBJhJcD6tJYd13CFIMtwvtiwIwpCMoTiEyULLsp1QEs286MoGsA%3D%3D',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (r) {
      let data = r.data.data;
      let html = '';
      for (let i = 0; i < r.data.data.length; i++) {
        html += `<tr>
          <td>${data[i].b_no}</td>
          <td>${data[i].b_stt}</td>
          <td>${data[i].tax_type}</td>
          </tr>`;
        tbody.innerHTML += html;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
/*********************************************************/
function searchBusiness2() {
  var data = JSON.stringify({
    businesses: [
      {
        b_no: searchNum.value,
        start_dt: searchStart.value,
        p_nm: searchName.value,
        b_nm: searchTitle.valte,
        corp_no: '1101114028018',
        b_sector: '',
        b_type: '',
      },
    ],
  });

  var config = {
    method: 'post',
    url: 'https://api.odcloud.kr/api/nts-businessman/v1/validate?serviceKey=SaqPNX%2Fub%2FFdA3w2TFEoYdecDbMxS0Ex%2B2JhBJhJcD6tJYd13CFIMtwvtiwIwpCMoTiEyULLsp1QEs286MoGsA%3D%3D',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (r) {
      console.log(r.data.data[0].status);
      let data = r.data.data[0].status;
      let html = '';
      html += `<tr>
          <td>${data.b_no}</td>
          <td>${data.b_stt}</td>
          <td>${data.tax_type}</td>
        </tr>`;
      tbody2.innerHTML += html;
    })
    .catch(function (err) {
      console.log(err);
    });
}

/*******************************************************/
axios({
  method: 'post',
  url: 'https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=SaqPNX%2Fub%2FFdA3w2TFEoYdecDbMxS0Ex%2B2JhBJhJcD6tJYd13CFIMtwvtiwIwpCMoTiEyULLsp1QEs286MoGsA%3D%3D',
  headers: {
    'Content-Type': 'application/json',
  },
  data: {
    b_no: ['1148671093'],
  },
}).then(function (r) {
  console.log(r);
});
