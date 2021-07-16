import axios from 'axios';
const baseURL = 'https://colfume.co.kr/api';

export async function testResult(answer) {
  try {
    const { data } = await axios.post(`${baseURL}/colfume/test`, answer);
    return data.data;
  } catch (error) {
    console.error('Test Result Error', error);
  }
}
