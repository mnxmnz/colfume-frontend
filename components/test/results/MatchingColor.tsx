import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';

interface PropsType {
  color: string;
  background: string;
}

function MatchingColor(props: PropsType) {
  const background = {
    background: `${props.background}`,
  };
  return (
    <>
      <ColorWrap style={background}>
        <div>{props.color}</div>
      </ColorWrap>
    </>
  );
}

const ColorWrap = styled.button`
  margin-top: 0.6rem;
  margin-left: 1rem;
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  height: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  font-weight: 500;

  ${media.mobile} {
    margin-top: 1rem;
    height: 2.3rem;
    font-size: 1.4rem;
  }
`;

export default MatchingColor;
