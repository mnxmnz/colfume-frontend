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
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 0.16rem solid #d4d4d4;
  border-bottom: 0.16rem solid #d4d4d4;
`;

const KeywordWrap = styled.div`
  display: flex;
`;

const Line = styled.div`
  height: 23.5rem;
  width: 0.16rem;
  background-color: #d4d4d4;
  margin: 6.6rem 2.7rem 0 2.7rem;
`;

export default SelectKeyword;
