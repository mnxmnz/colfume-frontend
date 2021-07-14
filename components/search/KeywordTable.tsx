import React from 'react';
import Keyword from './Keyword';
import { media } from '@styles/theme';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { keywordAtom } from '../../states/search';

function KeywordTable({ title, list }) {
  const text = useRecoilValue(keywordAtom);
  console.log('keyword', text);

  return (
    <Wrap>
      <Title>{title}</Title>
      {list.map(list => (
        <Keyword list={list} />
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.4rem;
  width: 100%;
  max-width: 113.6rem;

  ${media[1440]} {
    max-width: 84rem;
  }

  ${media[768]} {
    max-width: 54rem;
  }

  ${media.mobile} {
    max-width: 33rem;
  }
`;

const Title = styled.div`
  margin-bottom: 1rem;
  line-height: 3.96rem;
  font-family: 'Junge';
  font-size: 2.2rem;

  ${media.mobile} {
    line-height: 2.88rem;
    font-size: 1.6rem;
  }
`;

export default KeywordTable;
