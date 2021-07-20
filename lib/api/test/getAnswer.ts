import axios from 'axios';
const baseURL = 'https://colfume.co.kr/api';

export async function GetTestAnswer(colorName) {
  try {
    const { data } = await axios.get(`${baseURL}/colfume/${colorName}`);
    return data.data;
  } catch (error) {
    console.error('Test Result Error', error);
  }
}
