import React from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';
import Image from 'next/image';

function Filter({ moods, styles, colors }) {
  return (
    <FilterWrap>
      <ColorWrap>
        <span>Color</span>
        <Color>
          {colors.color1 !== null && (
            <ColorIcon src={colors.color1.color_img} alt={colors.color1.color_name} />
          )}
          {colors.color2 !== null && (
            <ColorIcon src={colors.color2.color_img} alt={colors.color2.color_name} />
          )}
          {colors.color3 !== null && (
            <ColorIcon src={colors.color3.color_img} alt={colors.color3.color_name} />
          )}
        </Color>
      </ColorWrap>
      <MoodStyleWrap>
        <MoodStyle>
          <KeywordWrap>
            <Categ>Mood</Categ>
            <KeywordBox>
              <Keyword>{moods.mood1.mood_name}</Keyword>
              <Keyword>{moods.mood2.mood_name}</Keyword>
              {moods.mood3 !== null && <Keyword>{moods.mood3.mood_name}</Keyword>}
            </KeywordBox>
          </KeywordWrap>
        </MoodStyle>
        <MoodStyle>
          <KeywordWrap>
            <Categ>Style</Categ>
            <Keyword>{styles.style1.style_name}</Keyword>
          </KeywordWrap>
        </MoodStyle>
      </MoodStyleWrap>
    </FilterWrap>
  );
}

export default Filter;

const FilterWrap = styled.div`
  display: flex;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.black};
  font-family: Junge;

  ${media.mobile} {
    flex-direction: column;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
  }
`;

const ColorWrap = styled.div`
  display: flex;
  align-items: center;
  border-right: 0.2rem solid ${({ theme }) => theme.colors.black};
  padding-top: 5.2rem;
  padding-right: 6.8rem;
  padding-bottom: 11.7rem;
  width: 32.8rem;

  span {
    margin-right: 6.2rem;
    width: 4rem;
    line-height: 3.6rem;
    font-family: Junge;
    font-size: 2rem;

    ${media.mobile} {
      margin: 0;
      margin-right: 6.5rem;
      line-height: 1.945rem;
      font-size: 1.6rem;
    }
  }

  ${media.mobile} {
    border-right: 0rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
    padding-top: 4.5rem;
    padding-right: 10.6rem;
    padding-bottom: 4.6rem;
    width: 33.6rem;
  }
`;

const Categ = styled.div`
  margin-right: 6.2rem;
  margin-left: 6.2rem;
  width: 4rem;
  line-height: 3.6rem;
  font-family: Junge;
  font-size: 2rem;

  ${media.mobile} {
    margin: 0;
    margin-right: 2rem;
    line-height: 1.945rem;
    font-size: 1.6rem;
  }
`;

const KeywordBox = styled.div`
  display: flex;
  align-items: center;
  width: 55rem;

  ${media.mobile} {
    width: 30rem;
  }
`;

const Color = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 14.6rem;

  ${media.mobile} {
    width: 12.4rem;
  }
`;

const ColorIcon = styled.img`
  margin-right: 1.9rem;
  width: 3.6rem;
  height: 3.9rem;

  ${media.mobile} {
    margin-right: 2rem;
    width: 2.8rem;
    height: 3.033rem;
  }
`;

const MoodStyleWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.2rem;
  padding-bottom: 5.1rem;

  ${media.mobile} {
    padding-top: 0.7rem;
    padding-bottom: 3.95rem;
  }
`;

const MoodStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  ${media.mobile} {
    margin-top: 3.7rem;
    width: 33.431rem;
  }
`;

const KeywordWrap = styled.div`
  display: flex;
  width: 50rem;

  ${media.mobile} {
    width: 33rem;
  }
`;

const Keyword = styled.div`
  margin-right: 2.6rem;
  background-color: ${({ theme }) => theme.colors.gray2};
  padding-top: 0.3rem;
  width: 10rem;
  height: 3.9rem;
  text-align: center;
  line-height: 3.24rem;
  font-size: 1.8rem;

  ${media.mobile} {
    margin-right: 1.892rem;
    padding-top: 0rem;
    width: 8rem;
    height: 2.649rem;
    line-height: 2.52rem;
    font-size: 1.4rem;
  }
`;
