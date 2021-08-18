import React from 'react';
import { ButtonBackDefault } from 'assets';
import styled from 'styled-components';
import Detail from './Detail';
import { media } from '@styles/theme';
import { GetDetailData } from 'lib/api/detail/detail';
import { useRouter } from 'next/router';
import Image from 'next/image';

function ProductDetailWrap(props) {
  const perfumeName = props.perfumeName;
  const data = GetDetailData(perfumeName);
  const router = useRouter();

  return (
    <>
      {data.data && (
        <>
          <ButtonBack src={ButtonBackDefault.src} onClick={() => router.back()} alt="button-back" />
          <FlexWrap>
            <ContentWrap>
              <Image
                className="product"
                src={data.data[0].perfume_img}
                alt="sample"
                width="51.1rem"
                height="77.1rem"
              />
              <Detail data={data.data[0]} />
            </ContentWrap>
          </FlexWrap>
        </>
      )}
    </>
  );
}

export default ProductDetailWrap;

const ButtonBack = styled.img`
  position: absolute;
  margin-top: 1.9rem;
  margin-left: 10.3rem;
  cursor: pointer;
  width: 1.6rem;
  height: 3.6rem;

  ${media.mobile} {
    top: 8.2rem;
    margin-top: 0;
    margin-left: 1.8rem;
    width: 1.4rem;
    height: 2.4rem;
  }
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 19.2rem;
  margin-bottom: 11.7rem;

  ${media.mobile} {
    margin-top: 12.1rem;
    margin-bottom: 0;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 149.5rem;

  ${media.mobile} {
    flex-direction: column;
    align-items: center;
    width: 33.6rem;
  }

  .product {
    width: 51.1rem !important;
    height: 77.1rem !important;

    ${media.mobile} {
      width: 20rem;
      height: 30.1rem;
    }
  }
`;
