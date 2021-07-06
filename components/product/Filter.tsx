import React from 'react';
import styled from 'styled-components';

function Filter() {
  return (
    <FilterWrap>
      <div className="title">Which Color You Want</div>
      <div className="icon-field"></div>
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
  }

  .icon-field {
    display: flex;
    align-items: center;
    margin-top: 6.5rem;
    width: 84.4rem;
    height: 13.6rem;
  }
`;
