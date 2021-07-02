import React from 'react';
import Content from './Content';
import Banner from './Banner';
import Mood from './Mood';

function MainWrap() {
  return (
    <>
      <Banner />
      <Content
        title="About Colfume"
        content="8가지의 색과 함께 쉽고 재미있게 향을 알아보세요"
        paddingTitle="12.5rem"
        paddingContent="6.3rem"
      />
      <Content
        title="Colfume Palette"
        content="8가지의 색과 함께 쉽고 재미있게 향을 알아보세요"
        paddingTitle="25rem"
        paddingContent="0rem"
      />
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
