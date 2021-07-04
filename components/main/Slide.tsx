import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import {
  ArrowLeftUnHovered,
  ArrowLeftHovered,
  ArrowRightUnHovered,
  ArrowRightHovered,
} from '../../assets/';
import PaletteData from '../../public/PaletteData';
import SampleData from '../../public/SampleData';
import Recommendation from './Recommendation';

interface Props {
  slideName: string;
  length: number;
  paddingBottom: string;
  paddingTop: string;
  width: string;
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
  const paletteData = PaletteData;
  const sampleData = SampleData;
  const length = props.length;
  const styleSlider = {
    paddingBottom: `${props.paddingBottom}`,
    paddingTop: `${props.paddingTop}`,
    width: `${props.width}`,
  };
  const slideName = props.slideName;

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
    <SliderWrap style={styleSlider}>
      <Slider {...settings}>
        {slideName === 'palette'
          ? paletteData.map((datum, idx) => {
              return <img src={datum.image.src} key={idx} alt="" height="277rem" />;
            })
          : sampleData.map((datum, idx) => {
              return <Recommendation className={slideName} datum={datum} idx={idx} />;
            })}
      </Slider>
    </SliderWrap>
  );
}

export default Slide;

const SliderWrap = styled.div`
  .slick-dots {
    bottom: -17rem;

    button::before {
      width: 1.5rem;
      height: 1.5rem;
      color: white;
      border: 0.08rem solid;
      border-radius: 50%;
      border-color: black;
    }
    .slick-active {
      button::before {
        background-color: #3e3e3e;
        color: #3e3e3e;
      }
    }
  }

  .slick-arrow {
    img {
      width: 2.1rem;
      height: 4.6rem;
    }
  }

  .slick-arrow::before {
    display: none;
  }

  .slick-arrow.slick-prev {
    // custom
    left: -18.3rem;
  }

  .slick-arrow.slick-next {
    // custom
    right: -18.3rem;
  }

  .slick-dots {
    // custom
  }
`;
