let list = 1;
if (location.pathname.split('/')[3]) {
  list = location.pathname.split('/')[3];
}
axios
  .get(
    `http://openapi.seoul.go.kr:8088/5646475754646c7331303156454e4d76/json/landBizInfo/${list}/10/`
  )
  .then(onSuccess);

function onSuccess(r) {
  console.log(r.data.landBizInfo.row);
  let tbody = document.querySelector('.tbody');
  let data = r.data.landBizInfo.row;
  let html = '';
  for (let i = 0; i < data.length; i++) {
    html += `<tr>
          <td>${data[i].CMP_NM}</td>
          <td>${data[i].ADDRESS}</td>
          <td>${data[i].TELNO}</td>
          <td>${data[i].RA_REGNO}</td>
          <td>${data[i].RDEALER_NM}</td>
        </tr>`;
    tbody.innerHTML = html;
  }
}

console.log(location.pathname.split('/')[3]);
