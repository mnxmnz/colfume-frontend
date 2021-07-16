import React from 'react';
import styled from 'styled-components';
import AnswerList from './AnswerList';
import ProgressBar from './ProgressBar';
import QuestionList from './QuestionList';
import { media } from '@styles/theme';

function Questions() {
  return (
    <QuestionWrap>
      <QuestionList />
      <AnswerList />
      <ProgressBar />
    </QuestionWrap>
  );
}

const QuestionWrap = styled.div`
  overflow-x: hidden;

  ${media[768]} {
    overflow: hidden;
  }
`;

export default Questions;
