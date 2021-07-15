import useSWR from 'swr';
import { fetcher } from '../fetch';

export const GetRecommData = () => {
  const { data, error } = useSWR('https://colfume.com/api/home/recommand', fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 10) return;
    },
  });

  if (error) return '[FAIL] get data';
  if (!data) return '[FAIL] no data';
  return data;
};
