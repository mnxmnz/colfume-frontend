import React from 'react';
import PerfumeImg from './PerfumeImg';
import { media } from '@styles/theme';
import styled from 'styled-components';

const perfumeData = [
  // 임시 데이터
  {
    id: 1,
    name: 'ZARA PERfUME',
    keyword: ['# 달콤한', ' # 달콤한', ' # 달콤한'],
    image:
      'https://beautymatter.com/media/pages/articles/berlin-packaging-acquires-roma-international/30cd49356a-1616086617/berlin-packaging-acquires-roma-international2.jpeg',
  },
  {
    id: 2,
    name: 'ZARA PERFUME',
    keyword: ['# 새콤한', ' # 새콤한', ' # 달콤한'],
    image:
      'https://beautymatter.com/media/pages/articles/berlin-packaging-acquires-roma-international/30cd49356a-1616086617/berlin-packaging-acquires-roma-international2.jpeg',
  },
  {
    id: 3,
    name: 'ZARA PERFUME',
    keyword: ['# 새콤한', ' # 새콤한'],
    image:
      'https://beautymatter.com/media/pages/articles/berlin-packaging-acquires-roma-international/30cd49356a-1616086617/berlin-packaging-acquires-roma-international2.jpeg',
  },
  {
    id: 4,
    name: 'ZARA PERFUME',
    keyword: ['# 새콤한', ' # 새콤한'],
    image:
      'https://beautymatter.com/media/pages/articles/berlin-packaging-acquires-roma-international/30cd49356a-1616086617/berlin-packaging-acquires-roma-international2.jpeg',
  },
  {
    id: 5,
    name: 'ZARA PERFUME',
    keyword: ['# 새콤한', ' # 새콤한'],
    image: 'http://www.dailygrid.net/news/photo/201905/222119_121434_5843.jpg',
  },
  {
    id: 6,
    name: 'ZARA PERFUME',
    keyword: ['# 새콤한', ' # 새콤한'],
    image: 'http://www.dailygrid.net/news/photo/201905/222119_121434_5843.jpg',
  },
];

function ImageTable() {
  return (
    <ImageTableWrap>
      <ImageTableBox>
        {perfumeData.map(data => (
          <PerfumeImg key={data.id} image={data.image} name={data.name} keyword={data.keyword} />
        ))}
      </ImageTableBox>
    </ImageTableWrap>
  );
}

const ImageTableWrap = styled.div`
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

export default ImageTable;
