import React from 'react';
import styled from 'styled-components';
import AnswerList from './AnswerList';
import QuestionList from './QuestionList';

function Questions() {
  return (
    <>
      <QuestionList />
      <AnswerList />
    </>
  );
}

export default Questions;
