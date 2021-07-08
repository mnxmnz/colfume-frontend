import React from 'react';
import { ButtonBackDefault } from 'assets';
import styled from 'styled-components';
import Detail from './Detail';
import SampleData from './SampleData';

function ProductDetailWrap() {
  return (
    <ContentWrap>
      <img className="btn" src={ButtonBackDefault.src} alt="button-back" />
      <img className="product" src={SampleData.mainImage.src} alt="sample" />
      <Detail data={SampleData} />
    </ContentWrap>
  );
}

export default ProductDetailWrap;

const ContentWrap = styled.div`
  margin-top: 12rem;
  margin-left: 10.3rem;
  margin-right: 21.4rem;
  width: 160.3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .btn {
    padding-top: 1.9rem;
  }

  .product {
    width: 51.1rem;
    height: 77.1rem;
  }
`;
