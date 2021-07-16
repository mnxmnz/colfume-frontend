import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Green } from '../../../assets/';
import { Line } from '../../../assets';
import { media } from '@styles/theme';
import MatchingColor from './MatchingColor';
import CopyLinkBtn from './CopyLinkBtn';
import { testResultAtom } from '../../../states/test';
import { useRecoilValue } from 'recoil';

function TestResult() {
  const data = useRecoilValue(testResultAtom);
  console.log('data', data);

  return (
    <Layout>
      <LineWrapper>
        <Image alt="line" src={Line} />
      </LineWrapper>
      <LeftWrapper>
        <ResultColor>{data.palette_name}</ResultColor>
        {data.palette_title?.split('\n').map((line, idx) => (
          <KeySentence key={idx}>
            {line.includes('//')
              ? line.split('//').map((l, i) => (i % 2 === 1 ? <span id="bold">{l}</span> : l))
              : line}
            <br />
          </KeySentence>
        ))}
        <KeyWord>{data.palette_keyword}</KeyWord>
        <MatchingColorText>궁합이 맞는 컬러</MatchingColorText>
        <MatchingColor color="sky" background="#96BCD2" />
        <MatchingColor color="Vanila" background="#FCE6AE" />
      </LeftWrapper>
      <RightWrapper>
        <ImageWrapper>
          <Image alt="resultColorGreen" src={Green} />
        </ImageWrapper>
        <RecommendBtn>향수 추천을 받아보세요</RecommendBtn>
        <CopyLinkBtn />
        <RetryBtn>다시 하기</RetryBtn>
      </RightWrapper>
      <DescriptionWrap>
        {data.palette_explanation?.split('\n').map((line, idx) => (
          <Description key={idx}>
            {line.includes('//')
              ? line.split('//').map((l, i) => (i % 2 === 1 ? <span id="bold">{l}</span> : l))
              : <li>{line}</li>}
            <br />
          </Description>
        ))}
      </DescriptionWrap>
    </Layout>
  );
}

export default TestResult;

const DescriptionBox = styled.div`
  display: none;
  ${media.mobile} {
    display: block;
    margin-top: 75rem;
    background: #fafafa;
    height: 87.9rem;
  }
`;
const LineWrapper = styled.div`
  margin-top: 7.2rem;
  padding-top: 7.2rem;
  width: 22rem;
  ${media.mobile} {
    width: 12.5rem;
  }
`;
const Layout = styled.div`
  margin-top: 7.2rem;
  width: 192rem;
  ${media.mobile} {
    margin-top: 6.5rem;
    width: 37.5rem;
    height: 157.7rem;
  }
`;
const LeftWrapper = styled.div`
  float: left;
  margin-left: 23rem;
  ${media.mobile} {
    align-items: center;
    margin-left: 0;
    text-align: center;
  }
`;
const ResultColor = styled.div`
  font-family: Junge;
  font-size: 8rem;
  font-weight: 400;
  ${media.mobile} {
    margin: 0 auto;
    text-align: center;
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
    margin-top: 2.2rem;
    font-size: 1.8em;
    font-weight: 700;
  }
`;
const KeyWord = styled.div`
  margin-top: 4rem;
  margin-left: 1.8rem;
  font-family: NotoSans;
  font-size: 1.8rem;
  font-weight: 500;
  ${media.mobile} {
    font-size: 1.4rem;
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
    margin-left: 7rem;
    width: 25rem;
    font-size: 1.4rem;
  }
`;

const DescriptionWrap = styled.div`
  margin-top: 40.8rem;
  width: 80rem;
  font-family: NotoSans;
  font-size: 1.8rem;
  font-weight: 400;
  margin-left: 24.8rem;

  ${media.mobile} {
    display: none;
  }
`;
const Description = styled.div`
  margin-bottom: 2rem;
  > li {
    margin-top: 0.5rem;
  }
  ${media.mobile} {
    margin-left: 2rem;
    padding-top: 2.6rem;
    width: 33.5rem;
    font-family: NotoSans;
    font-size: 1.5rem;
    > li {
      margin-bottom: 3rem;
    }
  }
`;

const RightWrapper = styled.div`
  float: right;
  margin-top: 18.3rem;
  margin-right: 24.5rem;
  width: 50rem;
  height: 30.3rem;
  ${media.mobile} {
    align-items: center;
    margin-right: 0;
    width: 100%;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 33.1rem;
  height: 33.1rem;
  align-items: center;
  ${media.mobile} {
    align-items: center;
    margin: 0 auto;
    width: 16rem;
    height: 16rem;
  }
`;

const RecommendBtn = styled.button`
  margin-top: 10.7rem;
  background-color: ${({ theme }) => theme.colors.black};
  width: 50rem;
  height: 7.1rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: NotoSans;
  font-size: 2.8rem;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
  ${media.mobile} {
    margin-top: 5.5rem;
    width: 25.2rem;
    height: 3.578rem;
    font-size: 1.4rem;
  }
`;

const RetryBtn = styled.button`
  float: right;
  margin-top: 2.4rem;
  border: solid 1px;
  width: 23.2rem;
  height: 6.496rem;
  font-family: NotoSans;
  font-size: 2.4rem;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }

  ${media.mobile} {
    float: right;
    margin-top: 1.222rem;
    margin-right: 6.1rem;
    width: 11.8rem;
    height: 3.274rem;
    font-size: 1.2rem;
  }
`;
