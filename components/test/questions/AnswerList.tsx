import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import AnswerData from './AnswerData';
import { media } from '@styles/theme';
import { useRecoilState, useRecoilValue } from 'recoil';
import { questionNumberAtom, answerAtom } from '../../../states/test';
import { testResult } from '../../../lib/api/test/postAnswer';

function AnswerList() {
  const [progress, setProgress] = useRecoilState(questionNumberAtom);
  const answer = useRecoilValue(answerAtom);

  const color = 'red';

  const data = AnswerData;
  const length = data[progress]?.length;

  const styleMargin = {
    marginTop: '4rem',
  };

  const styleWidth = {
    width: `${length}rem`,
  };

  const onClickAnswer = async data => {
    try {
      answer[`answer${progress + 1}`] = data;
      setProgress(progress => progress + 1);
      const testData = await testResult(answer);
      if (progress === 6) {
        console.log('Data', testData);
        Router.push(`/test/result/${color}`);
        setProgress(0);
      }
    } catch (e) {
      return e;
    }
  };

  return (
    <AnswerWrap>
      <Text onClick={() => onClickAnswer(data[progress]?.answer01.value)}>
        {data[progress]?.answer01.text}
      </Text>
      <LineWrap>
        <Circle />
        <Line style={styleWidth} />
        <MobileCircle />
      </LineWrap>
      <Text onClick={() => onClickAnswer(data[progress]?.answer02.value)} style={styleMargin}>
        {data[progress]?.answer02.text}
      </Text>
      <LineWrap>
        <Circle />
        <Line style={styleWidth} />
        <MobileCircle />
      </LineWrap>
    </AnswerWrap>
  );
}

const AnswerWrap = styled.div`
  margin-top: 14.4444vh;
  margin-right: 20.3125vw;
  text-align: right;

  ${media[768]} {
    margin-top: 22.5rem;
    margin-right: 0;
    text-align: center;
  }
`;

const Text = styled.div`
  margin-bottom: 0.8rem;
  line-height: 4.3rem;
  font-size: 3rem;
  font-weight: 400;

  ${media[768]} {
    margin-bottom: 0.6rem;
    font-size: 1.6rem;
  }
`;

const LineWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${media[768]} {
    justify-content: center;
  }
`;

const Circle = styled.div`
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.black};
  width: 0.8rem;
  height: 0.8rem;
`;

const MobileCircle = styled.div`
  display: none;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.black};
  width: 0.8rem;
  height: 0.8rem;

  ${media[768]} {
    display: block;
  }
`;

const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 0.16rem;
  animation: lineAnimation 3s;

  @keyframes lineAnimation {
    0% {
      width: 0rem;
    }
    100% {
      width: var(length) rem;
    }
  }
`;

export default AnswerList;
