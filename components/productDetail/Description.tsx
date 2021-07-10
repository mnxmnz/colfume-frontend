import React from 'react';
import styled from 'styled-components';

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

  span {
    line-height: 3.6rem;
    font-family: Junge;
    font-size: 2rem;
  }
`;

const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;
  margin-left: 14.7rem;
  width: 73.1rem;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.16rem solid;
  border-color: ${({ theme }) => theme.colors.gray3};
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
`;

const LevelWrap = styled.div`
  display: flex;
  font-family: Junge;
  font-size: 1.8rem;
`;

const Level = styled.div`
  margin-right: 2rem;
  line-height: 3.24rem;
`;

const LevelDesc = styled.div`
  width: 13rem;
  line-height: 2.88rem;
  font-family: NotoSans;
`;

const DescWrap = styled.div`
  padding-top: 2.8rem;
  line-height: 3.96rem;
  letter-spacing: 0.06rem;
  font-family: NotoSans;
  font-size: 2.2rem;
`;

const Desc = styled.div`
  #bold {
    font-weight: 700;
  }
`;
