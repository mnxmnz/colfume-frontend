import React from 'react';
import { constSelector } from 'recoil';
import styled from 'styled-components';

interface PropsType {
  title: string;
  content: string;
  paddingTitle: string;
  paddingContent: string;
  paddingBottom: string;
}

function Content(props: PropsType) {
  const styleTitle = {
    paddingTop: `${props.paddingTitle}`,
  };

  const styleContent = {
    paddingTop: `${props.paddingContent}`,
    paddingBottom: `${props.paddingBottom}`,
  };

  return (
    <>
      <TitleWrap style={styleTitle}>{props.title}</TitleWrap>
      <ContentWrap style={styleContent}>
        <div>{props.content}</div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-align: center;
  line-height: 4rem;
  line-height: 4rem;
  font-size: 2.2rem;
  font-size: 2.2rem;
  font-weight: 300;
  font-weight: 400;
`;

export default Content;
