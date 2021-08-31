import React from 'react';
import { useRouter } from 'next/router';
import { ProductDetailWrap } from '../../components/index';
import { GetDetailData } from 'lib/api/detail/detail';

function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const productData = GetDetailData(id);

  return <ProductDetailWrap productData={productData} />;
}

export default Detail;
