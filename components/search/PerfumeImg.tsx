import React from 'react';
import { media } from '@styles/theme';
import styled from 'styled-components';

interface PropsType {
  image: string;
  name: string;
  keyword: string;
}

function PerfumeImg(props: PropsType) {
  return (
    <PerfumeImgWrap>
      <img className="fume_img" src={props.image} />
      <div className="hover_img">
        <Name>{props.name}</Name>
        <Keyword>{props.keyword}</Keyword>
      </div>
    </PerfumeImgWrap>
  );
}

const PerfumeImgWrap = styled.div`
  position: relative;
  cursor: pointer;

  &:hover img {
    opacity: 0.7;
  }

  &:hover .hover_img {
    opacity: 1;
  }

  .fume_img {
    display: block;
    backface-visibility: hidden;
    transition: 0.5s ease;
    opacity: 1;
    width: 26rem;
    height: 35.2rem;

    ${media.mobile} {
      width: 16.2rem;
      height: 21.9rem;
    }
  }

  .hover_img {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    flex-direction: column;
    transition: 0.5s ease;
    opacity: 0;
    background-color: rgba(1, 1, 1, 0.4);
    width: 100%;
    height: 100%;
    color: white;
    font-family: 'NotoSans';
  }
`;

const Name = styled.div`
  display: flex;
  margin-top: 23rem;
  margin-left: 2.6rem;
  width: 20rem;
  line-height: 3.12rem;
  letter-spacing: 4px;
  font-size: 2.6rem;
  font-weight: bold;

  ${media.mobile} {
    margin-top: 14.9rem;
    margin-left: 1.7rem;
    width: 10rem;
    line-height: 1.92rem;
    letter-spacing: 0.1em;
    font-size: 1.6rem;
  }
`;

const Keyword = styled.div`
  margin-top: 0.8rem;
  margin-left: 2.6rem;
  line-height: 2.4rem;
  font-size: 1.8rem;

  ${media.mobile} {
    margin-top: 0.3rem;
    margin-left: 1.7rem;
    line-height: 1.8rem;
    font-size: 1rem;
  }
`;

export default PerfumeImg;
