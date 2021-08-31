export const fetcher = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error('[FAIL] fetch data');
    throw error;
  }

  return res.json();
};
