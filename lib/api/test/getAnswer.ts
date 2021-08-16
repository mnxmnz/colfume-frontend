import axios from 'axios';
import BASE_URL from '../client';

export const GetTestAnswer = async colorName => {
  const {
    data: { data },
  } = await axios.get(`${BASE_URL}/colfume/${colorName}`);
  if (!data) return '[FAIL] no data';
  return data;
};
