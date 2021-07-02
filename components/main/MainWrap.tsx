import React from 'react';
import Content from './Content';
import { Slide } from '../';
import {
  Palette01Red,
  Palette02Orange,
  Palette03Yellow,
  Palette04Green,
  Palette05Blue,
  Palette06Purple,
  Palette07Pink,
  Palette08White,
} from '../../assets';
import Mood from './Mood';

function MainWrap() {
  const dataList: object[] = [
    {
      image: Palette01Red,
      keyword: 'Red',
    },
    {
      image: Palette02Orange,
      keyword: 'Orange',
    },
    {
      image: Palette03Yellow,
      keyword: 'Yellow',
    },
    {
      image: Palette04Green,
      keyword: 'Green',
    },
    {
      image: Palette05Blue,
      keyword: 'Blue',
    },
    {
      image: Palette06Purple,
      keyword: 'Purple',
    },
    {
      image: Palette07Pink,
      keyword: 'Pink',
    },
    {
      image: Palette08White,
      keyword: 'White',
    },
  ];
  // length: 한 번에 몇 개씩 보여줄지

  return (
    <>
      <Content
        title="About Colfume"
        content="8가지의 색과 함께 쉽고 재미있게 향을 알아보세요
        
        8가지의 색과 함께 쉽고 재미있게 향을 알아보세요"
        paddingTitle="12.5rem"
        paddingContent="6.3rem"
      />
      <Content
        title="Colfume Palette"
        content="8가지의 색과 함께 쉽고 재미있게 향을 알아보세요"
        paddingTitle="25rem"
        paddingContent="0rem"
      />
      <Slide dataList={dataList} length={4} />
      <Mood />
      <Content
        title="Recommendation"
        content="당신의 상황에 어울리는 향수를 찾아보세요"
        paddingTitle="12.4rem"
        paddingContent="0rem"
      />
    </>
  );
}

export default MainWrap;
