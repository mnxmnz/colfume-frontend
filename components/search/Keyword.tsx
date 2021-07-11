import React from 'react';
import { media } from '@styles/theme';
import styled from 'styled-components';

function Keyword({ list }) {
  return (
    <Wrap>
      {list.map(list => (
        <button>{list}</button>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  button {
    margin-right: 1.7rem;
    margin-bottom: 1.8rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.gray3};
    padding: 0 3rem;
    line-height: 3.9rem;
    font-size: 2rem;

    &:hover {
      background: ${({ theme }) => theme.colors.gray3};
      color: ${({ theme }) => theme.colors.white};
    }

    ${media[768]} {
      margin-right: 1.5rem;
      margin-bottom: 1.3rem;
      padding: 0 2rem;
      line-height: 3.2rem;
      font-size: 1.6rem;
    }

    ${media.mobile} {
      margin-right: 1.3rem;
      margin-bottom: 1rem;
      padding: 0 1rem;
      line-height: 2.52rem;
      font-size: 1.4rem;
    }
  }
`;

export default Keyword;
