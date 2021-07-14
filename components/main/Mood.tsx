import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import ThemeTable from './ThemeTable';
import { media } from '@styles/theme';
import { GetFilterList } from '../../lib/api/main/getFilter';

function Mood(props) {
  const rawData = GetFilterList();
  const moodList = [];
  const styleList = [];

  rawData.moods.map(rawMood => moodList.push(rawMood.mood_name));
  rawData.styles.map(rawStyle => styleList.push(rawStyle.style_name));

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
