import React from 'react';
import Content from './Content';
import Banner from './Banner';
import Mood from './Mood';
import { Slide } from '../';
import Footer from '../common/Footer';
import styled from 'styled-components';

function MainWrap() {
  return (
    <>
      <Banner />
      <Content
        title="About Colfume"
        content="8가지의 색과 함께 쉽고 재미있게 향을 알아보세요"
        paddingTitle="12.5rem"
        paddingContent="6.3rem"
        paddingBottom="12.7rem"
      />
      <ContentWrap>
        <Content
          title="Colfume Palette"
          content="8가지의 색과 함께 쉽고 재미있게 향을 알아보세요"
          paddingTitle="12.5rem"
          paddingContent="0rem"
          paddingBottom="12.5rem"
        />
        <Slide
          slideName="palette"
          length={4}
          paddingBottom="35.7rem"
          paddingTop="0rem"
          width="106.2rem"
        />
      </ContentWrap>
      <Mood />
      <ContentWrap>
        <Content
          title="Recommendation"
          content="당신의 상황에 어울리는 향수를 찾아보세요"
          paddingTitle="12.1rem"
          paddingContent="0rem"
          paddingBottom="16rem"
        />
        <div>
          <div id="comment">
            다음 주 <strong>면접</strong> 전에, 이런 향수는 어떤가요?
          </div>
          <div className="slide-container">
            <Slide
              slideName="recommendation"
              length={3}
              paddingBottom="18.9rem"
              paddingTop="9.8rem"
              width="141rem"
            />
          </div>
        </div>
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

  #comment {
    margin-bottom: 1.98rem;
    font-size: 2rem;
    strong {
      font-weight: bold;
    }
  }

  .slide-container {
    display: flex;
    justify-content: center;
    margin-bottom: 19.7rem;
    border-top: solid;
    border-bottom: solid;
    width: 142.6rem;
  }
`;
