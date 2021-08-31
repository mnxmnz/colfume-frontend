import axios from 'axios';
import BASE_URL from '../client';

export async function testResult(answer) {
  try {
    const { data } = await axios.post(`${BASE_URL}/colfume/test`, answer);
    return data.data;
  } catch (error) {
    console.error('Test Result Error', error);
  }
}
