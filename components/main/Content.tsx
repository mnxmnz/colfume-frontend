import React from 'react';
import { constSelector } from 'recoil';
import styled from 'styled-components';

function Content({ title, content, paddingTitle, paddingContent, paddingBottom }) {
  const styleTitle = {
    paddingTop: `${paddingTitle}`,
  };

  const styleContent = {
    paddingTop: `${paddingContent}`,
    paddingBottom: `${paddingBottom}`,
  };

  return (
    <>
      <TitleWrap style={styleTitle}>{title}</TitleWrap>
      <ContentWrap style={styleContent}>
        <div>{content}</div>
      </ContentWrap>
    </>
  );
}

const TitleWrap = styled.div`
  text-align: center;
  line-height: 7.6rem;
  font-family: Junge;
  font-size: 4.2rem;
  font-weight: 400;
`;

const ContentWrap = styled.div`
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 4rem;
  font-size: 2.2rem;
  font-weight: 400;
`;

export default Content;
