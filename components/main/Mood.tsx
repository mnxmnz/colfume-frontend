import React from 'react';
import styled from 'styled-components';
import Content from './Content';

function Mood() {
  return (
    <MoodWrap>
      <Content
        title="Mood and Style"
        content="원하는 무드 또는 스타일을 선택하여 향수를 찾아보세요"
        paddingTitle="12.5rem"
        paddingContent="0rem"
      />
      <ThemeWrap></ThemeWrap>
    </MoodWrap>
  );
}

const MoodWrap = styled.div`
  height: 77.7rem;
  margin-top: 17.265rem;
  background-color: ${({ theme }) => theme.colors.gray};
`;

const ThemeWrap = styled.div`
  width: 126.1rem;
`;

export default Mood;
