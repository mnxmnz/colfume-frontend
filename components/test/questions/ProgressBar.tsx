import React from 'react';
import styled from 'styled-components';
import QuestionData from './QuestionData';
import { useRecoilValue } from 'recoil';
import { questionNumberAtom } from '../../../states/test';

function ProgressBar() {
  const data = QuestionData;
  const progress = useRecoilValue(questionNumberAtom);

  return (
    <>
      <NumberWrap>
        <CurrentProgress progress={progress}>{progress + 1}/7</CurrentProgress>
      </NumberWrap>
      <ProgressBarWrap>
        <Current progress={progress} />
      </ProgressBarWrap>
    </>
  );
}

const NumberWrap = styled.div`
  margin: 0 auto;
  margin-top: 16.9444vh;
  width: 63rem;
`;

const CurrentProgress = styled.div<{ progress: number }>`
  transition: all 1s ease-in-out;
  width: ${({ progress }) => 9 * (progress + 1) + 0.8}rem;
  text-align: right;
  line-height: 2.2rem;
  font-family: Junge;
  font-size: 1.2rem;
  font-weight: 400;
`;

const ProgressBarWrap = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.progressBeige};
  width: 63rem;
  height: 1rem;
`;

const Current = styled.div<{ progress: number }>`
  position: absolute;
  transition: all 1s ease-in-out;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.borderGray};
  width: ${({ progress }) => 9 * (progress + 1)}rem;
  height: 1rem;
`;

export default ProgressBar;
