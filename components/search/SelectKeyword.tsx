import React from 'react';
import styled from 'styled-components';
import KeywordTable from './KeywordTable';
import { GetFilterList } from 'lib/api/search/getFilter';

function SelectKeyword() {
  const rawData = GetFilterList();
  console.log('search keyword list', rawData);
  const moodList = [];
  const styleList = [];

  if (rawData.message) {
    rawData.moods.map(rawMood => moodList.push(rawMood.mood_name));
    rawData.styles.map(rawStyle => styleList.push(rawStyle.style_name));
  }

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
