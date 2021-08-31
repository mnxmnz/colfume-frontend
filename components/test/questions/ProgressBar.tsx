import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { questionNumberAtom } from '../../../states/test';
import { media } from '@styles/theme';

function ProgressBar() {
  const progress = useRecoilValue(questionNumberAtom);

  return (
    <>
      {progress <= 6 && (
        <ProgressWrap>
          <NumberWrap>
            <CurrentProgress progress={progress}>{progress + 1}/7</CurrentProgress>
          </NumberWrap>
          <ProgressBarWrap>
            <Current progress={progress} />
          </ProgressBarWrap>
        </ProgressWrap>
      )}
    </>
  );
}

const ProgressWrap = styled.div`
  margin-top: 8.4722vh;
  margin-bottom: 11.1111vh;

  ${media[768]} {
    margin-top: 6.7rem;
  }
`;

const NumberWrap = styled.div`
  margin: 0 auto;
  width: 63rem;

  ${media[768]} {
    margin: 0 auto;
    width: 28rem;
  } ;
`;

const CurrentProgress = styled.div<{ progress: number }>`
  transition: all 1s ease-in-out;
  width: ${({ progress }) => 9 * (progress + 1) + 1.2}rem;
  text-align: right;
  line-height: 4rem;
  font-family: Junge;
  font-size: 2.2rem;
  font-weight: 400;

  ${media[768]} {
    width: ${({ progress }) => 4 * (progress + 1) + 0.8}rem;
    text-align: right;
    line-height: 2.2rem;
    font-size: 1.2rem;
    font-weight: 400;
  } ;
`;

const ProgressBarWrap = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.progressBeige};
  width: 63rem;
  height: 1rem;

  ${media[768]} {
    width: 28rem;
    height: 1rem;
  } ;
`;

const Current = styled.div<{ progress: number }>`
  position: absolute;
  transition: all 1s ease-in-out;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.borderGray};
  width: ${({ progress }) => 9 * (progress + 1)}rem;
  height: 1rem;

  ${media[768]} {
    width: ${({ progress }) => 4 * (progress + 1)}rem;
    height: 1rem;
  } ;
`;

export default ProgressBar;
