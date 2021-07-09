import React from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';

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

  ${media.mobile} {
    width: 29.3rem;
  }
`;

const Title = styled.div`
  margin-bottom: 2.457rem;
  text-align: center;
  line-height: 4.7rem;
  font-family: Junge;
  font-size: 2.6rem;
  font-weight: 400;

  ${media.mobile} {
    margin-bottom: 1.525rem;
    font-size: 1.4rem;
    line-height: 2.52rem;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 3.6rem;
  font-size: 2rem;
  font-weight: 400;

  ${media.mobile} {
    font-size: 1.4rem;
    line-height: 2.52rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  width: 13.1rem;
  height: 7.5rem;

  ${media.mobile} {
    width: 6.7rem;
    height: 3.8rem;
    margin-bottom: 1rem;
  }
`;

export default ThemeTable;
