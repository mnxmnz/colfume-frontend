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
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin-bottom: 60.192px;
  }
`;

const NumberWrap = styled.div`
  margin: 0 auto;
  width: 63rem;

  ${media[768]} {
    margin: 0 auto;
    width: 280px;
  } ;
`;

const CurrentProgress = styled.div<{ progress: number }>`
  transition: all 1s ease-in-out;
  width: ${({ progress }) => 90 * (progress + 1) + 12}px;
  text-align: right;
  line-height: 4rem;
  font-family: Junge;
  font-size: 2.2rem;
  font-weight: 400;

  ${media[768]} {
    width: ${({ progress }) => 40 * (progress + 1) + 8}px;
    text-align: right;
    line-height: 22px;
    font-size: 12px;
    font-weight: 400;
  } ;
`;

const ProgressBarWrap = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.progressBeige};
  width: 63rem;
  height: 1rem;

  ${media[768]} {
    width: 280px;
    height: 10px;
  } ;
`;

const Current = styled.div<{ progress: number }>`
  position: absolute;
  transition: all 1s ease-in-out;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.borderGray};
  width: ${({ progress }) => 90 * (progress + 1)}px;
  height: 10px;

  ${media[768]} {
    width: ${({ progress }) => 40 * (progress + 1)}px;
    height: 10px;
  } ;
`;

export default ProgressBar;
