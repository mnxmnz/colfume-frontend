import React from 'react';
import Keyword from './Keyword';
import styled from 'styled-components';

function KeywordTable({ title, list }) {
  return (
    <Table>
      <Title>{title}</Title>
      <Wrap>
        {list.map(list => (
          <Keyword list={list} />
        ))}
      </Wrap>
    </Table>
  );
}

const Table = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3rem;
  margin-left: 7rem;
  line-height: 4.7rem;
  font-family: 'Junge';
  font-size: 2.6rem;
  font-weight: 400;
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 48rem;
  height: 22.5rem;
`;

export default KeywordTable;
