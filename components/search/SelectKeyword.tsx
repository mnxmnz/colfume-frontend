import React from 'react';
import styled from 'styled-components';
import KeywordTable from './KeywordTable';

function SelectKeyword() {
  const moodList = [
    '네에글자',
    '네에글자',
    '세글자',
    '두자',
    '세글자',
    '세글자',
    '세글자',
    '세글자',
    '두자',
    '세글자',
    '세글자',
    '세글자',
    '세글자',
  ];

  const styleList = [
    '세글자',
    '세글자',
    '세글자',
    '세글자',
    '세글자',
    '세글자',
    '세글자',
    '세글자',
    '세글자',
    '세글자',
    '세글자',
    '세글자',
    '세글자',
  ];

  return (
    <>
      <SelectKeywordWrap>
        <KeywordTable title="Mood" list={moodList} />
        <KeywordTable title="Style" list={styleList} />
      </SelectKeywordWrap>
    </>
  );
}

const SelectKeywordWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

export default SelectKeyword;
