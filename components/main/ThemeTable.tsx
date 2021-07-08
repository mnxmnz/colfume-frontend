import React from 'react';
import styled from 'styled-components';

interface PropsType {
  title: string;
  list: string[];
}

function ThemeTable(props: PropsType) {
  const title = props.title;
  const list = props.list;

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
  margin-bottom: 2.457rem;
  text-align: center;
  line-height: 4.7rem;
  font-family: Junge;
  font-size: 2.6rem;
  font-weight: 400;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 3.6rem;
  font-size: 2rem;
  font-weight: 400;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  width: 13.1rem;
  height: 7.4rem;
`;

export default ThemeTable;
