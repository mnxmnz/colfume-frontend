import React from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';
import CopyLinkBtn from './CopyLinkBtn';
import Link from 'next/link';
import { paletteAtom } from 'states/product';
import { useSetRecoilState } from 'recoil';

function ResultButton(props) {
  const data = props.data;
  const setPaletteAtom = useSetRecoilState(paletteAtom);
  const submitColorResult = () => {
    setPaletteAtom(data.palette_name);
  };

  return (
    <Wrap>
      <ImageWrapper>
        <img alt="resultColorGreen" src={data?.palette_img} />
      </ImageWrapper>
      <Link href="/product" passHref>
        <RecommendBtn onClick={submitColorResult}>향수 추천을 받아보세요</RecommendBtn>
      </Link>
      <BtnWrap>
        <CopyLinkBtn />
        <Link href="/test">
          <RetryBtn>다시 하기</RetryBtn>
        </Link>
      </BtnWrap>
    </Wrap>
  );
}

export default ResultButton;

const Wrap = styled.div`
  display: flex;
  position: absolute;
  top: 21.8rem;
  right: 10rem;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 63rem;

  ${media.mobile} {
    top: 44rem;
    right: initial;
    align-items: center;
    margin-right: 0;
    width: 25.2rem;
    height: 35rem;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin: 0 auto;
    width: 33.1rem;
    height: 33.1rem;

    ${media.mobile} {
      margin: 0 auto;
      width: 16rem;
      height: 16rem;
    }
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
    height: 3.5rem;
    font-size: 1.4rem;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50rem;

  ${media.mobile} {
    margin-top: 1.3rem;
    width: 25.2rem;
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
    margin-top: 0rem;
    width: 11.8rem;
    height: 3.274rem;
    font-size: 1.2rem;
  }
`;
