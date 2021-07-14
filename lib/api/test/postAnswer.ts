import axios from 'axios';
const baseURL = 'https://colfume.com/api';

export const testResult = async answer => {
  const { data } = await axios.post(`${baseURL}/colfume/test`, answer);
  return data.data;
};
