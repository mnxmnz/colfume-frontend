import React from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';
import Image from 'next/image';

function ProductInfo({ brand, price, capacity, name, palette }) {
  return (
    <ProductInfoWrap>
      <Image src={palette} alt="productMainImage" />
      <TextInfo>
        <BrandName>{brand}</BrandName>
        <ProductName>{name}</ProductName>
        <Infos>
          <span>{capacity}</span>
          {price && <span>{price}원</span>}
        </Infos>
      </TextInfo>
    </ProductInfoWrap>
  );
}

export default ProductInfo;

const ProductInfoWrap = styled.div`
  display: flex;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.black};

  ${media.mobile} {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
  }

  img {
    margin-top: 0.9rem;
    margin-right: 3.4rem;
    width: 11.4rem;
    height: 12.5rem;

    ${media.mobile} {
      margin-top: 0;
      margin-right: 2.574rem;
      width: 8rem;
      height: 8.8rem;
    }
  }
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: NanumMyeongjo;
`;

const BrandName = styled.div`
  padding-bottom: 1.5rem;
  line-height: 4.861rem;
  font-family: Junge;
  font-size: 2.6rem;

  ${media.mobile} {
    padding-bottom: 0.8rem;
    line-height: 1.942rem;
    font-size: 1.6rem;
  }
`;

const ProductName = styled.div`
  padding-bottom: 2.5rem;
  line-height: 3.52rem;
  font-size: 3.2rem;

  ${media.mobile} {
    padding-bottom: 2.2rem;
    line-height: 2.42rem;
    font-size: 2.2rem;
  }
`;

const Infos = styled.div`
  padding-bottom: 4.6rem;
  line-height: 1.98rem;
  color: ${({ theme }) => theme.colors.borderGray};
  font-size: 1.8rem;

  ${media.mobile} {
    padding-bottom: 4rem;
    line-height: 1.32rem;
    font-size: 1.2rem;
  }

  span {
    margin-right: 2rem;

    ${media.mobile} {
      margin-right: 1.2rem;
    }
  }
`;
