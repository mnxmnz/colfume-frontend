import React from 'react';
import styled from 'styled-components';
import AnswerData from './AnswerData';
import { useRecoilState } from 'recoil';
import { questionNumberAtom, answerAtom } from '../../../states/test';
import { testResult } from '../../../lib/api/test/postAnswer';

function AnswerList() {
  const [progress, setProgress] = useRecoilState(questionNumberAtom);
  const [answer, setAnswer] = useRecoilState(answerAtom);

  const data = AnswerData;
  const length = data[progress].length;

  const styleMargin = {
    marginTop: '4rem',
  };

  const styleWidth = {
    width: `${length}rem`,
  };

  const onClickAnswer = data => {
    answer[progress + 1] = data;
    setProgress(progress => progress + 1);
  };

  if (progress === 7) {
    const testData = testResult(answer);
    console.log(testData);
  }

  return (
    <AnswerWrap>
      <Text onClick={() => onClickAnswer(data[progress].answer01.value)}>
        {data[progress].answer01.text}
      </Text>
      <LineWrap>
        <Circle />
        <Line style={styleWidth} />
      </LineWrap>
      <Text onClick={() => onClickAnswer(data[progress].answer02.value)} style={styleMargin}>
        {data[progress].answer02.text}
      </Text>
      <LineWrap>
        <Circle />
        <Line style={styleWidth} />
      </LineWrap>
    </AnswerWrap>
  );
}

const AnswerWrap = styled.div`
  margin-top: 14.4444vh;
  margin-right: 20.3125vw;
  text-align: right;
`;

const Text = styled.div`
  margin-bottom: 0.8rem;
  line-height: 4.3rem;
  font-size: 3rem;
  font-weight: 400;
`;

const LineWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Circle = styled.div`
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.black};
  width: 0.8rem;
  height: 0.8rem;
`;

const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 0.16rem;
  animation: lineAnimation 2s;

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
