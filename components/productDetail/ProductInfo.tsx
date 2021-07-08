import React from 'react';
import styled from 'styled-components';
import { IconMainCol } from '../../assets';

function ProductInfo() {
  return (
    <ProductInfoWrap>
      <img src={IconMainCol.src} />
      <div className="info">
        <span className="info__brand">Brand name</span>
        <span className="info__product">한글로 제품명 표기</span>
        <div className="info__detail">
          <span className="info__detail--volume">000ml</span>
          <span className="info__detail--price">00,000원</span>
        </div>
      </div>
    </ProductInfoWrap>
  );
}

export default ProductInfo;

const ProductInfoWrap = styled.div`
  display: flex;
  border-bottom: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.black};

  img {
    width: 11.4rem;
    height: 12.5rem;
    padding-top: 0.9rem;
    padding-bottom: 0.4rem;
    padding-right: 3.4rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    font-family: NanumMyeongjo;

    &__brand {
      font-family: Junge;
      font-size: 4rem;
      line-height: 4.861rem;
      padding-bottom: 1.5rem;
    }

    &__product {
      font-size: 2.6rem;
      line-height: 2.86rem;
      padding-bottom: 2.5rem;
    }

    &__detail {
      color: ${({ theme }) => theme.colors.borderGray};
      font-size: 1.8rem;
      line-height: 1.98rem;
      padding-bottom: 4.6rem;

      &--volume {
        padding-right: 2rem;
      }
    }
  }
`;
