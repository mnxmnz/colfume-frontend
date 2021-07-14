import React from 'react';
import { media } from '@styles/theme';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { keywordAtom } from '../../states/search';

function KeywordTable({ title, list }) {
  const text = useRecoilValue(keywordAtom);
  console.log('keyword', text);

  return (
    <>
      <Title>{title}</Title>
      {list.map(list => (
        <Keyword list={list} />
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 113rem;
  ${media[1440]} {
    max-width: 84rem;
  }

  ${media[768]} {
    max-width: 54rem;
  }

  ${media.mobile} {
    max-width: 33rem;
  }

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

const Title = styled.div`
  margin-bottom: 1rem;
  max-width: 113rem;
  line-height: 3.96rem;
  font-family: 'Junge';
  font-size: 2.2rem;

  ${media.mobile} {
    line-height: 2.88rem;
    font-size: 1.6rem;
  }
`;

export default KeywordTable;
