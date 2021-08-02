import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import ThemeTable from './ThemeTable';
import { media } from '@styles/theme';
import { GetFilterList } from 'lib/api/main/getFilter';
import { IContentProps, IMoodData, IRawMoodData } from 'types/main';

function Mood(props: IContentProps) {
  const rawData: IMoodData = GetFilterList();
  const moodList: string[] = [];
  const styleList: string[] = [];

  if (rawData.message) {
    rawData.moods.map((rawMood: IRawMoodData) => moodList.push(rawMood.mood_name));
    rawData.styles.map(rawStyle => styleList.push(rawStyle.style_name));
  }

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
        <ThemeTable title="Style" list={styleList} />
      </ThemeWrap>
    </MoodWrap>
  );
}

const MoodWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray1};
`;

const ThemeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 126.1rem;

  ${media[1100]} {
    width: 100rem;
  }

  ${media[768]} {
    flex-direction: column;
    margin-top: 0rem;
    width: 29.3rem;
  }
`;

export default Mood;
