import React from 'react';
import styled from 'styled-components';
import FilterTokens from '../../public/FilterTokens';

function Filter() {
  const iconTokens = FilterTokens;

  return (
    <FilterWrap>
      <div className="title">Which Color You Want</div>
      <div className="icon-field">
        {iconTokens.map((icon, idx) => {
          return <img src={icon.image.src} key={idx} alt="" />;
        })}
      </div>
    </FilterWrap>
  );
}

export default Filter;

const FilterWrap = styled.div`
  margin-top: 7.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-top: 20rem;
    font-family: Junge;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.black};
  }

  .icon-field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6.5rem;
    width: 84.9rem;
    height: 13.6rem;
    border-bottom: solid 0.2rem;
    border-color: ${({ theme }) => theme.colors.gray3};
  }
`;
