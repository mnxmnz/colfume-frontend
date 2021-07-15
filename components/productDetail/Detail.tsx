import React from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import Filter from './Filter';
import Description from './Description';
import { media } from '@styles/theme';

function Detail({ data }) {
  console.log(data);

  return (
    <>
      <DetailWrap>
        <ProductInfo
          brand={data.brand}
          price={data.price}
          capacity={data.capacity}
          name={data.perfume_name}
          palette={data.palette_image}
        />
        <Filter moods={data.moods[0]} styles={data.styles[0]} colors={data.colors[0]} />
        <Description
          top={data.top}
          middle={data.middle}
          base={data.base}
          description={data.description}
        />
      </DetailWrap>
    </>
  );
}

export default Detail;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 87.6rem;

  ${media.mobile} {
    margin-top: 5.8rem;
    width: 33.6rem;
  }
`;
