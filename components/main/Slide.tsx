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

interface ArrowPropsType {
  id: string;
  className?: string;
  style?: object;
  onClick?: any;
}

function ArrowLeft(props: ArrowPropsType) {
  const { className, style, onClick, id } = props;
  const leftButton: any = React.useRef();

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

function ArrowRight(props: ArrowPropsType) {
  const { className, style, onClick, id } = props;
  const rightButton: any = React.useRef();

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

interface SlidePropsType {
  slideName: string;
  length: number;
  paddingBottom: string;
  paddingTop: string;
  width: string;
}

function Slide(props: SlidePropsType) {
  const slideName = props.slideName;
  const styleSlider = {
    paddingBottom: `${props.paddingBottom}`,
    paddingTop: `${props.paddingTop}`,
    width: `${props.width}`,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.length,
    slidesToScroll: props.length,
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
          ? PaletteData.map((datum, idx) => {
              console.log(datum.image);
              return <img src={datum.image.src} key={idx} alt={datum.keyword} height="277rem" />;
            })
          : SampleData.map((datum, idx) => {
              return <Recommendation datum={datum} idx={idx} />;
            })}
      </Slider>
    </SliderWrap>
  );
}

export default Slide;

const SliderWrap = styled.div`
  height: 74.9rem;

  .slick-dots.palette {
    bottom: -17rem;
  }

  .slick-dots.recommendation {
    bottom: -11rem;
  }

  .slick-dots {
    button::before {
      border: 0.08rem solid;
      border: 0.08rem solid;
      border-radius: 50%;
      border-radius: 50%;
      border-color: ${({ theme }) => theme.colors.black};
      border-color: ${({ theme }) => theme.colors.black};
      width: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
      height: 1.5rem;
      color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.white};
    }

    .slick-active {
      button::before {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.black};
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
