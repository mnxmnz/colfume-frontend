import React from 'react';
import styled from 'styled-components';
import { Contour } from '../../assets';

interface Img {
  height: number;
  src: string;
  width: number;
}

interface DatumType {
  image: Img;
  keyword: string;
  name: string;
}
interface Props {
  datum: DatumType;
  idx: number;
}

function Recommendation(props: Props) {
  const datum = props.datum;
  const idx = props.idx;

  return (
    <RecommWrap key={idx}>
      <div>
        <img className="item" src={datum.image.src} alt="sampleImage" />
        <span id="keyword">{datum.keyword}</span>
      </div>
      <img
        className="contour"
        id={idx % 3 === 2 ? 'hidden' : 'show'}
        src={Contour.src}
        alt="sampleImage"
      />
      <div className="hovered">
        <span>{datum.name}</span>
      </div>
    </RecommWrap>
  );
}

export default Recommendation;

const RecommWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;

  .item {
    width: 33.2rem;
    height: 45rem;
  }

  .contour {
    padding-left: 6.7rem;
  }

  #hidden.contour {
    visibility: hidden;
  }

  #keyword {
    line-height: 3.96rem;
    font-size: 2.2rem;
  }

  .hovered {
    color: white;
    text-align: center;
    font-family: 'NotoSans';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 7.05rem;
    height: 45rem;
    width: 32.85rem;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(1, 1, 1, 0.4);
  }

  &:hover img {
    opacity: 0.7;
  }

  &:hover .hovered {
    opacity: 1;
  }

  .hovered > span {
    display: block;
    width: 13rem;
    text-align: center;
    font-weight: bold;
    font-size: 2.6rem;
    line-height: 3.12rem;
  }
`;
