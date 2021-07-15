import React from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import Filter from './Filter';
import Description from './Description';
import { media } from '@styles/theme';
import { GetDetailData } from 'lib/api/detail/detail';

function Detail(props) {
  const perfumeName = '구찌 길티 러브에디션(2021) 뿌르 옴므[EDT]';
  const perfumeData = GetDetailData(perfumeName);
  // console.log(perfumeData);
  const data = props.data; // 임시데이터
  // console.log(data);
  // console.log(perfumeData.data);

  return (
    <>
      {perfumeData.data && (
        <DetailWrap>
          <ProductInfo
            brand={perfumeData.data[0].brand}
            price={perfumeData.data[0].price}
            capacity={perfumeData.data[0].capacity}
            name={perfumeData.data[0].perfume_name}
            colIcon={data.mainColor}
          />
          <Filter
            colData={data.images}
            moodData={data.mood}
            styleData={data.style}
            moods={perfumeData.data[0].moods[0]}
            styles={perfumeData.data[0].styles[0]}
          />
          <Description
            top={perfumeData.data[0].top}
            middle={perfumeData.data[0].middle}
            base={perfumeData.data[0].base}
            description={perfumeData.data[0].description}
          />
        </DetailWrap>
      )}
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
