import React from 'react';
import { ProductDetailWrap } from '../../components/index';
import { useRecoilValue } from 'recoil';
import { productDetailAtom } from 'states/detail';

function Detail() {
  const perfumeName = useRecoilValue(productDetailAtom);
  // console.log(perfumeName);
  return <ProductDetailWrap perfumeName={perfumeName} />;
}

export default Detail;
