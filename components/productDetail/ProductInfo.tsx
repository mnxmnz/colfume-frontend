import React from 'react';
import styled from 'styled-components';

function ProductInfo(props) {
  const colIcon = props.colIcon;
  const infoData = props.infoData;

  return (
    <ProductInfoWrap>
      <img src={colIcon.src} alt="productMainImage" />
      <TextInfo>
        <BrandName>{infoData.brandName}</BrandName>
        <ProductName>{infoData.productName}</ProductName>
        <Infos>
          <span>{infoData.volume}ml</span>
          <span>{infoData.price}원</span>
        </Infos>
      </TextInfo>
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
    margin-top: 0.9rem;
    margin-right: 3.4rem;
  }
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: NanumMyeongjo;
`;

const BrandName = styled.div`
  font-family: Junge;
  font-size: 4rem;
  line-height: 4.861rem;
  padding-bottom: 1.5rem;
`;

const ProductName = styled.div`
  font-size: 2.6rem;
  line-height: 2.86rem;
  padding-bottom: 2.5rem;
`;

const Infos = styled.div`
  color: ${({ theme }) => theme.colors.borderGray};
  font-size: 1.8rem;
  line-height: 1.98rem;
  padding-bottom: 4.6rem;

  span {
    margin-right: 2rem;
  }
`;
