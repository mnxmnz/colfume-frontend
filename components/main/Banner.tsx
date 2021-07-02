import React from 'react';
import styled from 'styled-components';
import { BannerImg } from '../../assets';
import Image from 'next/image';

const BannerWrap = styled.div`
  img {
    width: 100vw;
  }
`;

const Banner = () => {
  return (
    <BannerWrap>
      <Image src={BannerImg} />
    </BannerWrap>
  );
};

export default Banner;
