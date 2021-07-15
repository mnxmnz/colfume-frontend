import React from 'react';
import styled from 'styled-components';
import KeywordTable from './KeywordTable';
import { GetFilterList } from 'lib/api/search/getFilter';

function SelectKeyword() {
  const rawData = GetFilterList();
  // console.log('search keyword list', rawData);
  // const moodList = [];
  // const styleList = [];

  // if (rawData.message) {
  //   rawData.moods.map(rawMood => moodList.push(rawMood.mood_name));
  //   rawData.styles.map(rawStyle => styleList.push(rawStyle.style_name));
  // }
  const moodList = [
    '짙은',
    '달콤한',
    '시원한',
    '편안한',
    '섹시한',
    '화사한',
    '성숙한',
    '상큼한',
    '차분한',
    '은은한',
    '자연적인',
    '중성적인',
    '고급스러운',
  ];

  const styleList = [
    '댄디룩',
    '모던룩',
    '캐주얼룩',
    '오피스룩',
    '페미닌룩',
    '데이트룩',
    '하이틴룩',
    '스포티룩',
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
