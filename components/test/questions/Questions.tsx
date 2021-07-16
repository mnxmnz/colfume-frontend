import React from 'react';
import styled from 'styled-components';
import AnswerList from './AnswerList';
import ProgressBar from './ProgressBar';
import QuestionList from './QuestionList';

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
  flex: 1 1 auto;
  justify-content: center;
`;

export default Questions;
