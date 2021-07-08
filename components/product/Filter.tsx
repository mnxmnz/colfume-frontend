import React from 'react';
import styled from 'styled-components';
import FilterTokens from '../../public/FilterTokens';

function Filter() {
  const iconTokens = FilterTokens;

  return (
    <FilterWrap>
      <div className="title">Which Color You Want</div>
      <div className="icon-wrap">
        {iconTokens.map((token, idx) => {
          const iconStyle = {
            marginRight: token.marginRight,
          };
          return (
            <img
              src={token.image.src}
              key={idx}
              alt={token.keyword}
              width={token.width}
              style={iconStyle}
            />
          );
        })}
      </div>
    </FilterWrap>
  );
}

export default Filter;

const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7.2rem;

  .title {
    margin-top: 20rem;
    color: ${({ theme }) => theme.colors.black};
    font-family: Junge;
    font-size: 4rem;
  }

  .icon-wrap {
    display: flex;
    align-items: center;
    margin-top: 6.5rem;
    border-bottom: solid 0.2rem;
    border-color: ${({ theme }) => theme.colors.gray3};
    width: 85.1rem;
    height: 13.6rem;
  }
`;
