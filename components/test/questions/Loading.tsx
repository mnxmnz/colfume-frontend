import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { LoadingIcon } from '../../../assets';

function Loading() {
  return (
    <LoadingWrap>
      <IconWrap>
        <Image src={LoadingIcon} />
        <Text>당신의 컬러를 찾는 중입니다.</Text>
      </IconWrap>
    </LoadingWrap>
  );
}

const LoadingWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(62, 62, 62, 0.4);
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const IconWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    animation: loadingAnimation 2s;
  }

  @keyframes loadingAnimation {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Text = styled.div`
  margin-top: 3.6rem;
  line-height: 5.8rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 4rem;
  font-weight: 500;
  font-style: normal;
`;

export default Loading;
