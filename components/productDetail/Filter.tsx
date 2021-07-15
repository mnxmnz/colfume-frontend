import React from 'react';
import styled from 'styled-components';
import { media } from '@styles/theme';

function Filter(props) {
  const imgData = props.colData;

  const mood = [props.moods];
  const style = [props.styles];
  // console.log(mood[0]);
  // console.log(style[0]);

  return (
    <FilterWrap>
      <ColorWrap>
        <Categ>Color</Categ>
        <Color>
          {imgData.map((img, idx) => {
            return <img key={idx} src={img.src} alt="" />;
          })}
        </Color>
      </ColorWrap>
      <MoodStyleWrap>
        <MoodStyle>
          {mood && (
            <KeywordWrap>
              <Categ>Mood</Categ>
              <Keyword>{mood[0].mood1}</Keyword>
              <Keyword>{mood[0].mood2}</Keyword>
              <Keyword>{mood[0].mood3}</Keyword>
            </KeywordWrap>
          )}
        </MoodStyle>
        <MoodStyle>
          {style && (
            <KeywordWrap>
              <Categ>Style</Categ>
              <Keyword>{style[0].style1}</Keyword>
            </KeywordWrap>
          )}
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
  justify-content: space-between;
  border-right: 0.2rem solid ${({ theme }) => theme.colors.black};
  padding-top: 5.2rem;
  padding-right: 6.8rem;
  padding-bottom: 11.7rem;
  width: 32.8rem;

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
  line-height: 3.6rem;
  font-family: Junge;
  font-size: 2rem;

  ${media.mobile} {
    line-height: 1.945rem;
    font-size: 1.6rem;
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

  img {
    margin-right: 1.9rem;
    width: 3.6rem;
    height: 3.9rem;

    ${media.mobile} {
      margin-right: 2rem;
      width: 2.8rem;
      height: 3.033rem;
    }
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
  justify-content: space-between;
  margin-top: 3rem;
  width: 47.5rem;

  ${media.mobile} {
    margin-top: 3.7rem;
    width: 33.431rem;
  }
`;

const KeywordWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 35.7rem;

  ${media.mobile} {
    margin-right: 8rem;
    width: 24.623rem;
  }
`;

const Keyword = styled.div`
  margin-right: 2.6rem;
  background-color: ${({ theme }) => theme.colors.gray2};
  padding-top: 0.3rem;
  width: 9.3rem;
  height: 3.9rem;
  text-align: center;
  line-height: 3.24rem;
  font-size: 1.8rem;

  ${media.mobile} {
    margin-right: 1.892rem;
    padding-top: 0rem;
    width: 6.316rem;
    height: 2.649rem;
    line-height: 2.52rem;
    font-size: 1.4rem;
  }
`;
