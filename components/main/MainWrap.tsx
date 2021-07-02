import React from 'react';
import { Slide } from '../';
import { Palette01Red, Palette02Orange, Palette03Yellow, Palette04Green, Palette05Blue, Palette06Purple, Palette07Pink, Palette08White } from '../../assets';
import Banner from './Banner';

function MainWrap() {
  const dataList: object[] = [
    {
      image: Palette01Red,
      keyword: "Red"
    },
    {
      image: Palette02Orange,
      keyword: "Orange"
    },
    {
      image: Palette03Yellow,
      keyword: "Yellow"
    },
    {
      image: Palette04Green,
      keyword: "Green"
    },
    {
      image: Palette05Blue,
      keyword: "Blue"
    },
    {
      image: Palette06Purple,
      keyword: "Purple"
    },
    {
      image: Palette07Pink,
      keyword: "Pink"
    },
    {
      image: Palette08White,
      keyword: "White"
    }
  ];
  // length: 한 번에 몇 개씩 보여줄지

  return (
    <div>
      <Banner />
        <Slide dataList={dataList} length={4} />
    </div>
  );
}

export default MainWrap;