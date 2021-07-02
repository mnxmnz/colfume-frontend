import React from 'react';
import styled from 'styled-components';

interface Props {
  datum: object;
}

function SlideContent(props: Props) {
  const datum = props.datum;

  return (
    <ContentWrap className={datum.keyword}>
      <img src={datum.image.src} alt="" />
    </ContentWrap>
  );
}

export default SlideContent;

const ContentWrap = styled.div`
  width: 21.3rem;
  margin: 0;

  img {
    width: 21.3rem;
    height: 27.7rem;
  }
`;
