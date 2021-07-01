import React from 'react';
import { Slide } from '../';
import paletteData from '../../public/PaletteData';

function MainWrap() {
  const dataList = paletteData;
  const length = 4;

  return (
    <div>
      MainWrap
      <Slide dataList={dataList} length={length} />
    </div>
  );
}

export default MainWrap;
