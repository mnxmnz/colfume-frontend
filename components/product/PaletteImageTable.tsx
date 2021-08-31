import React from 'react';
import { media } from '@styles/theme';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { paletteAtom } from '../../states/product';
import { GetProductList } from '../../lib/api/product/getProduct';
import PerfumeImg from '../search/PerfumeImg';
import { IMood } from 'types/product';

function PaletteImageTable() {
  const keyword = useRecoilValue(paletteAtom);
  const rawData = GetProductList(keyword);

  return (
    <ImageTableWrap>
      <ImageTableBox>
        {rawData.data &&
          rawData.data.map(data => {
            const moods: [string, IMood][] = Object.entries(data.moods[0]);

            return (
              <PerfumeImg
                key={data._id}
                productId={data._id}
                image={data.perfume_img}
                name={data.perfume_name}
                keyword={moods.map(mood => mood[1] && `#${mood[1].mood_name}`)}
              />
            );
          })}
      </ImageTableBox>
    </ImageTableWrap>
  );
}

const ImageTableWrap = styled.div`
  justify-content: center;
  padding-top: 13rem;
  padding-bottom: 38.4rem;

  ${media.custom(1300)} {
    padding-bottom: 20rem;
  }

  ${media[768]} {
    padding-bottom: 10rem;
  }

  ${media.mobile} {
    padding-top: 3.2rem;
    padding-bottom: 2.6rem;
  }
`;

const ImageTableBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3.2rem;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 113.6rem;

  ${media[1440]} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    max-width: 84rem;
  }

  ${media[768]} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.8rem;
    max-width: 34rem;
  }

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
`;

export default PaletteImageTable;
