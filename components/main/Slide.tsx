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
  const { className, style, onClick, id } = props;
  const leftButton = React.useRef();

  return (
    <div className={className} id={id} style={{ ...style, display: 'block' }} onClick={onClick}>
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
  const { className, style, onClick, id } = props;
  const rightButton = React.useRef();

  return (
    <div className={className} id={id} style={{ ...style, display: 'block' }} onClick={onClick}>
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
    nextArrow: <ArrowRight id={slideName} />,
    prevArrow: <ArrowLeft id={slideName} />,
    dotsClass: `slick-dots ${slideName}`,
  };

  return (
    <SliderWrap style={styleSlider}>
      <Slider {...settings}>
        {slideName === 'palette'
          ? paletteData.map((datum, idx) => {
              return <img src={datum.image.src} key={idx} alt="" height="277rem" />;
            })
          : sampleData.map((datum, idx) => {
              return <Recommendation datum={datum} idx={idx} />;
            })}
      </Slider>
    </SliderWrap>
  );
}

export default Slide;

const SliderWrap = styled.div`
  .slick-dots.palette {
    bottom: -17rem;
  }

  .slick-dots.recommendation {
    bottom: -8.2rem;
  }
  .slick-dots {
    button::before {
      border: 0.08rem solid;
      border-radius: 50%;
      border-color: black;
      width: 1.5rem;
      height: 1.5rem;
      color: white;
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

  #palette.slick-arrow.slick-prev {
    left: -18.3rem;
  }

  #palette.slick-arrow.slick-next {
    right: -18.3rem;
  }

  #recommendation.slick-arrow.slick-prev {
    top: 45%;
    left: -0.8rem;
  }

  #recommendation.slick-arrow.slick-next {
    top: 45%;
    right: -0.8rem;
  }
`;
