import useSWR from 'swr';
import { fetcher } from '../fetch';
import BASE_URL from '../client';

export const GetDetailData = perfumeId => {
  const { data, error } = useSWR(`${BASE_URL}/product/detail/${perfumeId}`, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 10) return;
    },
  });

  if (error) return '[FAIL] get data';
  if (!data) return '[FAIL] no data';
  return data;
};
