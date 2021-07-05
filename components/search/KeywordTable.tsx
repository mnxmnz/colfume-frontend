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
  margin-left: 7rem;
  font-family: 'Junge';
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 4.7rem;
  margin-bottom: 3rem;
`;

const Wrap = styled.div`
  height: 22.5rem;
  width: 48rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default KeywordTable;
