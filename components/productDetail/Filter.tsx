import React from 'react';
import styled from 'styled-components';

interface ImgType {
  height: number;
  src: string;
  width: number;
}

interface PropsType {
  colData: ImgType[];
  moodData: string[];
  styleData: string[];
}

function Filter(props: PropsType) {
  const imgData = props.colData;
  const moodData = props.moodData;
  const styleData = props.styleData;

  return (
    <FilterWrap>
      <Color>
        <span>Color</span>
        <div>
          {imgData.map((img, idx) => {
            return <img key={idx} src={img.src} alt="" />;
          })}
        </div>
      </Color>
      <MoodStyleWrap>
        <Mood>
          <Categ>Mood</Categ>
          {moodData.map((mood, idx) => {
            return <KeyWord key={idx}>{mood}</KeyWord>;
          })}
        </Mood>
        <Style>
          <Categ>Style</Categ>
          {styleData.map((style, idx) => {
            return <KeyWord key={idx}>{style}</KeyWord>;
          })}
        </Style>
      </MoodStyleWrap>
    </FilterWrap>
  );
}

export default Filter;

const FilterWrap = styled.div`
  display: flex;
  font-family: Junge;
  border-bottom: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.black};
`;

const Color = styled.div`
  display: flex;
  border-right: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.black};
  padding-top: 5.2rem;
  padding-bottom: 11.7rem;
  display: flex;
  align-items: center;

  span {
    font-size: 2rem;
    line-height: 3.6rem;
    padding-right: 6.2rem;
  }

  div {
    padding-right: 4.9rem;

    img {
      margin-right: 1.9rem;
      width: 3.6rem;
      height: 3.9rem;
    }
  }
`;

const MoodStyleWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.2rem;
  padding-bottom: 5.1rem;
  padding-left: 6.8rem;
`;

const Mood = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
`;

const Style = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
`;

const Categ = styled.div`
  font-family: Junge;
  font-size: 2rem;
  width: 5.7rem;
  margin-right: 6.2rem;
`;

const KeyWord = styled.div`
  width: 9.3rem;
  height: 3.9rem;
  font-family: NotoSans;
  font-size: 1.8rem;
  line-height: 3.24rem;
  text-align: center;
  padding-top: 0.3rem;
  background-color: ${({ theme }) => theme.colors.gray2};
  margin-right: 2.6rem;
`;
