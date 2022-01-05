const axios = require('axios');

const logOutKakao = (input2) =>
  axios({
    method: 'post',
    url: 'https://kapi.kakao.com/v1/user/unlink',
    headers: {
      Authorization: `bearer ${input2}`,
      Cookie: '_kadu=2bAvM691NSCt6F7m_1641281934745',
    },
  });

module.exports = { logOutKakao };
