import axios from 'axios';

const kakaoMapApi = (query) => {
  var config = {
    method: 'get',
    url: `https://dapi.kakao.com/v2/local/search/address?query=${query}`,
    headers: {
      Authorization: 'KakaoAK accdfd5267af756d07efcd007e13bcee',
    },
  };

  const data = axios(config);
  return data;
};

export default kakaoMapApi;
