import React from 'react';
import styled from 'styled-components';
import { BannerImg } from '../../assets';
import Image from 'next/image';

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

const BannerWrap = styled.div`
  margin-top: 7.2rem;

  img {
    width: 100%;
    height: 94.1rem;
    object-fit: cover;
  }
`;

const BannerBox = styled.div`
  display: flex;
  position: absolute;
  top: 27.5rem;
  flex-direction: column;
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MainTitle = styled.div`
  font-family: 'Junge';
  font-size: 12rem;
`;

const SubTitle = styled.div`
  margin-top: 2.5rem;
  font-size: 2.8rem;
  font-size: 2.8rem;
`;

const TestBnt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 26.876rem;
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
`;

export default Banner;
