import React, { useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import AnswerData from './AnswerData';
import { media } from '@styles/theme';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { questionNumberAtom, answerAtom, testResultAtom } from '../../../states/test';
import { testResult } from '../../../lib/api/test/postAnswer';
import Loading from './Loading';

function AnswerList() {
  const [progress, setProgress] = useRecoilState(questionNumberAtom);
  const answer = useRecoilValue(answerAtom);
  const setResult = useSetRecoilState(testResultAtom);
  const restartTest = useResetRecoilState(questionNumberAtom);

  const data = AnswerData;
  const length = data[progress]?.length;
  const mobileLength = data[progress]?.mobileLength;

  const [loading, setLoading] = useState(false);

  const styleMargin = {
    marginTop: '4rem',
  };

  const onClickAnswer = async data => {
    answer[`answer${progress + 1}`] = data;
    setProgress(progress => progress + 1);

    if (progress === 6) {
      try {
        const testData = await testResult(answer);
        setResult(testData);
        setTimeout(() => {
          Router.push(`/test/result/${testData}`);
        }, 2800);
      } catch (e) {
        return e;
      }

      setLoading(true);

      setTimeout(() => {
        restartTest();
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {data[progress] && (
            <AnswerWrap>
              <Text onClick={() => onClickAnswer(data[progress]?.answer01.value)}>
                {data[progress]?.answer01.text}
              </Text>
              <LineWrap>
                <Circle />
                <Line length={length} mobileLength={mobileLength} />
                <MobileCircle />
              </LineWrap>
              <Text
                onClick={() => onClickAnswer(data[progress]?.answer02.value)}
                style={styleMargin}
              >
                {data[progress]?.answer02.text}
              </Text>
              <LineWrap>
                <Circle />
                <Line length={length} mobileLength={mobileLength} />
                <MobileCircle />
              </LineWrap>
            </AnswerWrap>
          )}
        </>
      )}
    </>
  );
}

const AnswerWrap = styled.div`
  margin-top: 14.4444vh;
  margin-right: 20.3125vw;
  text-align: right;

  ${media[768]} {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin-right: 0;
    margin-bottom: 107.712px;
    text-align: center;
  }
`;

const Text = styled.div`
  margin-bottom: 0.8rem;
  line-height: 4.3rem;
  font-size: 3rem;
  font-weight: 400;

  ${media[768]} {
    margin-bottom: 6px;
    line-height: 23.17px;
    font-size: 16px;
    font-weight: 400;
  }
`;

const LineWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${media[768]} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Circle = styled.div`
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.black};
  width: 0.8rem;
  height: 0.8rem;

  ${media[768]} {
    border-radius: 2px;
    width: 4px;
    height: 4px;
  }
`;

const MobileCircle = styled.div`
  display: none;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.black};
  width: 4px;
  height: 4px;

  ${media[768]} {
    display: block;
  }
`;

const Line = styled.div<{ length: number; mobileLength: number }>`
  background-color: ${({ theme }) => theme.colors.black};
  width: ${({ length }) => length}px;
  height: 0.16rem;

  ${media[768]} {
    width: ${({ mobileLength }) => mobileLength}px;
  }
`;

export default AnswerList;
