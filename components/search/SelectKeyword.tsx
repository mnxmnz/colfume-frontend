import React from 'react';
import styled from 'styled-components';
import KeywordTable from './KeywordTable';

function SelectKeyword() {
  const moodList = [
    '달콤0',
    '달콤1',
    '달콤2',
    '달콤3',
    '달콤4',
    '달콤5',
    '달콤6',
    '달콤7',
    '달콤8',
    '달콤9',
  ];

  const styleList = [
    '새콤0',
    '새콤1',
    '새콤2',
    '새콤3',
    '새콤4',
    '새콤5',
    '새콤6',
    '새콤7',
    '새콤8',
    '새콤9',
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
  background-color: ${({ theme }) => theme.colors.gray3};
  margin: 6.6rem 2.7rem 0 2.7rem;
`;

export default SelectKeyword;
