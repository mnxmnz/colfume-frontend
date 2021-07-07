import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import ThemeTable from './ThemeTable';

function Mood() {
  const moodList = ['봄바람', '꽃', '달콤한', '봄바람', '꽃', '편안한'];
  const styleList = ['캐쥬얼', '무슨 룩', '달콤한', '봄바람', '꽃', '편안한'];

  return (
    <MoodWrap>
      <Content
        title="Mood and Style"
        content="원하는 무드 또는 스타일을 선택하여 향수를 찾아보세요"
        paddingTitle="12.4rem"
        paddingContent="0rem"
        paddingBottom="0rem"
      />
      <ThemeWrap>
        <ThemeTable title="Mood" list={moodList} />
        <Space />
        <ThemeTable title="Style" list={styleList} />
      </ThemeWrap>
    </MoodWrap>
  );
}

const MoodWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.gray1};
  height: 77.7rem;
`;

const ThemeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`;

const Space = styled.div`
  width: 25.7rem;
`;

export default Mood;
