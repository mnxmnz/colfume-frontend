import axios from 'axios';
import useSWR from 'swr';
import { fetcher } from '../fetch';

export const GetTestAnswer = async colorName => {
  const {
    data: { data },
  } = await axios.get(`https://colfume.co.kr/api/colfume/${colorName}`);
  // const { data, error } = await useSWR(`https://colfume.co.kr/api/colfume/${colorName}`, fetcher, {
  //   onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
  //     if (error.status === 404) return;
  //     if (retryCount >= 10) return;
  //   },
  // });
  console.log(data);
  // if (error) return '[FAIL] get data';
  if (!data) return '[FAIL] no data';
  return data;
};

// export const GetTestAnswer = colorName => {
//   const { data, error } = useSWR(`https://colfume.co.kr/api/colfume/${colorName}`, fetcher, {
//     onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
//       if (error.status === 404) return;
//       if (retryCount >= 10) return;
//       console.log(colorName);
//     },
//   });
//   if (error) return '[FAIL] get data';
//   if (!data) return '[FAIL] no test data';
//   return data;
// };
