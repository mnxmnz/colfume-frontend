import React from 'react';
import styled from 'styled-components';
import QuestionData from './QuestionData';
import { useRecoilValue } from 'recoil';
import { questionNumberAtom } from '../../../states/test';
import { media } from '@styles/theme';

function QuestionList() {
  const data = QuestionData;
  const progress = useRecoilValue(questionNumberAtom);

  return (
    <QuestionWrap>
      <NumberWrap>
        <Number>
          {data[progress]?.index + 1}
          <span>.</span>
        </Number>
        <ContentWrap>
          <Text>{data[progress]?.text01}</Text>
          <Text>{data[progress]?.text02}</Text>
          <Detail>{data[progress]?.detail}</Detail>
          {data[progress]?.detail02 && <span>{data[progress]?.detail02}</span>}
        </ContentWrap>
      </NumberWrap>
    </QuestionWrap>
  );
}

const QuestionWrap = styled.div`
  margin-top: 107.2px;

  ${media[768]} {
    margin-top: 88px;
    margin-left: 0;
  }
`;

const NumberWrap = styled.div`
  display: flex;

  ${media[768]} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Number = styled.div`
  line-height: 16.2rem;
  font-family: Junge;
  font-size: 9rem;
  font-weight: 400;

  ${media[768]} {
    margin-bottom: 27.36px;
    text-align: center;
    line-height: 79px;
    font-size: 44px;

    span {
      display: none;
    }
  }
`;

const ContentWrap = styled.div`
  margin-left: 2rem;
  padding-top: 5.9rem;

  ${media[768]} {
    margin-left: 0;
    padding-top: 0;
    text-align: center;

    span {
      margin-top: 19px;
      line-height: 28.8px;
      font-size: 16px;
    }
  }
`;

const Text = styled.div`
  line-height: 7.2rem;
  font-family: NanumMyeongjo;
  font-size: 4rem;
  font-weight: 700;

  ${media[768]} {
    text-align: center;
    line-height: 40px;
    font-size: 22px;
    font-weight: 700;
  }
`;

const Detail = styled.div`
  margin-top: 3.7037vh;
  line-height: 4.7rem;
  font-size: 2.6rem;
  font-weight: 400;

  ${media[768]} {
    margin-top: 19px;
    line-height: 28.8px;
    font-size: 16px;
  }
`;

export default QuestionList;
