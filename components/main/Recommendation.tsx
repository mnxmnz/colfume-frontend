import React from 'react';
import { useSetRecoilState } from 'recoil';
import { productDetailAtom } from 'states/detail';
import styled from 'styled-components';
import { Contour } from '../../assets';
import { media } from '@styles/theme';
import Link from 'next/link';

interface MoodType {
  _id: string;
  mood_name: string;
}

function Recommendation(props) {
  const datum = props.datum[1];
  const setPerfumeName: any = useSetRecoilState(productDetailAtom);
  const handleClick = () => {
    setPerfumeName(datum.perfume_name);
  };
  const idx = props.idx;
  const moods: [string, MoodType][] = Object.entries(datum?.moods[0]);
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
            <ItemImg src={datum.perfume_img} alt="product main image" />
          </Recomm>
          <Hovered>
            <Name>{datum.perfume_name}</Name>
            <Keyword>{moods.map(mood => mood[1] && `#${mood[1].mood_name} `)}</Keyword>
          </Hovered>
        </>
        {idx % 3 === 2 ? (
          <HiddenImg id="hidden" src={Contour.src} alt="product image" />
        ) : (
          <ContourImg id="contour" src={Contour.src} alt="product main image" />
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
  height: 45rem;

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

  ${media.mobile} {
    display: none;
  }
`;

const HiddenImg = styled.img`
  padding-left: 6.7rem;
  height: 45rem;

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

  ${media.mobile} {
    display: none;
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
    margin-right: 1.25rem;
    width: 11rem;
    height: 15rem;
  }
`;

const Hovered = styled.div`
  display: flex;
  position: absolute;
  left: 7.05rem;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.5s ease;
  opacity: 0;
  background-color: rgba(1, 1, 1, 0.4);
  width: 32.85rem;
  height: 45rem;
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
    left: 0.7rem;
    width: 12rem;
    height: 15rem;
  }
`;

const Name = styled.div`
  display: flex;
  margin-bottom: 1rem;
  margin-left: 2.6rem;
  width: 19.1rem;
  line-height: 3.12rem;
  letter-spacing: 0.078rem;
  font-size: 2.6rem;
  font-weight: bold;

  ${media.mobile} {
    margin-bottom: 0.4rem;
    margin-left: 0.6rem;
    width: 8.2rem;
    line-height: 1.56rem;
    letter-spacing: 0.1em;
    font-size: 1.2rem;
  }
`;

const Keyword = styled.div`
  margin-bottom: 2.4rem;
  margin-left: 2.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.048rem;
  font-family: 'NotoSans Thin';
  font-size: 1.6rem;

  ${media.mobile} {
    margin-bottom: 0.6rem;
    margin-left: 0.6rem;
    line-height: 1.26rem;
    letter-spacing: -0.028rem;
    font-size: 0.7rem;
  }
`;
