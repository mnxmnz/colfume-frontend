import React, { useState, useEffect } from 'react';
import { Loading } from '../../../components/index';
import TesultResult from '../../../components/test/results/TestResult';

function Result() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingFinished = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(loadingFinished);
  }, []);

  return <>{loading ? <Loading /> : <TesultResult />}</>;
}

export default Result;
