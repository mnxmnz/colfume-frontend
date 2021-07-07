import React from 'react';
import styled from 'styled-components';
import AnswerData from './AnswerData';
import { useRecoilState } from 'recoil';
import { questionNumberAtom } from '../../../states/test';

function AnswerList() {
  const [progress, setProgress] = useRecoilState(questionNumberAtom);

  const data = AnswerData;
  const length = data[progress].length;

  const styleMargin = {
    marginTop: '4rem',
  };

  const styleWidth = {
    width: `${length}rem`,
  };

  const onClickAnswer = () => {
    setProgress(progress => progress + 1);
  };

  return (
    <AnswerWrap>
      <Text onClick={onClickAnswer}>{data[progress].answer01.text}</Text>
      <LineWrap>
        <Circle />
        <Line style={styleWidth} />
      </LineWrap>
      <Text onClick={onClickAnswer} style={styleMargin}>
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
  font-size: 3rem;
  font-weight: 400;
  line-height: 4.3rem;
`;

const LineWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Circle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.85rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Line = styled.div`
  margin-top: 1.2rem;
  height: 1.6px;
  background-color: ${({ theme }) => theme.colors.black};
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
