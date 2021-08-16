import useSWR from 'swr';
import { fetcher } from '../fetch';
import BASE_URL from '../client';

export const SearchData = props => {
  const category = props[0] === '/' ? '/' : `/filter/${props[0]}/`;
  const keyword = props[1];
  const url = `${BASE_URL}/search${category}${keyword}`;
  const { data, error } = useSWR(url, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 10) return;
    },
  });

  if (error) return '[FAIL] get data';
  if (!data) return '[FAIL] no data';
  return data;
};
