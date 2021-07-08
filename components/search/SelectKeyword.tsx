import React from 'react';
import styled from 'styled-components';
import KeywordTable from './KeywordTable';

function SelectKeyword() {
  const moodList = [
    '달콤한',
    '달콤한',
    '달콤한',
    '달콤한',
    '달콤한',
    '달콤한',
    '달콤한',
    '달콤한',
    '달콤한',
    '달콤한',
  ];

  const styleList = [
    '새콤한',
    '새콤한',
    '새콤한',
    '새콤한',
    '새콤한',
    '새콤한',
    '새콤한',
    '새콤한',
    '새콤한',
    '새콤한',
  ];

  return (
    <SelectKeywordWrap>
      <KeywordWrap>
        <KeywordTable title="Mood" list={moodList} />
        <Line />
        <KeywordTable title="Style" list={styleList} />
      </KeywordWrap>
    </SelectKeywordWrap>
  );
}

const SelectKeywordWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 0.16rem solid #d4d4d4;
  border-bottom: 0.16rem solid #d4d4d4;
  height: 40rem;
`;

const KeywordWrap = styled.div`
  display: flex;
`;

const Line = styled.div`
  margin: 6.6rem 2.7rem 0 2.7rem;
  background-color: ${({ theme }) => theme.colors.gray3};
  width: 0.16rem;
  height: 23.5rem;
`;

export default SelectKeyword;
