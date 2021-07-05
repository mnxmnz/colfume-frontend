import React from 'react';
import styled from 'styled-components';
import { Contour } from '../../assets';

interface Props {
  datum: object;
  idx: number;
}

function Recommendation(props: Props) {
  const idx = props.idx;
  const datum = props.datum;

  if (idx % 3 === 2)
    return (
      <RecommWrap key={idx}>
        <>
          <div>
            <img className="item" src={datum.image.src} alt="" />
            <span id="keyword">{datum.keyword}</span>
          </div>
          <img className="contour" id="none" src={Contour.src} alt="" />
        </>
      </RecommWrap>
    );
  return (
    <RecommWrap key={idx}>
      <>
        <div>
          <img className="item" src={datum.image.src} alt="" />
          <span id="keyword">{datum.keyword}</span>
        </div>
        <img className="contour" src={Contour.src} alt="" />
      </>
    </RecommWrap>
  );
}

export default Recommendation;

const RecommWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  .item {
    width: 33.2rem;
    height: 45rem;
  }

  .contour {
    padding-left: 6.7rem;
  }

  #none.contour {
    visibility: hidden;
  }

  #keyword {
    font-size: 2.2rem;
    line-height: 3.96rem;
  }
`;
