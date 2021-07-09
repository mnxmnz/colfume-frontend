import React from 'react';
import styled from 'styled-components';

function Filter(props) {
  const imgData = props.colData;
  const filterData = [props.moodData, props.styleData];

  return (
    <FilterWrap>
      <ColorWrap>
        <Categ>Color</Categ>
        <Color>
          {imgData.map((img, idx) => {
            return <img key={idx} src={img.src} alt="" />;
          })}
        </Color>
      </ColorWrap>
      <MoodStyleWrap>
        {filterData.map((data, idx) => {
          const categ = !idx ? 'Mood' : 'Style';
          return (
            <MoodStyle>
              <Categ>{categ}</Categ>
              <KeywordWrap>
                {data.map((datum, idx) => {
                  return <Keyword key={idx}>{datum}</Keyword>;
                })}
              </KeywordWrap>
            </MoodStyle>
          );
        })}
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

const ColorWrap = styled.div`
  border-right: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.black};
  padding-top: 5.2rem;
  padding-bottom: 11.7rem;
  padding-right: 6.8rem;
  width: 32.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Categ = styled.div`
  font-family: Junge;
  font-size: 2rem;
  line-height: 3.6rem;
`;

const Color = styled.div`
  width: 14.6rem;
  padding-right: 4.9rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    margin-right: 1.9rem;
    width: 3.6rem;
    height: 3.9rem;
  }
`;

const MoodStyleWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.2rem;
  padding-bottom: 5.1rem;
  padding-left: 6.8rem;
`;

const MoodStyle = styled.div`
  margin-top: 3rem;
  width: 47.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const KeywordWrap = styled.div`
  width: 35.7rem;
  display: flex;
  justify-content: flex-start;
`;

const Keyword = styled.div`
  width: 9.3rem;
  height: 3.9rem;
  font-family: NotoSans;
  font-size: 1.8rem;
  line-height: 3.24rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gray2};
  margin-right: 2.6rem;
  padding-top: 0.3rem;
`;
