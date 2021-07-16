import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';
import { testResultAtom } from '../../../states/test';
import { useRecoilValue } from 'recoil';

interface PropsType {
  color: string;
  background: string;
}

function MatchingColor1() {
  const data = useRecoilValue(testResultAtom);
  const background = {
    background: `${data.palette_matchBg[0]}`,
  };
  return (
    <>
      <ColorWrap style={background}>
        <div>{data.palette_matchColor[0]}</div>
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
    margin-top: 2rem;
    font-size: 1.4rem;
  }
`;

const Text = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  font-weight: 500;

  ${media.mobile} {
    font-size: 1.4rem;
  }
`;

export default MatchingColor1;
