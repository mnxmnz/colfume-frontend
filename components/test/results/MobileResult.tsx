import React from 'react';
import styled from 'styled-components';

import { Line } from '../../../assets';
import MatchingColor1 from './MatchingColor1';
import MatchingColor2 from './MatchingColor2';
import CopyLinkBtn from './CopyLinkBtn';
import { testResultAtom } from '../../../states/test';
import { paletteAtom } from 'states/product';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Link from 'next/link';
import sizeMe from 'react-sizeme';
import ResultData from './ResultData';

function TestResult(props) {
  const { data } = props;
  const { width, height } = props.size;

  const isMobile = width <= 700 ? true : false;

  const setPaletteAtom = useSetRecoilState(paletteAtom);

  const submitColorResult = () => {
    setPaletteAtom(data.palette_name);
  };

  return (
    data && (
      <Layout>
        <LineWrapper>
          <img alt="line" src={Line} />
        </LineWrapper>
        <LeftWrapper>
          <ResultColor>{data?.palette_name}</ResultColor>
          {data.palette_title?.split('\n').map((line, idx) => (
            <KeySentence key={idx}>
              {line}
              <br />
            </KeySentence>
          ))}
          <KeyWord>{data?.palette_keyword}</KeyWord>
          <MatchingColorText>궁합이 맞는 컬러</MatchingColorText>
          <MatchingColor1 data={data} />
          {!data?.palette_matchColor[1] ? '' : <MatchingColor2 data={data} />}
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
      </Layout>
    )
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
  width: 12.5rem;
`;

const Layout = styled.div`
  margin-top: 6.5rem;
  width: 37rem;
  height: 157.7rem;
`;
const LeftWrapper = styled.div`
  float: left;
  align-items: center;
  margin-left: 0;
  text-align: center;
`;
const ResultColor = styled.div`
  margin: 0 auto;
  text-align: center;
  font-family: Junge;
  font-size: 4.4rem;

  font-weight: 400;
`;

const KeySentence = styled.div`
  margin-top: 2.2rem;
  margin-left: 1.2rem;
  font-family: NanumMyeongjo;
  font-size: 1.8em;
  font-weight: 700;
`;
const KeyWord = styled.div`
  margin-top: 4rem;
  margin-left: 1.8rem;
  font-family: NotoSans;

  font-size: 1.4rem;
  font-weight: 500;
`;
const MatchingColorText = styled.div`
  float: left;
  align-items: center;
  margin-top: 1rem;
  margin-left: 7rem;
  width: 25rem;
  font-family: NotoSans;
  font-size: 1.4rem;
  font-weight: 500;
`;

const Description = styled.div`
  display: flex;
  align-items: flex-start;
`;

const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 80rem;
`;

const Desc = styled.li`
  margin-left: 2rem;
  padding-top: 2.6rem;
  width: 33.5rem;
  line-height: 1.8rem;
  font-family: NotoSans;
  font-size: 1.5rem;
`;

const RightWrapper = styled.div`
  float: right;

  justify-content: center;
  margin-top: 9rem;
  margin-right: 0;
  width: 37rem;
  height: 29rem;
`;

const ImageWrapper = styled.div`
  align-items: center;
  margin: 0 auto;
  background: violet;
  width: 16rem;
  height: 16rem;
`;

const RecommendBtn = styled.button`
  margin: 0 auto;
  margin-top: 5.5rem;
  margin-left: 6.2rem;
  background-color: ${({ theme }) => theme.colors.black};
  width: 25.2rem;
  height: 3.578rem;

  color: ${({ theme }) => theme.colors.white};
  font-family: NotoSans;
  font-size: 1.4rem;

  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;

const RetryBtn = styled.button`
  float: right;
  margin-top: 1.222rem;
  margin-right: 5.8rem;
  width: 11.8rem;
  height: 3.274rem;
  font-family: NotoSans;
  font-size: 1.2rem;

  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;
