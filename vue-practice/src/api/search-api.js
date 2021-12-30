import axios from 'axios';

const searchApi = () => {
  var config = {
    method: 'get',
    url: 'https://dapi.kakao.com/v2/search/image?query=블랙핑크',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'KakaoAK accdfd5267af756d07efcd007e13bcee',
    },
  };

  return axios(config);
};

export default searchApi;
