var data = JSON.stringify({
  businesses: [
    {
      b_no: '0000000000',
      start_dt: '20000101',
      p_nm: '홍길동',
      p_nm2: '홍길동',
      b_nm: '(주)테스트',
      corp_no: '0000000000000',
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
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
