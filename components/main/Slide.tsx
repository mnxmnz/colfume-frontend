import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { media } from '@styles/theme';
import {
  ArrowLeftUnHovered,
  ArrowLeftHovered,
  ArrowRightUnHovered,
  ArrowRightHovered,
} from '../../assets';
import Recommendation from './Recommendation';
import { useSetRecoilState } from 'recoil';
import { paletteAtom } from '../../states/product';

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

function Slide(props) {
  const slideName = props.slideName;
  const length = props.length;
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
  const data = props.data;
  const dataArr = Object.entries(data);
  const setPalette: any = useSetRecoilState(paletteAtom);

  return (
    <SliderWrap>
      {slideName === 'palette' ? (
        <PaletteWrap>
          <Slider {...settings}>
            {data.map((datum, idx) => {
              const handleClick = () => {
                setPalette(datum.keyword);
              };
              return (
                <Link href="/product" key={idx} passHref>
                  <Palette
                    src={datum.image.src}
                    key={idx}
                    alt={datum.keyword}
                    onClick={handleClick}
                  />
                </Link>
              );
            })}
          </Slider>
        </PaletteWrap>
      ) : (
        <RecommWrap>
          <Slider {...settings}>
            {dataArr.map((datum, idx) => {
              return <Recommendation datum={datum} idx={idx} key={idx} />;
            })}
          </Slider>
        </RecommWrap>
      )}
    </SliderWrap>
  );
}

export default Slide;

const SliderWrap = styled.div`
  .slick-dots.palette {
    bottom: -17rem;

    ${media[1440]} {
      bottom: -15rem;
    }

    ${media[1100]} {
      bottom: -10rem;
    }

    ${media[768]} {
      bottom: -5rem;
    }

    ${media.mobile} {
      bottom: -4.8rem;
    }
  }

  .slick-dots.recommendation {
    bottom: -11rem;

    ${media[1440]} {
      bottom: -10rem;
    }

    ${media[1100]} {
      bottom: -9rem;
    }

    ${media[768]} {
      bottom: -8rem;
    }

    ${media.mobile} {
      bottom: -7rem;
    }
  }

  .slick-dots {
    li {
      margin-right: 0.75rem;
      margin-left: 0.75rem;
      width: 1.5rem;
      height: 1.5rem;

      ${media.mobile} {
        margin-right: 0.35rem;
        margin-left: 0.35rem;
        width: 0.8rem;
        height: 0.8rem;
      }
    }

    button::before {
      border: 0.08rem solid;
      border-radius: 50%;
      border-color: ${({ theme }) => theme.colors.black};
      width: 1.5rem;
      height: 1.5rem;
      color: ${({ theme }) => theme.colors.white};

      ${media.mobile} {
        position: relative;
        border: 0.05rem solid;
        border-color: ${({ theme }) => theme.colors.black};
        width: 0.8rem;
        height: 0.8rem;
      }
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

      ${media.mobile} {
        width: 1.278rem;
        height: 2.8rem;
      }
    }
  }

  .slick-arrow::before {
    display: none;
  }

  #palette.slick-arrow.slick-prev {
    left: -18.3rem;

    ${media[1440]} {
      left: -10rem;
    }

    ${media[768]} {
      left: -6rem;
    }

    ${media.mobile} {
      left: -4.498rem;
    }
  }

  #palette.slick-arrow.slick-next {
    right: -18.3rem;

    ${media[1440]} {
      right: -10rem;
    }

    ${media[768]} {
      right: -6rem;
    }

    ${media.mobile} {
      right: -4.498rem;
    }
  }

  #recommendation.slick-arrow.slick-prev {
    top: 45%;
    left: -0.8rem;

    ${media[1440]} {
      left: -5rem;
    }

    ${media[1100]} {
      left: -3rem;
    }
    ${media[768]} {
      left: -2.5rem;
    }

    ${media.mobile} {
      left: -4.498rem;
    }
  }

  #recommendation.slick-arrow.slick-next {
    top: 45%;
    right: -0.8rem;

    ${media[1440]} {
      right: -5rem;
    }

    ${media[1100]} {
      right: -3rem;
    }

    ${media[768]} {
      right: -2.5rem;
    }

    ${media.mobile} {
      right: -4.498rem;
    }
  }
`;

const PaletteWrap = styled.div`
  padding-bottom: 35.7rem;
  width: 106.2rem;

  ${media[1440]} {
    padding-bottom: 28rem;
    width: 75rem;
  }

  ${media[1100]} {
    padding-bottom: 25rem;
    width: 50rem;
  }

  ${media[768]} {
    padding-bottom: 21rem;
    width: 45rem;
  }

  ${media.mobile} {
    padding-bottom: 14.26rem;
    width: 24rem;
  }
`;

const RecommWrap = styled.div`
  padding-top: 9.8rem;
  padding-bottom: 18.9rem;
  width: 141rem;

  ${media[1440]} {
    padding-top: 7rem;
    padding-bottom: 15rem;
    width: 100rem;
  }

  ${media[1100]} {
    padding-top: 5rem;
    padding-bottom: 13rem;
    width: 80rem;
  }

  ${media[768]} {
    padding-top: 5rem;
    padding-bottom: 13rem;
    width: 60rem;
  }

  ${media.mobile} {
    padding-top: 3.15rem;
    padding-bottom: 10rem;
    width: 23.965rem;
  }

  #hidden {
    visibility: hidden;

    ${media.mobile} {
      display: none;
    }
  }

  #contour {
    ${media.mobile} {
      display: none;
    }
  }
`;

const Palette = styled.img`
  padding-left: 2.65rem;
  height: 27.7rem;

  ${media[1440]} {
    padding-left: 1rem;
    height: 23rem;
  }

  ${media[1100]} {
    padding-left: 0.5em;
    height: 15rem;
  }

  ${media[768]} {
    padding-left: 1.25rem;
    height: 13rem;
  }

  ${media.mobile} {
    padding-left: 0.5rem;
    height: 14.3rem;
  }
`;
