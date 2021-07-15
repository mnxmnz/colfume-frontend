import useSWR from 'swr';
import { fetcher } from '../fetch';

const BASEURL = 'https://colfume.com/api/search';

export const SearchData = props => {
  const category = props[0] === '/' ? '/' : `/filter/${props[0]}/`;
  const keyword = props[1];
  const url = `${BASEURL}${category}${keyword}`;
  console.log(url);
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
