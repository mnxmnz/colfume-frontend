import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import ThemeTable from './ThemeTable';
import { media } from '@styles/theme';

function Mood(props) {
  const moodList = ['봄바람', '꽃', '달콤한', '봄바람', '꽃', '편안한'];
  const styleList = ['캐쥬얼', '무슨 룩', '달콤한', '봄바람', '꽃', '편안한'];

  return (
    <MoodWrap>
      <Content
        title={props.title}
        content={props.content}
        paddingTitle={props.paddingTitle}
        paddingContent={props.paddingContent}
        paddingBottom={props.paddingBottom}
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

  ${media.mobile} {
    height: 54.9rem;
  }
`;

const ThemeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;

  ${media.mobile} {
    flex-direction: column;
    margin-top: 0rem;
  }
`;

const Space = styled.div`
  width: 25.7rem;

  ${media.mobile} {
    height: 6.1rem;
  }
`;

export default Mood;
