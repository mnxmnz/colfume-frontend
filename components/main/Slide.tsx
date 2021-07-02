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
import { sample } from 'lodash';

interface Props {
  slideName: string;
  length: number;
  paddingBottom: string;
  paddingTop: string;
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
              return <img src={datum.image.src} key={idx} alt="" />;
            })
          : sampleData.map((datum, idx) => {
              return (
                // div로 한 번 더 감싸지 않으면 flex 적용이 안됨,,
                <div>
                  <div className={slideName}>
                    <img src={datum.image.src} key={idx} alt="" />
                    <div id="keyword">{datum.keyword}</div>
                  </div>
                </div>
              );
            })}
      </Slider>
    </SliderWrap>
  );
}

export default Slide;

const SliderWrap = styled.div`
  // custom
  .recommendation {
    display: flex;
    flex-direction: column;
    align-items: center;

    #keyword {
      color: black;
      height: 5.1rem;
      font-size: 2.2rem;
      line-height: 3.96rem;
    }
  }
  .slick-list {
    // custom
    width: 112rem;
  }

  .slick-slide {
    img {
      // custom
      height: 27.7rem;
    }
  }

  .slick-arrow {
    img {
      width: 1.9rem;
      height: 4.432rem;
    }
  }

  .slick-arrow::before {
    display: none;
  }

  .slick-arrow.slick-prev {
    // custom
    left: -18rem;
  }

  .slick-arrow.slick-next {
    // custom
    right: -18rem;
  }

  .slick-dots {
    // custom
    bottom: -17rem;
  }
`;
