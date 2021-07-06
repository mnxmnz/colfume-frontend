import React from 'react';
import styled from 'styled-components';
import { BannerImg } from '../../assets';
import Image from 'next/image';

const BannerWrap = styled.div`
  margin-top: 7.4rem;

  img {
    width: 100vw;
    position: relative;
    justify-content: center;
  }
`;

const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 22.7rem;
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MainTitle = styled.div`
  font-size: 12rem;
  font-family: 'Junge';
`;

const SubTitle = styled.div`
  font-size: 2.8rem;
  margin-top: 2rem;
  margin-bottom: 16%;
`;

const TestBnt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  font-family: 'Junge';
  width: 38.2rem;
  height: 10.7rem;
  border: 0.3rem solid #3e3e3e;
  margin: auto;

  &:hover {
    cursor: pointer;
  }
`;

const Banner = () => {
  return (
    <BannerWrap>
      <Image src={BannerImg} />
      <BannerBox>
        <TitleBox>
          <MainTitle>Find Your Colfume</MainTitle>
          <SubTitle>컬러테스트와 함께 나에게 어울리는 색과 향수를 찾아보세요</SubTitle>
        </TitleBox>
        <TestBnt>Start</TestBnt>
      </BannerBox>
    </BannerWrap>
  );
};

export default Banner;
