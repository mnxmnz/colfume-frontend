import React from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';
import { useSetRecoilState } from 'recoil';
import { keywordAtom } from '../../states/search';
import Link from 'next/link';

interface PropsType {
  title: string;
  list: string[];
}

function ThemeTable(props: PropsType) {
  const setText: any = useSetRecoilState(keywordAtom);
  const title = props.title;
  const list = props.list;

  return (
    <Table>
      <Title>{title}</Title>
      <Wrap>
        {list.slice(0, 3).map((word, idx) => {
          const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
            setText([title, word]);
          };
          return (
            <Link key={idx} href="/search" passHref>
              <Content onClick={handleClick}>{word}</Content>
            </Link>
          );
        })}
      </Wrap>
      <Wrap>
        {list.slice(3).map((word, idx) => {
          const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
            setText([title, word]);
          };
          return (
            <Link key={idx} href="/search" passHref>
              <Content onClick={handleClick}>{word}</Content>
            </Link>
          );
        })}
      </Wrap>
    </Table>
  );
}

const Table = styled.div`
  margin-bottom: 17.2rem;
  width: 50.2rem;
  text-align: center;

  ${media[1100]} {
    width: 45rem;
  }
  ${media.mobile} {
    margin-bottom: 6.1rem;
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
    line-height: 2.52rem;
    font-size: 1.4rem;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -1px;
  line-height: 3.6rem;
  font-size: 2rem;
  font-weight: 400;

  ${media.mobile} {
    line-height: 2.52rem;
    font-size: 1.4rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  cursor: pointer;
  width: 13.1rem;
  height: 7.5rem;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.borderGray};
  }

  ${media.mobile} {
    margin-bottom: 1rem;
    width: 6.7rem;
    height: 3.8rem;
  }
`;

export default ThemeTable;
