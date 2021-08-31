import React from 'react';
import AnswerList from './AnswerList';
import ProgressBar from './ProgressBar';
import QuestionList from './QuestionList';

function Questions() {
  return (
    <>
      <QuestionList />
      <AnswerList />
      <ProgressBar />
    </>
  );
}

export default Questions;
