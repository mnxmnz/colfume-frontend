import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Line } from '../../../assets';
import { media } from '@styles/theme';
import ResultTitle from './ResultTitle';
import ResultDescription from './ResultDescription';
import ResultButton from './ResultButton';
import { testResultAtom } from '../../../states/test';
import { useRecoilValue } from 'recoil';

function TestResult() {
  const data = useRecoilValue(testResultAtom);
  console.log('테스트결과 페이지', data);

  return (
    <>
      <LineWrapper>
        <Image alt="line" src={Line} />
      </LineWrapper>
      <Wrap>
        <Layout>
          <ResultTitle data={data} />
          <ResultDescription description={data.palette_explanation} />
        </Layout>
        <ResultButton data={data} />
      </Wrap>
    </>
  );
}

export default TestResult;

const Wrap = styled.div`
  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LineWrapper = styled.div`
  position: absolute;
  top: 22rem;
  width: 21rem;

  ${media.mobile} {
    top: 12rem;
    width: 11.1rem;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14.5rem;
  margin-left: 24.8rem;
  width: 144rem;

  ${media.mobile} {
    align-items: center;
    margin-top: 9rem;
    margin-left: 0;
    width: 37.4rem;
  }
`;
