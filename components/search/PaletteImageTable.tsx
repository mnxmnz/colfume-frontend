import React from 'react';
import PerfumeImg from './PerfumeImg';
import { media } from '@styles/theme';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { keywordAtom } from '../../states/search';
import { PaletteData } from '../../lib/api/search/search';

interface PaletteType {
  _id: string;
  mood_name?: string;
  style_name?: string;
}

function PaletteImageTable() {
  const keyword = useRecoilValue(keywordAtom);
  const rawData = PaletteData(keyword);

  // console.log('Data1', rawData.data[0].moods[0].mood1.mood_name);
  // console.log('Data2', rawData.data[0].moods[0].mood2.mood_name);
  // console.log('Data3', rawData.data[0].moods[0].mood3.mood_name);

  return (
    <ImageTableWrap>
      <ImageTableBox>
        {rawData.data &&
          rawData.data.map((data, idx) => {
            console.log(idx);
            return (
              <PerfumeImg
                key={data._id}
                image={data.perfume_image}
                name={data.perfume_name}
                keyword={data.mood_name}
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

  ${media.custom[1300]} {
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
