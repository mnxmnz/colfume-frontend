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
function MatchingColor2(props: PropsType) {
  const data = props.data;
  const matchedColor = data?.palette_matchColor[1];
  let fontColor: string, borderStyle: string;

  if (matchedColor === 'White') {
    borderStyle = '0.1rem solid #3E3E3E';
    fontColor = '#3E3E3E';
  } else {
    borderStyle = '0';
    fontColor = '#FFFFFF';
  }

  const background = {
    background: `${data?.palette_matchBg[1]}`,
    color: fontColor,
    border: borderStyle,
  };

  return (
    <>
      <ColorWrap style={background}>{matchedColor}</ColorWrap>
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
