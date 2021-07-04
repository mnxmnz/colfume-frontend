import React from 'react';
import styled from 'styled-components';

interface Props {
  datum: object;
  idx: number;
}

function Recommendation(props: Props) {
  const idx = props.idx;
  const datum = props.datum;

  return (
    <RecommWrap key={idx}>
      <div>
        <img src={datum.image.src} alt="" />
        <span id="keyword">{datum.keyword}</span>
      </div>
    </RecommWrap>
  );
}

export default Recommendation;

const RecommWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 33.2rem;
    height: 45rem;
  }

  #keyword {
    font-size: 2.2rem;
  }
`;
