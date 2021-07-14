import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import ThemeTable from './ThemeTable';
import { media } from '@styles/theme';

function Mood(props) {
  const moodList = ['달콤한', '시원한', '편안한', '섹시한', '화사한', '고급스러운'];
  const styleList = ['댄디룩', '모던룩', '캐주얼룩', '오피스룩', '페미닌룩', '데이트룩'];

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
