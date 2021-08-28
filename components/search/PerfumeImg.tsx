import React from 'react';
import { useSetRecoilState } from 'recoil';
import { productDetailAtom } from 'states/detail';
import { media } from '@styles/theme';
import styled from 'styled-components';
import Link from 'next/link';

interface PropsType {
  image: string;
  name: string;
  keyword: string[];
  productId: string;
}

function PerfumeImg(props: PropsType) {
  const setPerfumeName: any = useSetRecoilState(productDetailAtom);
  const handleClick = () => {
    setPerfumeName(props.name);
  };

  return (
    <Link
      href={{
        pathname: `/product/${props.productId}`,
      }}
      passHref
    >
      <PerfumeImgWrap>
        <img className="fume_img" src={props.image} alt="perfume" />
        <div className="hover_img" onClick={handleClick}>
          <div>
            <Name>{props.name}</Name>
            <Keyword>{props.keyword}</Keyword>
          </div>
        </div>
      </PerfumeImgWrap>
    </Link>
  );
}
const PerfumeImgWrap = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.gray1};
  cursor: pointer;

  &:hover img {
    opacity: 0.7;
  }

  &:hover .hover_img {
    opacity: 1;
  }

  .fume_img {
    display: block;
    backface-visibility: hidden;
    transition: 0.5s ease;
    opacity: 1;
    width: 26rem;
    height: 35.2rem;

    ${media.custom(480)} {
      width: 16.2rem;
      height: 21.9rem;
    }
  }

  .hover_img {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0px;
    left: 0;
    flex-direction: row;
    align-items: flex-end;
    transition: 0.5s ease;
    opacity: 0;
    background-color: rgba(1, 1, 1, 0.4);
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Name = styled.div`
  display: flex;
  margin-bottom: 0.9rem;
  margin-left: 2.6rem;
  width: 20rem;
  line-height: 3.12rem;
  letter-spacing: 3px;
  font-size: 2.6rem;
  font-weight: bold;

  ${media.custom(480)} {
    margin-bottom: 0.3rem;
    margin-left: 1.7rem;
    width: 10rem;
    line-height: 1.92rem;
    letter-spacing: 0.1em;
    font-size: 1.6rem;
  }
`;

const Keyword = styled.div`
  margin-bottom: 2.2rem;
  margin-left: 2.6rem;
  line-height: 2.4rem;
  font-size: 1.8rem;

  ${media.custom(480)} {
    margin-bottom: 1.1rem;
    margin-left: 1.7rem;
    line-height: 1.8rem;
    font-size: 1rem;
  }
`;

export default PerfumeImg;
