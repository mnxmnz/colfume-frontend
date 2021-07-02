import React from 'react';
import Slider from 'react-slick';
import { SlideContent } from '../';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import {
  ArrowLeftUnHovered,
  ArrowLeftHovered,
  ArrowRightUnHovered,
  ArrowRightHovered,
} from '../../assets/';
interface Props {
  dataList: object[];
  length: number;
}

function ArrowLeft(props) {
  const { className, style, onClick } = props;
  const leftButton = React.useRef();

  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      <img
        src={ArrowLeftUnHovered.src}
        alt=""
        onMouseEnter={() => (leftButton.current.src = ArrowLeftHovered.src)}
        onMouseLeave={() => (leftButton.current.src = ArrowLeftUnHovered.src)}
        ref={leftButton}
      />
    </div>
  );
}

function ArrowRight(props) {
  const { className, style, onClick } = props;
  const rightButton = React.useRef();
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
      <img
        src={ArrowRightUnHovered.src}
        alt=""
        onMouseEnter={() => (rightButton.current.src = ArrowRightHovered.src)}
        onMouseLeave={() => (rightButton.current.src = ArrowRightUnHovered.src)}
        ref={rightButton}
      />
    </div>
  );
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
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  return (
    <SliderWrap>
      <Slider {...settings}>
        {dataList.map((datum, idx) => {
          return <SlideContent datum={datum} key={idx} />;
        })}
      </Slider>
    </SliderWrap>
  );
}

export default Slide;

const SliderWrap = styled.div`
  width: 142.8rem;
  .slick-arrow {
    img {
      width: 1.9rem;
      height: 4.432rem;
    }
  }
`;
