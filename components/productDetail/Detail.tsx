import React from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import Filter from './Filter';
import Description from './Description';

function Detail() {
  return (
    <DetailWrap>
      <ProductInfo />
      <Filter />
      <Description />
    </DetailWrap>
  );
}

export default Detail;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 87.6rem;
`;
