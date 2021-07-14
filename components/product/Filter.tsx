import React from 'react';
import styled from 'styled-components';
import FilterTokens from '../../public/FilterTokens';
import { media } from '@styles/theme';

function Filter() {
  const iconTokens = FilterTokens;

  return (
    <FilterWrap>
      <Title>Which Color You Want</Title>
      <IconWrap>
        {iconTokens.map((token, idx) => {
          return <FilterIcon src={token.image.src} key={idx} alt={token.keyword} />;
        })}
      </IconWrap>
    </FilterWrap>
  );
}

export default Filter;

const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7.2rem;
`;

const Title = styled.div`
  margin-top: 27.2rem;
  margin-bottom: 8.1rem;
  color: ${({ theme }) => theme.colors.black};
  font-family: Junge;
  font-size: 4rem;

  ${media.mobile} {
    margin-top: 7.4rem;
    margin-bottom: 2rem;
    line-height: 2.88rem;
    font-size: 1.6rem;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: flex-end;
  width: 85.1rem;

  ${media.mobile} {
    flex-wrap: wrap;
    width: 22rem;
  }
`;

const FilterIcon = styled.img`
  border-bottom: solid 0.2rem ${({ theme }) => theme.colors.gray3};
  width: 10.6rem;
  height: 12rem;

  ${media.mobile} {
    margin-top: 0.5rem;
    width: 5.5rem;
    height: 5.4rem;
  }
`;
