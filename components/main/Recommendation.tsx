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
      <Recomm>
        <img className="item" src={datum.image.src} alt="sampleImage" />
        <Keyword>{datum.keyword}</Keyword>
      </Recomm>
      <Hovered>
        <Name>{datum.name}</Name>
      </Hovered>
      <img
        className="contour"
        id={idx % 3 === 2 ? 'hidden' : 'show'}
        src={Contour.src}
        alt="sampleImage"
      />
    </RecommWrap>
  );
}

export default Recommendation;

const RecommWrap = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
  cursor: pointer;

  .contour {
    padding-left: 6.7rem;
  }

  #hidden.contour {
    visibility: hidden;
  }
`;

const Recomm = styled.div`
  .item {
    width: 33.2rem;
    height: 45rem;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const Hovered = styled.div`
  display: flex;
  position: absolute;
  left: 7.05rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
  opacity: 0;
  background-color: rgba(1, 1, 1, 0.4);
  width: 32.85rem;
  height: 45rem;
  text-align: center;
  color: white;

  &:hover {
    opacity: 1;
  }
`;

const Keyword = styled.div`
  line-height: 3.96rem;
  font-size: 2.2rem;
`;

const Name = styled.div`
  display: block;
  width: 13rem;
  text-align: center;
  line-height: 3.12rem;
  font-size: 2.6rem;
  font-weight: bold;
`;
