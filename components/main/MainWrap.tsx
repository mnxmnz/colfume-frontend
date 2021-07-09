import React, { useState, useEffect } from 'react';
import Content from './Content';
import Banner from './Banner';
import Mood from './Mood';
import { Slide } from '../';
import Footer from '../common/Footer';
import styled from 'styled-components';
import { media } from '@styles/theme';

function MainWrap() {
  const [windowSize, setWindowSize] = useState(0);
  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowSize <= 576 ? true : false;

  return (
    <>
      <Banner />
      <Content
        title="About Colfume"
        content="8가지의 색과 함께 쉽고 재미있게 향을 알아보세요"
        paddingTitle={isMobile ? '6.2rem' : '12.5rem'}
        paddingContent={isMobile ? '1.6rem' : '6.3rem'}
        paddingBottom={isMobile ? '5.8rem' : '12.7rem'}
      />
      <ContentWrap>
        <Content
          title="Colfume Palette"
          content="8가지의 색과 함께 쉽고 재미있게 향을 알아보세요"
          paddingTitle={isMobile ? '3.2rem' : '12.5rem'}
          paddingContent={isMobile ? '0.6rem' : '0rem'}
          paddingBottom={isMobile ? '4.5rem' : '12.5rem'}
        />
        <Slide
          slideName="palette"
          length={isMobile ? 2 : 4}
          paddingBottom={isMobile ? '8.6rem' : '35.7rem'}
          paddingTop="0rem"
          width={isMobile ? '24rem' : '106.2rem'}
          height={isMobile ? '143rem' : '277rem'}
        />
      </ContentWrap>
      <Mood
        title="Mood and Style"
        content="원하는 무드 또는 스타일을 선택하여 향수를 찾아보세요"
        paddingTitle={isMobile ? '3.3rem' : '12.4rem'}
        paddingContent={isMobile ? '0.6rem' : '0rem'}
        paddingBottom={isMobile ? '5rem' : '0rem'}
      />
      <ContentWrap>
        <Content
          title="Recommendation"
          content="당신의 상황에 어울리는 향수를 찾아보세요"
          paddingTitle={isMobile ? '6.6rem' : '12.1rem'}
          paddingContent={isMobile ? '0.6rem' : '0rem'}
          paddingBottom={isMobile ? '5.9rem' : '16rem'}
        />
        <SlideWrap>
          <Comment>
            다음 주 <strong>면접,</strong> 이런 향수는 어떤가요?
          </Comment>
          <SlideContainer>
            <Slide
              slideName="recommendation"
              length={isMobile ? 2 : 3}
              paddingBottom={isMobile ? '10rem' : '18.9rem'}
              paddingTop={isMobile ? '3.15rem' : '9.8rem'}
              width={isMobile ? '23.965rem' : '141rem'}
              height={isMobile ? '143rem' : '450rem'}
            />
          </SlideContainer>
        </SlideWrap>
      </ContentWrap>
      <Footer />
    </>
  );
}

export default MainWrap;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SlideWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.mobile} {
    align-items: center;
  }
`;

const Comment = styled.div`
  margin-bottom: 1.98rem;
  font-size: 2rem;
  line-height: 3.6rem;

  ${media.mobile} {
    font-size: 1.4rem;
    line-height: 2.31rem;
    margin-bottom: 3.05rem;
  }
  strong {
    font-weight: bold;
  }
`;
const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 19.7rem;
  border-top: solid ${({ theme }) => theme.colors.black};
  border-bottom: solid ${({ theme }) => theme.colors.black};
  width: 142.6rem;

  ${media.mobile} {
    margin-bottom: 22.4rem;
    width: 33.7rem;
  }
`;
