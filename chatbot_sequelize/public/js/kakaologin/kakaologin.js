document.querySelector('.kakaoBtn').addEventListener('click', function () {
  location.href =
    'https://kauth.kakao.com/oauth/authorize?response_type=code&scope=talk_message&client_id=f62756c389c9aab4cee7da3d0446e6f3&redirect_uri=http://127.0.0.1:3000/chat/kakaologin';
});

document
  .querySelector('.btnToken')
  .addEventListener('click', async function () {
    await axios
      .get(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=f62756c389c9aab4cee7da3d0446e6f3&redirect_uri=http://127.0.0.1:3000/chat/kakaologin&code=${codes.code}`
      )
      .then((r) => {
        console.log(r.data.access_token);
        document.querySelector('.token').innerHTML =
          '토큰 값 : ' + r.data.access_token;
        document.querySelector('input[name="input"]').value =
          r.data.access_token;
        document.querySelector('input[name="input2"]').value =
          r.data.access_token;
      });
  });
