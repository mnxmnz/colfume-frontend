import React from 'react';
import styled from 'styled-components';
import QuestionData from './QuestionData';
import { useRecoilValue } from 'recoil';
import { questionNumberAtom } from '../../../states/test';

function QuestionList() {
  const data = QuestionData;
  const progress = useRecoilValue(questionNumberAtom);

  return (
    <QuestionWrap>
      <NumberWrap>
        <Number>{data[progress].index + 1}.</Number>
        <ContentWrap>
          <Text>{data[progress].text01}</Text>
          <Text>{data[progress].text02}</Text>
          <Detail>{data[progress].detail}</Detail>
        </ContentWrap>
      </NumberWrap>
    </QuestionWrap>
  );
}

const QuestionWrap = styled.div`
  margin-top: 12.4074vh;
  margin-left: 23.8021vw;
`;

const NumberWrap = styled.div`
  display: flex;
`;

const Number = styled.div`
  line-height: 16.2rem;
  font-family: Junge;
  font-size: 9rem;
  font-weight: 400;
`;

const ContentWrap = styled.div`
  margin-left: 2rem;
  padding-top: 5.9rem;
`;

const Text = styled.div`
  line-height: 7.2rem;
  font-family: NanumMyeongjo;
  font-size: 4rem;
  font-weight: 700;
`;

const Detail = styled.div`
  margin-top: 3.7037vh;
  line-height: 4.7rem;
  font-size: 2.6rem;
  font-weight: 400;
`;

export default QuestionList;
