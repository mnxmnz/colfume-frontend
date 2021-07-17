import useSWR from 'swr';
import { fetcher } from '../fetch';

export const GetTestAnswer = colorName => {
  console.log('색 이름 받음', colorName);
  const { data, error } = useSWR(`https://colfume.co.kr/api/colfume/${colorName}`, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 10) return;
    },
  });

  if (error) return '[FAIL] get data';
  if (!data) return '[FAIL] no data';
  return data;
};
