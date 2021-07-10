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
  border-bottom: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.black};
  font-family: Junge;
`;

const ColorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-right: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.black};
  padding-top: 5.2rem;
  padding-right: 6.8rem;
  padding-bottom: 11.7rem;
  width: 32.8rem;
`;

const Categ = styled.div`
  line-height: 3.6rem;
  font-family: Junge;
  font-size: 2rem;
`;

const Color = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-right: 4.9rem;
  width: 14.6rem;

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  width: 47.5rem;
`;

const KeywordWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 35.7rem;
`;

const Keyword = styled.div`
  margin-right: 2.6rem;
  background-color: ${({ theme }) => theme.colors.gray2};
  padding-top: 0.3rem;
  width: 9.3rem;
  height: 3.9rem;
  text-align: center;
  line-height: 3.24rem;
  font-family: NotoSans;
  font-size: 1.8rem;
`;
