import React, { useState, useEffect } from 'react';
import MobileResult from '../../../components/test/results/MobileResult';
import sizeMe from 'react-sizeme';
import TestResult from '../../../components/test/results/TestResult';
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
  const { width, height } = props.size;
  const isMobile = width <= 700 ? true : false;

  return <>{isMobile ? <MobileResult /> : <TestResult />}</>;
}

export default sizeMe({ monitorHeight: true })(Result);
