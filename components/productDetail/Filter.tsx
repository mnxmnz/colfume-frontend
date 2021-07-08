import React from 'react';
import styled from 'styled-components';
import SampleData from './SampleData';

interface Img {
  height: number;
  src: string;
  width: number;
}

function Filter() {
  const imgData: Img[] = SampleData.images;
  const filtersData: string[][] = SampleData.filters;

  return (
    <FilterWrap>
      <Color>
        <span>Color</span>
        <div>
          {imgData.map(img => {
            return <img src={img.src} alt="" />;
          })}
        </div>
      </Color>
      <MoodStyle>
        {filtersData.map((filter, idx) => {
          return (
            <div className="container">
              {filter.map((f, idx) => {
                if (!idx) return <div className="categ">{f}</div>;
                else
                  return (
                    <div className="filter" key={idx}>
                      {f}
                    </div>
                  );
              })}
            </div>
          );
        })}
      </MoodStyle>
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

const MoodStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.2rem;
  padding-bottom: 5.1rem;
  padding-left: 6.8rem;

  .container {
    margin-top: 3rem;
    display: flex;
    align-items: center;

    .categ {
      font-family: Junge;
      font-size: 2rem;
      width: 5.7rem;
      margin-right: 6.2rem;
    }

    .filter {
      width: 9.3rem;
      height: 3.9rem;
      font-family: NotoSans;
      font-size: 1.8rem;
      line-height: 3.24rem;
      text-align: center;
      padding-top: 0.3rem;
      background-color: ${({ theme }) => theme.colors.gray2};
      margin-right: 2.6rem;
    }
  }
`;
