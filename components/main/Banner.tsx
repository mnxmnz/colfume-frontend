import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { media } from '@styles/theme';
import { BannerImg } from '../../assets';
import Image from 'next/image';

function Banner() {
  return (
    <BannerWrap>
      <Image src={BannerImg} />
      <BannerBox>
        <TitleBox>
          <MainTitle>Find Your Colfume</MainTitle>
          <SubTitle>
            <span>컬러테스트와 함께 나에게 </span>
            <span>어울리는 색과 향수를 찾아보세요</span>
          </SubTitle>
        </TitleBox>
        <Link href="/test">
          <StartBnt>Start</StartBnt>
        </Link>
      </BannerBox>
    </BannerWrap>
  );
}

const BannerWrap = styled.div`
  margin-top: 7.2rem;

  img {
    width: 100vw;
    object-fit: cover;
    ${media.custom(1770)} {
      height: 85rem;
    }
    ${media[1440]} {
      height: 80rem;
    }
    ${media[768]} {
      height: 80rem;
    }
    ${media.mobile} {
      height: 48.8rem;
    }
  }
`;

const BannerBox = styled.div`
  display: flex;
  position: absolute;
  top: 20rem;
  flex-direction: column;
  width: 100%;

  ${media.mobile} {
    top: 17rem;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MainTitle = styled.div`
  font-family: 'Junge';
  font-size: 12rem;

  ${media[1440]} {
    font-size: 10rem;
  }

  ${media[768]} {
    padding: 0 10%;
    font-size: 8rem;
  }

  ${media.mobile} {
    margin-top: -10%;
    font-size: 3.2rem;
  }
`;

const SubTitle = styled.div`
  margin-top: 2rem;
  margin-bottom: 16%;
  font-size: 2.8rem;

  ${media[1440]} {
    font-size: 2.3rem;
  }

  ${media[768]} {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    line-height: 3.2rem;
    font-size: 2rem;
  }

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 9rem;
    line-height: 2.31rem;
    letter-spacing: 0.05em;
    font-size: 1.4rem;
  }
`;

const StartBnt = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  border: 0.3rem solid ${({ theme }) => theme.colors.black};
  width: 38.2rem;
  height: 10.7rem;
  font-family: 'Junge';
  font-size: 5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
  }

  ${media[768]} {
    border: 0.2rem solid ${({ theme }) => theme.colors.black};
    width: 24rem;
    height: 7rem;
    font-size: 2.45rem;
  }

  ${media.mobile} {
    border: 0.16rem solid ${({ theme }) => theme.colors.black};
    width: 16.2rem;
    height: 4.5rem;
    font-size: 2rem;
  }
`;

export default Banner;
