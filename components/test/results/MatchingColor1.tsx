import React from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';

interface PropsType {
  data: dataType;
}
interface dataType {
  color: string;
  background: string;
  palette_matchBg?: string[];
  palette_matchColor?: string[];
}

function MatchingColor1(props: PropsType) {
  const data = props.data;
  const matchedColor = data?.palette_matchColor[0];
  let fontColor: string, borderStyle: string;

  if (matchedColor === 'White') {
    borderStyle = '0.1rem solid #3E3E3E';
    fontColor = '#3E3E3E';
  } else {
    borderStyle = '0';
    fontColor = '#FFFFFF';
  }

  const background = {
    background: `${data?.palette_matchBg[0]}`,
    color: fontColor,
    border: borderStyle,
  };

  return (
    <>
      <ColorWrap style={background}>
        {/* div가 없어도 되지 않을까? 예지에게 물어보기! */}
        {/* MatchingColor2도 같은 방식으로 해도 될지 물어보기! */}
        {matchedColor}
      </ColorWrap>
    </>
  );
}

const ColorWrap = styled.button`
  margin-top: 1.6rem;
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  height: 3rem;
  text-align: center;
  /* color: ${({ theme }) => theme.colors.white}; */
  font-size: 1.8rem;
  font-weight: 500;

  ${media.mobile} {
    float: left;
    margin-top: 1rem;
    margin-left: 1.5rem;
    font-size: 1.4rem;
  }
`;

export default MatchingColor1;
