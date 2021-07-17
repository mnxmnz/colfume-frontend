import React from 'react';
import styled from 'styled-components';
import MatchingColor1 from './MatchingColor1';
import MatchingColor2 from './MatchingColor2';
import { media } from '@styles/theme';

function ResultTitle(props) {
  const data = props.data;
  console.log(data);
  return (
    <TitleWrap>
      <ResultColor>{data?.palette_name}</ResultColor>
      <WordWrap>
        {data?.palette_title?.split('\n').map((line, idx) => (
          <KeySentence key={idx}>
            {line}
            <br />
          </KeySentence>
        ))}
        <KeyWord>{data?.palette_keyword}</KeyWord>
        <MatchingWrap>
          <MatchingColorText>궁합이 맞는 컬러</MatchingColorText>
          <MatchingColWrap>
            <MatchingColor1 />
          </MatchingColWrap>
        </MatchingWrap>
      </WordWrap>
    </TitleWrap>
  );
}

export default ResultTitle;

const TitleWrap = styled.div`
  float: left;

  ${media.mobile} {
    align-items: center;
    margin-left: 0;
    text-align: center;
  }
`;

const ResultColor = styled.div`
  line-height: 16.2rem;
  font-family: Junge;
  font-size: 9rem;
  font-weight: 400;

  ${media.mobile} {
    margin-bottom: 2.2.rem;
    text-align: center;
    line-height: 7.92rem;
    font-size: 4.4rem;
  }
`;

const KeySentence = styled.div`
  margin-top: 2.4rem;
  margin-left: 1.2rem;
  font-family: NanumMyeongjo;
  font-size: 3rem;
  font-weight: 400;

  ${media.mobile} {
    margin: 0;
    line-height: 3.24rem;
    font-size: 1.8em;
    font-weight: 700;
  }
`;

const WordWrap = styled.div`
  display: flex;
  flex-direction: column;
  ${media.mobile} {
    align-items: center;
  }
`;

const KeyWord = styled.div`
  margin-top: 4rem;
  margin-left: 1.8rem;
  font-family: NotoSans;
  font-size: 1.8rem;
  font-weight: 500;

  ${media.mobile} {
    margin-top: 3rem;
    margin-left: 0;
    line-height: 2.52rem;
    font-size: 1.4rem;
  }
`;

const MatchingWrap = styled.div`
  display: flex;

  ${media.mobile} {
    flex-direction: column;
  }
`;

const MatchingColWrap = styled.div`
  display: flex;
  align-items: center;

  ${media.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MatchingColorText = styled.div`
  float: left;
  margin-top: 1rem;
  margin-left: 1.8rem;
  width: 13rem;
  font-family: NotoSans;
  font-size: 1.8rem;
  font-weight: 500;

  ${media.mobile} {
    align-items: center;
    margin-top: 0rem;
    margin-left: 0rem;
    width: 25rem;
    font-size: 1.4rem;
  }
`;
