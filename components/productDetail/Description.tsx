import React from 'react';
import styled from 'styled-components';

function Description() {
  const desc =
    '이 향수는 오렌지처럼 발랄한 향을 가지고 있습니다. 처음에는 000000향, 시간이 조금 지나면\n000000향, 마지막으로 000000향을 느낄 수 있어요. 마치 스웨덴 튤립 축제에 놀러가 자전거를\n타고 돌아다닐 때 날 것 같은 느낌이랍니다. (설명 4줄)';

  return (
    <DescriptionWrap>
      <div>Description</div>
      <TableWrap>
        <LevelWrap>
          <div className="level">
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
          </div>
        </LevelWrap>
        <div className="desc">
          <p>
            이 향수는 <span id="color">오렌지</span>처럼 <span id="bold">발랄한 향</span>을 가지고
            있습니다.
          </p>
          <p>처음에는 000000향, 시간이 조금 지나면 000000향, 마지막으로 000000향을</p>
          <p>느낄 수 있어요. 마치 스웨덴 튤립 축제에 놀러가 자전거를 타고 돌아다닐</p>
          <p>때 날 것 같은 느낌이랍니다. (설명 4줄)</p>
        </div>
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

  div {
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

  .desc {
    padding-top: 2.8rem;
    font-family: NotoSans;
    font-size: 2.2rem;
    line-height: 3.96rem;
    letter-spacing: 0.06rem;

    #color {
      font-weight: 700;
      color: #faaa6b;
    }

    #bold {
      font-weight: 700;
    }
  }
`;

const LevelWrap = styled.div`
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  border-bottom: 0.16rem solid;
  border-color: ${({ theme }) => theme.colors.gray3};
  display: flex;
  justify-content: space-between;

  .level {
    font-size: 1.8rem;
    display: flex;

    &__categ {
      line-height: 3.24rem;
      margin-right: 2rem;
    }

    &__value {
      font-family: NotoSans;
      line-height: 2.88rem;
      width: 13rem;
    }
  }
`;
