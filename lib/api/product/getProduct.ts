import useSWR from 'swr';
import { fetcher } from '../fetch';
import BASE_URL from '../client';

export const GetProductList = props => {
  const url = props ? `/${props}` : '/';
  const { data, error } = useSWR(`${BASE_URL}/product` + url, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
    },
  });

  if (error) return '[FAIL] get data';
  if (!data) return '[FAIL] no data';
  return data;
};
