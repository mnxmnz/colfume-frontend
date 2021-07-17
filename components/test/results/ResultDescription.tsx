import React from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';

function ResultDescription(props) {
  const description = props.description;
  return (
    <DescriptionWrap>
      {description?.split('\n').map((line, idx) => (
        <Description>
          <span>·</span>
          <DescWrap>
            {line.includes('//') ? (
              line.split('//').map((l, i) => (
                <Desc>
                  {l}
                  <br />
                </Desc>
              ))
            ) : (
              <Desc>{line}</Desc>
            )}
          </DescWrap>
        </Description>
      ))}
    </DescriptionWrap>
  );
}

export default ResultDescription;

const DescriptionWrap = styled.div`
  display: flex;
  float: left;
  flex-direction: column;
  margin-top: 11.4rem;
  margin-bottom: 2rem;
  line-height: 3.6rem;
  font-family: NotoSans;
  font-size: 2rem;

  span {
    margin-right: 1rem;
    line-height: 3.6rem;
    font-size: 2.4rem;
  }

  ${media.mobile} {
    margin-top: 44.4rem;
    margin-bottom: 19.6rem;
    line-height: 3rem;
    font-size: 1.5rem;

    span {
      line-height: 3rem;
    }
  }
`;

const Description = styled.div`
  display: flex;
  align-items: flex-start;

  ${media.mobile} {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 80rem;

  ${media.mobile} {
    width: 100%;
  }
`;

const Desc = styled.div`
  ${media.mobile} {
    width: 33.5rem;
  }
`;
