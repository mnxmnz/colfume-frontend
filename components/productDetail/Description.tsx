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
          {description.map((desc, idx) => {
            return <Desc key={idx}>{desc}</Desc>;
          })}
        </DescWrap>
      </TableWrap>
    </DescriptionWrap>
  );
}

export default Description;

const DescriptionWrap = styled.div`
  padding-top: 5.2rem;
  padding-bottom: 5.1rem;
  border-bottom: 0.2rem solid;
  border-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-family: Junge;
    font-size: 2rem;
    line-height: 3.6rem;
  }
`;

const TableWrap = styled.div`
  margin-top: 1.4rem;
  margin-left: 14.7rem;
  width: 73.1rem;
  display: flex;
  flex-direction: column;
`;

const TableHeader = styled.div`
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  border-bottom: 0.16rem solid;
  border-color: ${({ theme }) => theme.colors.gray3};
  display: flex;
  justify-content: space-between;
`;

const LevelWrap = styled.div`
  font-family: Junge;
  font-size: 1.8rem;
  display: flex;
`;

const Level = styled.div`
  line-height: 3.24rem;
  margin-right: 2rem;
`;

const LevelDesc = styled.div`
  font-family: NotoSans;
  line-height: 2.88rem;
  width: 13rem;
`;

const DescWrap = styled.div`
  padding-top: 2.8rem;
  font-family: NotoSans;
  font-size: 2.2rem;
  line-height: 3.96rem;
  letter-spacing: 0.06rem;
`;

const Desc = styled.div`
  #color {
    font-weight: 700;
    color: #faaa6b;
  }

  #bold {
    font-weight: 700;
  }
`;

{
  /* <div className="level">
            <div className="level__categ">Top</div>
            <div className="level__value">000000</div>
          </div>
          <div className="level">
            <div className="level__categ">Middle</div>
            <div className="level__value">000000</div>
          </div>
          <div className="level">
            <div className="level__categ">Base</div>
            <div className="level__value">000000</div>
          </div> */
}
