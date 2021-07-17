import React, { useState, useEffect } from 'react';
import MobileResult from '../../../components/test/results/MobileResult';
import sizeMe from 'react-sizeme';
import TestResult from '../../../components/test/results/TestResult';
import { testResultAtom } from 'states/test';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { GetTestAnswer } from 'lib/api/test/getAnswer';
// function Result(props) {
//   const { width, height } = props.size;
//   const isMobile = width <= 700 ? true : false;
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadingFinished = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(loadingFinished);
//   }, []);

// export default sizeMe({ monitorHeight: true })(Result);

function Result(props) {
  const [cData,setCData] = useState('')
  const { width, height } = props.size;
  const isMobile = width <= 700 ? true : false;
  // const colorName = useRecoilValue(testResultAtom);
  // console.log(colorName)
  const router = useRouter();
  console.log(router)
  const {id} = router.query;
  console.log(id)
  useEffect(() => {
    (async () => {
      const data = await GetTestAnswer(id);
      setCData(data);
    })();
  },[] );
  // console.log('colorname', colorName);
  console.log('API 분리', cData);
  
  return <>{cData && (isMobile ? <MobileResult data={cData}/> : <TestResult data={cData}/>)}</>;
}

export default sizeMe({ monitorHeight: true })(Result);
