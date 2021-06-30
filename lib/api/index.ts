import axios from 'axios';

export const client = axios.create({
  baseURL: '서버주소',
});
