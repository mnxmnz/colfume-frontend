import React from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import Filter from './Filter';
import Description from './Description';

function Detail(props) {
  const data = props.data;

  return (
    <DetailWrap>
      <ProductInfo colIcon={data.mainColor} infoData={data.infos} />
      <Filter colData={data.images} moodData={data.mood} styleData={data.style} />
      <Description levels={data.levels} description={data.description} />
    </DetailWrap>
  );
}

export default Detail;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 87.6rem;
`;
