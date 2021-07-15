import React from 'react';
import styled from 'styled-components';
import { Contour } from '../../assets';
import { media } from '@styles/theme';

interface MoodType {
  _id: string;
  mood_name: string;
}

function Recommendation(props) {
  const datum = props.datum[1];
  const idx = props.idx;

  const moods: [string, MoodType][] = Object.entries(datum?.moods[0]);
  if (datum.moods[0] === null) return;
  if (datum.moods === null) return;
  return (
    <RecommWrap key={idx}>
      <Recomm>
        <ItemImg src={datum.perfume_img} alt="productImage" />
        <KeywordWrap>
          <Keyword>{moods.map(mood => mood[1] && `#${mood[1].mood_name}`)}</Keyword>
        </KeywordWrap>
      </Recomm>
      <Hovered>
        <Name>{datum.perfume_name}</Name>
      </Hovered>
      {idx % 3 === 2 ? (
        <HiddenImg id="hidden" src={Contour.src} alt="hidden" />
      ) : (
        <ContourImg id="contour" src={Contour.src} alt="sampleImage" />
      )}
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
`;

const ContourImg = styled.img`
  padding-left: 6.7rem;
`;

const HiddenImg = styled.img`
  padding-left: 6.7rem;
`;

const Recomm = styled.div`
  &:hover {
    opacity: 0.7;
  }

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ItemImg = styled.img`
  width: 33.2rem;
  height: 45rem;

  ${media.mobile} {
    width: 10.981rem;
    height: 14.3rem;
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
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 1;
  }

  ${media.mobile} {
    display: none;
  }
`;

const KeywordWrap = styled.div`
  ${media.mobile} {
    display: flex;
    justify-content: space-between;
    padding-top: 1.3rem;
    width: 100%;
  }
`;

const Keyword = styled.span`
  line-height: 3.96rem;
  font-size: 2.2rem;
  font-weight: 500;

  ${media.mobile} {
    line-height: 1.32rem;
    font-size: 0.8rem;
  }
`;
const Name = styled.div`
  display: block;
  width: 13rem;
  text-align: center;
  line-height: 3.12rem;
  font-size: 2.6rem;
  font-weight: bold;
`;
