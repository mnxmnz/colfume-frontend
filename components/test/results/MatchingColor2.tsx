import React from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';

function MatchingColor2({ data }) {
  const background = {
    background: `${data.palette_matchBg[1]}`,
  };
  return (
    <>
      <ColorWrap style={background}>
        <div>{data.palette_matchColor[1]}</div>
      </ColorWrap>
    </>
  );
}

const ColorWrap = styled.button`
  margin-top: 1.6rem;
  margin-left: 1rem;
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  height: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  font-weight: 500;

  ${media.mobile} {
    float: left;
    margin-top: 1rem;
    font-size: 1.4rem;
  }
`;

export default MatchingColor2;
