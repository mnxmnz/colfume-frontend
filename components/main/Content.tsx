import React from 'react';
import { constSelector } from 'recoil';
import styled from 'styled-components';
import { media } from '@styles/theme';

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
        <div>
          {props.content.split('//').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </div>
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

  ${media.mobile} {
    line-height: 3.24rem;
    font-size: 1.8rem;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 4rem;
  font-size: 2.2rem;
  font-weight: 300;

  ${media.mobile} {
    line-height: 2.16rem;
    font-size: 1.2rem;
  }
`;

export default Content;
