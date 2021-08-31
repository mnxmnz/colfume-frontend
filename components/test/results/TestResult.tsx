import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Line } from '../../../assets';
import { media } from '@styles/theme';
import ResultTitle from './ResultTitle';
import ResultDescription from './ResultDescription';
import ResultButton from './ResultButton';
import { useResetRecoilState } from 'recoil';
import { questionNumberAtom } from '../../../states/test';
import { useRouter } from 'next/router';
import Loading from '../questions/Loading';

function TestResult({ data }) {
  const router = useRouter();
  const queryString = router.asPath;
  const isShared = queryString.includes('true');

  const LOADING_DELAY = 3000;
  const [loading, setLoading] = useState(!isShared);

  const restartTest = useResetRecoilState(questionNumberAtom);

  useEffect(() => {
    const loadingFinished = setTimeout(() => {
      setLoading(false);
    }, LOADING_DELAY);
    return () => {
      clearTimeout(loadingFinished);
      restartTest();
    };
  }, [restartTest]);

  if (loading) return <Loading isShared={loading} />;

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
  width: 10.9375vw;

  ${media.mobile} {
    width: 11.1rem;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14.5rem;
  margin-left: 12.6042vw;

  ${media.mobile} {
    align-items: center;
    margin-top: 9rem;
    margin-left: 0;
  }
`;
