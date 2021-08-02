import React from 'react';
import { useSetRecoilState } from 'recoil';
import { productDetailAtom } from 'states/detail';
import styled from 'styled-components';
import { Contour } from '../../assets';
import { media } from '@styles/theme';
import Link from 'next/link';
import { IRecommendProps, IRecommendData } from 'types/main';

function Recommendation(props: IRecommendProps) {
  const datum: IRecommendData = props.datum[1];
  const idx = props.idx;

  const moods = Object.entries(datum?.moods[0]);

  const setPerfumeName = useSetRecoilState(productDetailAtom);

  const handleClick = () => {
    setPerfumeName(datum.perfume_name);
  };

  if (datum.moods[0] === null) return;
  if (datum.moods === null) return;

  return (
    <Link
      href={{
        pathname: `/product/${datum._id}`,
      }}
      passHref
    >
      <RecommWrap key={idx} onClick={handleClick}>
        <>
          <Recomm>
            <ItemImg src={datum.perfume_img} alt="productImage" />
            <KeywordWrap>
              <Keyword>{moods.map(mood => mood[1] && `#${mood[1].mood_name}`)}</Keyword>
            </KeywordWrap>
          </Recomm>
          <Hovered>
            <Name>{datum.perfume_name}</Name>
          </Hovered>
        </>
        {idx % 3 === 2 ? (
          <HiddenImg id="hidden" src={Contour.src} alt="hidden" />
        ) : (
          <ContourImg id="contour" src={Contour.src} alt="sampleImage" />
        )}
      </RecommWrap>
    </Link>
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

  ${media[1440]} {
    padding-left: 2.5rem;
    height: 38rem;
  }

  ${media[1100]} {
    padding-left: 1.85rem;
    height: 31.18rem;
  }

  ${media[768]} {
    padding-left: 2.5rem;
    height: 20.3rem;
  }
`;

const HiddenImg = styled.img`
  padding-left: 6.7rem;

  ${media[1440]} {
    padding-left: 2.5rem;
    height: 38rem;
  }

  ${media[1100]} {
    padding-left: 1.85rem;
    height: 31.18rem;
  }

  ${media[768]} {
    padding-left: 2.5rem;
    height: 20.3rem;
  }
`;

const Recomm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    opacity: 0.7;
  }
`;

const ItemImg = styled.img`
  width: 33.2rem;
  height: 45rem;

  ${media[1440]} {
    width: 28rem;
    height: 38rem;
  }

  ${media[1100]} {
    width: 23rem;
    height: 31.18rem;
  }

  ${media[768]} {
    width: 15rem;
    height: 20.3rem;
  }

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

  ${media[1440]} {
    left: 3.5rem;
    width: 27rem;
    height: 38rem;
  }

  ${media[1100]} {
    left: 3rem;
    width: 21rem;
    height: 31rem;
  }

  ${media[768]} {
    left: 2rem;
    width: 16rem;
    height: 20.3rem;
  }

  ${media.mobile} {
    display: none;
  }
`;

const KeywordWrap = styled.div`
  ${media[1440]} {
    padding-left: 1rem;
  }

  ${media[1100]} {
    padding-left: 1.5rem;
  }

  ${media[768]} {
    padding-left: 0rem;
  }

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

  ${media[1440]} {
    line-height: 3.7rem;
    font-size: 2rem;
  }

  ${media[1100]} {
    line-height: 3rem;
    font-size: 1.8rem;
  }

  ${media[768]} {
    line-height: 1.32rem;
    font-size: 0.8rem;
  }
`;
const Name = styled.div`
  display: block;
  width: 18rem;
  text-align: center;
  line-height: 3.12rem;
  letter-spacing: 3px;
  font-size: 2.6rem;
  font-weight: bold;

  ${media[768]} {
    width: 15rem;
    line-height: 2rem;
    font-size: 1.5rem;
  }
`;
