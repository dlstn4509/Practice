axios.get('/json/chicken.json').then((r) => {
  let list = document.querySelector('.ul-list');
  let html = '';
  let data = r.data.positions;
  /* 현재 지도 정보 가져오기 */
  let top = '';
  let bottom = '';
  let left = '';
  let right = '';

  document.querySelector('#map').addEventListener('wheel', function (e) {
    makeList(e, -100);
  });
  document.querySelector('#map').addEventListener('wheel', function (e) {
    makeList(e, 100);
  });

  function makeList(e, move) {
    if (e.deltaY === move) {
      let bounds = map.getBounds();
      // let _top = bounds.toString().split(',')[2];
      // top = _top.substring(2, _top.length);

      top = makePosition(2, 2);

      let _bottom = bounds.toString().split(',')[0];
      bottom = _bottom.substring(2, _bottom.length);
      let _left = bounds.toString().split(',')[1];
      left = _left.substring(1, _left.length - 1);
      let _right = bounds.toString().split(',')[3];
      right = _right.substring(1, _right.length - 2);
    }
    list.innerHTML = '';
    data.forEach((v, i) => {
      if (bottom < v.lat && top > v.lat && left < v.lng && right > v.lng) {
        html = `<li style="display: flex; border-bottom: 1px solid #777">
              <img src="/img/곰.jpg" style="width: 160px; height: 100px" class="img">
              <div style="padding: 0.5em 0;">
                <div>월 2000 / 80</div>
                <div style="font-size: 0.8em;">강남구 개포동 | 사무실 | 3층</div>
                <div class="lat${i}" style="font-size: 0.8em;">lat : ${v.lat}</div>
                <div class="lng${i}" style="font-size: 0.8em;">lng : ${v.lng}</div>
              </div>
            </li>`;
        list.innerHTML += html;
      }
    });
  }

  function makePosition(idx, startNum, lastNum = 0) {
    let bounds = map.getBounds();
    let _x = bounds.toString().split(',')[idx];
    x = _x.substring(startNum, _x.length);
    return x;
  }
});
