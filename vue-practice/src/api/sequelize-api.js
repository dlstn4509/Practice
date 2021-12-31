import axios from 'axios';

const sequelizeApi = () => {
  const data = axios.get(
    '	http://15.164.52.218:3100/book?apikey=b5406f6e-4820-4b69-9fab-c7b2ee161131'
  );
  return data;
};

export default sequelizeApi;
