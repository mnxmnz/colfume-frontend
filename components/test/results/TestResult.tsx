import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Green } from '../../../assets/';
import { Line } from '../../../assets';
import { media } from '@styles/theme';
import MatchingColor from './MatchingColor';
import CopyLinkBtn from './CopyLinkBtn';

function TestResult() {
  const descriptions = [
    'Green은 생명의 색이기도 하며, 안전, 인내를 의미합니다.',
    '또한 Green은 인테리어를 포함하여 다양한 디자인 요소에서 이용될 정도로, 자연스럽고 안정된 모습을 느끼게 해줘요.',
    '숲속에 자리한 풀잎들과 나무에서 흘러나오는 향기가 떠오르는 색깔이에요. ',
    'Green이 어울리는 당신은 주변에 쉽게 흔들리지 않으며, 신뢰할 수 있는 사람이에요.',
    '당신은 높은 도덕기준을 가지고 있고, 올바른 일을 하는 것은 당신에게 매우 중요해요. ',
    '위험을 무릅쓰지 않고, 행동을 우선시 하지 않으며, 관찰하는 것을 좋아해요.',
    '당신에게 올곧은 성품과 자연친화적인 매력을 부각시켜줄 Green계열 향수를 써보기를 추천해요!',
  ];
  const listDescription = descriptions.map(description => <li>{description}</li>);
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setWindowSize(JSON.parse(window.localStorage.getItem('size')));
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    window.localStorage.setItem('size', JSON.stringify(windowSize));
  }, [windowSize]);

  const handleResize = () => {
    return setWindowSize(window.innerWidth);
  };

  const isMobile = windowSize <= 375 ? true : false;

  return (
    <Layout>
      <LineWrapper>
        <Image alt="line" src={Line} />
      </LineWrapper>
      <LeftWrapper>
        <ResultColor>Green</ResultColor>
        <KeySentence>주변의 상황에 휘둘리지 않는 올곧음을 가진</KeySentence>
        <KeySentence>당신의 색깔은 Green</KeySentence>
        <KeyWord>발랄한</KeyWord>
        <MatchingColorText>궁합이 맞는 컬러</MatchingColorText>
        <MatchingColor color="Sky" background="#96BCD2" />
        <MatchingColor color="Vanila" background="#FCE6AE" />
        <>
          {isMobile ? (
            ''
          ) : (
            <DescriptionWrap>
              <Description>{listDescription}</Description>
            </DescriptionWrap>
          )}
        </>
      </LeftWrapper>
      <RightWrapper>
        <ImageWrapper>
          <Image alt="resultColorGreen" src={Green} />
        </ImageWrapper>
        <RecommendBtn>향수 추천을 받아보세요</RecommendBtn>
        <CopyLinkBtn />
        <RetryBtn>다시 하기</RetryBtn>
      </RightWrapper>
      <DescriptionBox>
        <Description>{listDescription}</Description>
      </DescriptionBox>
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
  margin-top: 10.1rem;
  width: 80rem;
  font-family: NotoSans;
  font-size: 1.8rem;
  font-weight: 400;

  ${media.mobile} {
    display: none;
  }
`;
const Description = styled.div`
  margin-bottom: 2rem;
  > li {
    margin-top: 2.4rem;
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
    solid: solid 1px;
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
  align-itmes: center;
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
