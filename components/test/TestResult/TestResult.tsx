import React from 'react';
import styled from 'styled-components';
//import TestResultText from './TestResultText';
//import TestResultImage from './TestResultImage';
import Image from 'next/image';

function TestResult() {
  return (
    <Layout>
      <ResultColorWrap>
        <ResultColor>Orange</ResultColor>
        <ResultText>주변에 활기를 가득 채워주는 당신의 색깔은 Orange</ResultText>
        <ResultContent>
          <ResultProperty>발랄한</ResultProperty>
          <CompatibleColor>궁합이 맞는 컬러 </CompatibleColor>
        </ResultContent>
      </ResultColorWrap>
    </Layout>
  );
}

export default TestResult;

const Layout = styled.div`
  margin-top: 7.3rem;
  width: 192.5rem;
  height: 101rem;
`;

const ResultColorWrap = styled.div`
  float: left;
  margin-top: 7.3rem;
  margin-left: 23rem;
  border: solid 1px;
  width: 111.6rem;
  height: 88rem;
`;
const ResultColor = styled.div`
  font-family: 'Junge';
  font-size: 9rem;
  font-weight: 400;
`;

const ResultText = styled.div`
  margin-top: 2.4rem;
  width: 37.9rem;
  font-family: 'NanumMyeongjo';
  font-size: 3rem;
  font-weight: 400;
`;

const ResultContent = styled.div`
  margin-left: 1.8rem;
  font-family: 'Noto Sans';
`;
const ResultProperty = styled.div`
  margin-top: 2.4rem;
  font-size: 1.8rem;
  font-weight: 500;
`;

const CompatibleColor = styled.div``;

const ImageWrapper = styled.div`
  float: right;
  margin-top: 21.6rem;
  margin-right: 39.2rem;
  border: solid 1px;
  width: 39.2rem;
  height: 39.2rem;
`;
