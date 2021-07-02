import React from 'react';
import styled from 'styled-components';
import { Slide } from '../';
import PaletteData from '../../public/PaletteData';

function Content({ title, content, paddingTitle, paddingContent }) {
  const styleTitle = {
    paddingTop: `${paddingTitle}`,
  };

  const styleContent = {
    paddingTop: `${paddingContent}`,
  };

  const dataList: object[] = PaletteData;

  return (
    <>
      <TitleWrap style={styleTitle}>{title}</TitleWrap>
      <ContentWrap style={styleContent}>
        {content}
        <Slide dataList={dataList} length={4} />
      </ContentWrap>
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
  margin-left: 10rem;
`;

export default Content;
