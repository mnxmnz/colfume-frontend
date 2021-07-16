import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { questionNumberAtom } from '../../../states/test';
import { media } from '@styles/theme';

function ProgressBar() {
  const progress = useRecoilValue(questionNumberAtom);

  return (
    <ProgressWrap>
      <NumberWrap>
        <CurrentProgress progress={progress}>{progress + 1}/7</CurrentProgress>
      </NumberWrap>
      <ProgressBarWrap>
        <Current progress={progress} />
      </ProgressBarWrap>
    </ProgressWrap>
  );
}

const ProgressWrap = styled.div`
  ${media[768]} {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin-bottom: 60.192px;
  }
`;

const NumberWrap = styled.div`
  ${media[768]} {
    margin: 0 auto;
    width: 280px;
  } ;
`;

const CurrentProgress = styled.div<{ progress: number }>`
  transition: all 1s ease-in-out;
  font-family: Junge;

  ${media[768]} {
    width: ${({ progress }) => 40 * (progress + 1) + 8}px;
    text-align: right;
    line-height: 22px;
    font-size: 12px;
    font-weight: 400;
  } ;
`;

const ProgressBarWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.progressBeige};

  ${media[768]} {
    margin: 0 auto;
    width: 280px;
    height: 10px;
  } ;
`;

const Current = styled.div<{ progress: number }>`
  position: absolute;
  transition: all 1s ease-in-out;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.borderGray};

  ${media[768]} {
    width: ${({ progress }) => 40 * (progress + 1)}px;
    height: 10px;
  } ;
`;

export default ProgressBar;
