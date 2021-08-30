import React from 'react';
import styled from 'styled-components';
import { Line } from '../../../assets';
import MatchingColor1 from './MatchingColor1';
import MatchingColor2 from './MatchingColor2';
import CopyLinkBtn from './CopyLinkBtn';
import { paletteAtom } from 'states/product';
import { useSetRecoilState } from 'recoil';
import Link from 'next/link';
import sizeMe from 'react-sizeme';
import Image from 'next/image';

function TestResult(props) {
  const { data } = props;
  const { width } = props.size;

  const isMobile = width <= 700 ? true : false;

  const setPaletteAtom = useSetRecoilState(paletteAtom);

  const submitColorResult = () => {
    setPaletteAtom(data.palette_name);
  };

  return (
    data && (
      <Layout>
        <LineWrapper>
          <Image alt="line" src={Line} />
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
          <MatchingColorWrapper>
            <MatchingColor1 data={data} />
            {!data?.palette_matchColor[1] ? '' : <MatchingColor2 data={data} />}
          </MatchingColorWrapper>
        </LeftWrapper>
        <RightWrapper>
          <ImageWrapper>
            <img alt="resultColor" src={data.palette_img} width="160rem" height="160rem" />
          </ImageWrapper>
          <RecommendBtnWrapper>
            <Link href="/product" passHref>
              <RecommendBtn onClick={submitColorResult}>향수 추천을 받아보세요</RecommendBtn>
            </Link>
          </RecommendBtnWrapper>
          <ButtonWrapper>
            <MobileCopyLinkBtn />
            <Link href="/test" passHref>
              <RetryBtn>다시 하기</RetryBtn>
            </Link>
          </ButtonWrapper>
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
  margin-top: 0.5rem;
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
  width: 11rem;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.5rem;
  height: 157.7rem;
  & > *:nth-child(1) {
    align-self: flex-start;
  }
`;
const LeftWrapper = styled.div`
  width: 100%;
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
  font-family: NotoSans;
  font-size: 1.4rem;
  font-weight: 500;
`;
const MatchingColorText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  font-family: NotoSans;
  font-size: 1.4rem;
  font-weight: 500;
`;

const MatchingColorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  display: flex;
  align-items: flex-start;
`;

const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 34.1rem;
`;

const Desc = styled.li`
  margin-left: 3rem;
  padding-top: 2rem;
  width: 32rem;
  line-height: 1.8rem;
  font-family: NotoSans;
  font-size: 1.5rem;
`;

const RightWrapper = styled.div`
  display: flex;
  display: center;
  flex-direction: column;
  margin-top: 9rem;
  width: 100%;
  height: 29rem;
`;

const ImageWrapper = styled.div`
  align-items: center;
  margin: 0 auto;
  width: 16rem;
  height: 16rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 25.2rem;
  & > button:nth-child(2) {
    margin-left: 1.6rem;
  }
`;

const RecommendBtnWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 5rem;
`;

const RecommendBtn = styled.button`
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

const MobileCopyLinkBtn = styled(CopyLinkBtn)`
  margin: 0rem;
`;

const RetryBtn = styled.button`
  margin-top: 1.3rem;
  border: solid 1px;
  width: 11.8rem;
  height: 3.274rem;
  font-family: NotoSans;
  font-size: 1.2rem;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;
