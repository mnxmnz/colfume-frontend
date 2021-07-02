import React from 'react';
import styled from 'styled-components';

function Content({ title, content, paddingTitle, paddingContent }) {
  const styleTitle = {
    paddingTop: `${paddingTitle}`,
  };

  const styleContent = {
    paddingTop: `${paddingContent}`,
  };

  return (
    <>
      <TitleWrap style={styleTitle}>{title}</TitleWrap>
      <ContentWrap style={styleContent}>{content}</ContentWrap>
    </>
  );
}

const TitleWrap = styled.div`
  font-family: Junge;
  font-size: 4.2rem;
  font-weight: 400;
  line-height: 7.6rem;
  text-align: center;
`;

const ContentWrap = styled.div`
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 4rem;
  text-align: center;
`;

export default Content;
