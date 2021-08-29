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
  let bgColor: string, fontColor: string, borderStyle: string;

  if (matchedColor === 'White') {
    bgColor = '#FFFFFF';
    borderStyle = '0.1rem solid #3E3E3E';
    fontColor = '#3E3E3E';
  } else {
    bgColor = data.palette_matchBg[0];
    borderStyle = '0';
    fontColor = '#FFFFFF';
  }

  const background = {
    background: `${bgColor}`,
    color: fontColor,
    border: borderStyle,
  };

  return (
    <>
      <ColorWrap style={background}>
        <div>{data?.palette_matchColor[0]}</div>
      </ColorWrap>
    </>
  );
}

const ColorWrap = styled.button`
  margin-top: 1.6rem;
  margin-left: 7rem;
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
