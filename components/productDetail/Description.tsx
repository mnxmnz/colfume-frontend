import React from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';

function Description(props) {
  const levels = props.levels;
  const description = props.description;

  return (
    <DescriptionWrap>
      <span>Description</span>
      <TableWrap>
        <TableHeader>
          <LevelWrap>
            <Level>Top</Level>
            <LevelDesc>{levels[0]}</LevelDesc>
          </LevelWrap>
          <LevelWrap>
            <Level>Middle</Level>
            <LevelDesc>{levels[1]}</LevelDesc>
          </LevelWrap>
          <LevelWrap>
            <Level>Base</Level>
            <LevelDesc>{levels[2]}</LevelDesc>
          </LevelWrap>
        </TableHeader>
        <DescWrap>
          {description.split('\n').map((line, idx) => (
            <Desc key={idx}>
              {line.includes('//')
                ? line.split('//').map((l, i) => (i % 2 === 1 ? <span id="bold">{l}</span> : l))
                : line}
              <br />
            </Desc>
          ))}
        </DescWrap>
      </TableWrap>
    </DescriptionWrap>
  );
}

export default Description;

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.black};
  padding-top: 5.2rem;
  padding-bottom: 5.1rem;

  ${media.mobile} {
    border-bottom: 0;
    padding-top: 3.9rem;
    padding-bottom: 8.8.rem;
  }
  span {
    line-height: 3.6rem;
    font-family: Junge;
    font-size: 2rem;

    ${media.mobile} {
      line-height: 1.945rem;
      font-family: 1.6rem;
    }
  }
`;

const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;
  margin-left: 14.7rem;
  width: 73.1rem;

  ${media.mobile} {
    margin-top: 2.4rem;
    margin-left: 0;
    width: 33.6rem;
  }
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.16rem solid;
  border-color: ${({ theme }) => theme.colors.gray3};
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;

  ${media.mobile} {
    flex-direction: column;
    border: 0;
    padding-top: 1.5rem;
    padding-bottom: 0rem;
    padding-left: 4.4rem;
  }
`;

const LevelWrap = styled.div`
  display: flex;
  font-family: Junge;
  font-size: 1.8rem;

  ${media.mobile} {
    align-items: center;
    width: 18.2rem;
    font-size: 1.6rem;
  }
`;

const Level = styled.div`
  margin-right: 2rem;
  line-height: 3.24rem;

  ${media.mobile} {
    margin-right: 2.8rem;
    width: 5.3rem;
    line-height: 1.945rem;
  }
`;

const LevelDesc = styled.div`
  line-height: 2.88rem;
  font-family: NotoSans;

  ${media.mobile} {
    line-height: 2.072rem;
    font-size: 1.4rem;
  }
`;

const DescWrap = styled.div`
  padding-top: 2.8rem;
  line-height: 3.96rem;
  letter-spacing: 0.06rem;
  font-family: NotoSans;
  font-size: 2.2rem;

  ${media.mobile} {
    padding-top: 3.8rem;
    line-height: 2.7rem;
    letter-spacing: 0.045rem;
    font-size: 1.5rem;
  }
`;

const Desc = styled.div`
  #bold {
    font-weight: 700;

    ${media.mobile} {
      line-height: 2.7rem;
      letter-spacing: 0.045rem;
      font-size: 1.5rem;
    }
  }
`;
