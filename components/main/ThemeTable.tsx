import React from 'react';
import styled from 'styled-components';

function ThemeTable({ title, list }) {
  return (
    <Table>
      <Title>{title}</Title>
      <Wrap>
        <Content>{list[0]}</Content>
        <Content>{list[1]}</Content>
        <Content>{list[2]}</Content>
      </Wrap>
      <Wrap>
        <Content>{list[3]}</Content>
        <Content>{list[4]}</Content>
        <Content>{list[5]}</Content>
      </Wrap>
    </Table>
  );
}

const Table = styled.div`
  width: 50.2rem;
  text-align: center;
`;

const Title = styled.div`
  font-family: Junge;
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 4.7rem;
  text-align: center;
  margin-bottom: 2.457rem;
`;

const Wrap = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.6rem;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 13.1rem;
  height: 7.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

export default ThemeTable;
