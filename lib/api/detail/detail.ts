import useSWR from 'swr';
import { fetcher } from '../fetch';

export const GetDetailData = () => {
  const { data, error } = useSWR(
    `https://colfume.com/api/product/detail/구찌 길티 러브에디션(2021) 뿌르 옴므[EDT]`,
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return;
        if (retryCount >= 10) return;
      },
    },
  );

  if (error) return '[FAIL] get data';
  if (!data) return '[FAIL] no data';
  return data;
};
