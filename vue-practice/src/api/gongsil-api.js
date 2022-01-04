import axios from 'axios';

const gongsilApi = () => {
  const data = axios.get('http://127.0.0.1:3000/api/list');
  return data;
};

export default gongsilApi;
