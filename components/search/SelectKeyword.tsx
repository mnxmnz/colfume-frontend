import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';
import { GetFilterList } from 'lib/api/search/getFilter';
import { useRecoilState } from 'recoil';
import { keywordAtom } from '../../states/search';

function SelectKeyword() {
  const rawData = GetFilterList();
  const moodList: string[] = [];
  const styleList: string[] = [];
  const [text, setText] = useRecoilState(keywordAtom);
  const [selectedIdx, setSelected] = useState(text[1]);

  if (rawData.message) {
    rawData.moods.map(rawMood => moodList.push(rawMood.mood_name));
    rawData.styles.map(rawStyle => styleList.push(rawStyle.style_name));
  }
  const dataArray: any = [
    ['Mood', moodList],
    ['Style', styleList],
  ];

  return (
    <>
      <SelectKeywordWrap>
        {dataArray.map((array, idx) => {
          const title: string = array[0];
          const list: string[] = array[1];
          return (
            <Wrap>
              <Title>{title}</Title>
              {list.map((word, idx) => {
                const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
                  setText([title, word]);
                  setSelected(word);

                  if (word === selectedIdx) {
                    setText([]);
                    setSelected(null);
                  }
                };

                const isSearched = text && text.length > 0 && text.includes('/') ? true : false;
                return (
                  <KeywordBtn
                    onClick={handleClick}
                    key={idx}
                    value={word}
                    myId={word}
                    selectedIdx={selectedIdx}
                    isSearched={isSearched}
                  >
                    {word}
                  </KeywordBtn>
                );
              })}
            </Wrap>
          );
        })}
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
const Wrap = styled.div`
  max-width: 113rem;
  ${media[1440]} {
    max-width: 84rem;
  }
  ${media[768]} {
    max-width: 54rem;
  }
  ${media.mobile} {
    max-width: auto;
  }
`;
const Title = styled.div`
  margin-bottom: 1rem;
  max-width: 113rem;
  line-height: 3.96rem;
  font-family: 'Junge';
  font-size: 2.2rem;
  ${media.mobile} {
    line-height: 2.88rem;
    font-size: 1.6rem;
  }
`;
const KeywordBtn = styled.button<{ selectedIdx: string; myId: string; isSearched: boolean }>`
  margin-right: 1.7rem;
  margin-bottom: 1.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray3};
  background: ${props =>
    props.isSearched ? '#FFFFFF' : props.selectedIdx === props.myId ? '#3e3e3e' : '#FFFFFF'};
  cursor: pointer;
  padding: 0 3rem;
  line-height: 3.9rem;
  color: ${props =>
    props.isSearched ? '#3e3e3e' : props.selectedIdx === props.myId ? '#FFFFFF' : '#3e3e3e'};
  font-size: 2rem;
  &:hover {
    background: ${({ theme }) => theme.colors.gray3};
    color: ${({ theme }) => theme.colors.white};
  }
  ${media[768]} {
    margin-right: 1.5rem;
    margin-bottom: 1.3rem;
    padding: 0 2rem;
    line-height: 3.2rem;
    font-size: 1.6rem;
  }
  ${media.mobile} {
    margin-right: 1.3rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    line-height: 2.52rem;
    font-size: 1.4rem;
    &:hover {
      background: ${props =>
        props.isSearched ? '#FFFFFF' : props.selectedIdx === props.myId ? '#3e3e3e' : '#FFFFFF'};
      color: ${props =>
        props.isSearched ? '#3e3e3e' : props.selectedIdx === props.myId ? '#FFFFFF' : '#3e3e3e'};
    }
  }
`;

export default SelectKeyword;
