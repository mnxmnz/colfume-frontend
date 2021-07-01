import React from 'react';
import Slider from 'react-slick';
import { SlideContent } from '../';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { ArrowLeftUnHovered } from '../../assets';

interface Props {
  dataList: object[];
  length: number;
}

function Slide(props: Props) {
  const dataList = props.dataList;
  const length = props.length;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: length,
    slidesToScroll: length,
    cssEase: 'linear',
    arrows: true,
  };

  return (
    <SliderWrap>
      <Slider {...settings}>
        {dataList.map(datum => {
          return <SlideContent datum={datum} />;
        })}
      </Slider>
    </SliderWrap>
  );
}

export default Slide;

const SliderWrap = styled.div`
  width: 106.6rem;
  margin-left: 10rem;

  .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }

  .slick-next:before {
    opacity: 1;
    color: black;
  }
`;
