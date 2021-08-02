import axios from 'axios';

export const GetTestAnswer = async colorName => {
  const {
    data: { data },
  } = await axios.get(`https://colfume.co.kr/api/colfume/${colorName}`);
  if (!data) return '[FAIL] no data';
  return data;
};
