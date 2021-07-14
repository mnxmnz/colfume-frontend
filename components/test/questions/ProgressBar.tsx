import React from 'react';
import styled from 'styled-components';
import QuestionData from './QuestionData';
import { useRecoilValue } from 'recoil';
import { questionNumberAtom } from '../../../states/test';

function ProgressBar() {
  const data = QuestionData;
  const progress = useRecoilValue(questionNumberAtom);

  return (
    <ProgressBarWrap>
      <Current />
    </ProgressBarWrap>
  );
}

const ProgressBarWrap = styled.div`
  margin: 0 auto;
  margin-top: 16.9444vh;
  margin-bottom: 11.1111vh;
  background-color: ${({ theme }) => theme.colors.progressBeige};
  width: 63rem;
  height: 1rem;
`;

const Current = styled.div`
  position: absolute;
  transition: all 0.5s ease-in-out;
  z-index: 10;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.borderGray};
  width: clac(9 * progress) rem;
`;

export default ProgressBar;
