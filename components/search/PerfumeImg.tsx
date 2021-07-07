import React from 'react';
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
  cursor: pointer;
  position: relative;
  .fume_img {
    opacity: 1;
    display: block;
    width: 26rem;
    height: 35.2rem;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }

  .hover_img {
    color: white;
    text-align: center;
    font-family: 'NotoSans';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(1, 1, 1, 0.4);
  }

  &:hover img {
    opacity: 0.7;
  }

  &:hover .hover_img {
    opacity: 1;
  }
`;

const Name = styled.div`
  margin-top: 2.5rem;
  display: flex;
  letter-spacing: 4px;
  width: 20rem;
  font-weight: bold;
  font-size: 2.6rem;
  line-height: 3.12rem;
`;

const Keyword = styled.div`
  margin-top: 1.5rem;
  font-size: 2rem;
  line-height: 2.4rem;
  text-align: center;
  line-height: 2.4rem;
`;

export default PerfumeImg;
