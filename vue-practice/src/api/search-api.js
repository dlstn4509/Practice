import axios from 'axios';

const searchApi = (text, select) => {
  var config = {
    method: 'get',
    url: `https://dapi.kakao.com/v2/search/${select}?query=${text}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'KakaoAK accdfd5267af756d07efcd007e13bcee',
    },
  };
  console.log(config.url);
  return axios(config);
};

export default searchApi;
