import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Line } from '../../../assets';
import { media } from '@styles/theme';
import MatchingColor1 from './MatchingColor1';
import MatchingColor2 from './MatchingColor2';
import CopyLinkBtn from './CopyLinkBtn';
import { testResultAtom } from '../../../states/test';
import { paletteAtom } from 'states/product';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Link from 'next/link';
import sizeMe from 'react-sizeme';

function TestResult(props) {
  const { width, height } = props.size;
  const isMobile = width <= 700 ? true : false;
  const data = useRecoilValue(testResultAtom);
  const setPaletteAtom = useSetRecoilState(paletteAtom);
  const submitColorResult = () => {
    setPaletteAtom(data.palette_name);
  };
  console.log('테스트결과 페이지', data);

  return (
    <Layout>
      <LineWrapper>
        <Image alt="line" src={Line} />
      </LineWrapper>
      <LeftWrapper>
        <ResultColor>{data.palette_name}</ResultColor>
        {data.palette_title?.split('\n').map((line, idx) => (
          <KeySentence key={idx}>
            {line}
            <br />
          </KeySentence>
        ))}
        <KeyWord>{data.palette_keyword}</KeyWord>
        <MatchingColorText>궁합이 맞는 컬러</MatchingColorText>
        <MatchingColor1 />
        {!data.palette_matchColor[1] ? '' : <MatchingColor2 />}
      </LeftWrapper>
      <RightWrapper>
        <ImageWrapper>
          <img alt="resultColor" src={data.palette_img} width="16rem" height="16rem" />
        </ImageWrapper>
        <Link href="/product" passHref>
          <RecommendBtn onClick={submitColorResult}>향수 추천을 받아보세요</RecommendBtn>
        </Link>
        <CopyLinkBtn />
        <RetryBtn>다시 하기</RetryBtn>
      </RightWrapper>
      <DescriptionWrap>
        {data.palette_explanation?.split('\n').map((line, idx) => (
          <Description>
            <span>·</span>
            <DescWrap>
              {line.includes('//') ? (
                line.split('//').map((l, i) => (
                  <Desc>
                    {l}
                    <br />
                  </Desc>
                ))
              ) : (
                <Desc>{line}</Desc>
              )}
            </DescWrap>
          </Description>
        ))}
      </DescriptionWrap>
      {isMobile ? (
        <MobileBox>
          <MobileDesc>
            {' '}
            {data.palette_explanation?.split('\n').map((line, idx) => (
              <Description>
                <span>·</span>
                <DescWrap>
                  {line.includes('//') ? (
                    line.split('//').map((l, i) => (
                      <Desc>
                        {l}
                        <br />
                      </Desc>
                    ))
                  ) : (
                    <Desc>{line}</Desc>
                  )}
                </DescWrap>
              </Description>
            ))}
          </MobileDesc>
        </MobileBox>
      ) : (
        ''
      )}
      å
    </Layout>
  );
}

export default sizeMe({ monitorHeight: true })(TestResult);
const MobileBox = styled.div`
  margin-top: 70rem;
  background: ${({ theme }) => theme.colors.gray1};
  width: 100%;
  height: 87.9rem;
`;

const MobileDesc = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
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
    width: 37rem;
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

const DescriptionWrap = styled.div`
  margin-top: 40.8rem;
  margin-bottom: 2rem;
  margin-left: 24.8rem;
  line-height: 3.6rem;
  font-family: NotoSans;
  span {
    margin-right: 1rem;
    line-height: 3.6rem;
    font-size: 2.4rem;
  }
  ${media.mobile} {
    display: none;
  }
`;

const Description = styled.div`
  display: flex;
  align-items: flex-start;
`;

const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14.5rem;
  margin-left: 12.6042vw;

  ${media.mobile} {
    margin-left: 2rem;
    padding-top: 2.6rem;
    width: 33.5rem;
    line-height: 1.8rem;
    font-family: NotoSans;
    font-size: 1.5rem;
  }
`;

const RightWrapper = styled.div`
  float: right;
  margin-top: 18.3rem;
  margin-right: 24.5rem;
  width: 50rem;
  height: 30.3rem;
  ${media.mobile} {
    justify-content: center;
    margin-top: 9rem;
    margin-left: 0;
  }
`;
