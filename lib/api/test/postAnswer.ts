import axios from 'axios';
const baseURL = 'https://colfume.co.kr/api';

export async function testResult(answer) {
  try {
    const response = await axios.post(`${baseURL}/colfume/test`, answer);
    return response;
  } catch (error) {
    console.error('Test Result Error', error);
  }
}
