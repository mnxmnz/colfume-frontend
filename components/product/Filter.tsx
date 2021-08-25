import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { paletteAtom } from '../../states/product';
import FilterTokens from '../../public/FilterTokens';
import { media } from '@styles/theme';

function Filter() {
  const [palette, setPalette] = useRecoilState(paletteAtom);
  const iconTokens = FilterTokens;
  const [selectedIdx, setSelected] = useState(palette);

  return (
    <FilterWrap>
      <Title>Which Color You Want</Title>
      <IconWrap>
        {iconTokens.map((token, idx) => {
          const paletteColor = token.keyword;
          const handleClick: React.MouseEventHandler<HTMLImageElement> = () => {
            if (palette === '') {
              setPalette(paletteColor);
              setSelected(paletteColor);
            } else {
              setPalette('');
              setSelected('');
            }
          };
          return (
            <FilterIcon key={idx}>
              <IconImg
                onClick={handleClick}
                src={token.image.src}
                key={idx}
                alt={paletteColor}
                myId={paletteColor}
                selectedIdx={selectedIdx}
              />
            </FilterIcon>
          );
        })}
      </IconWrap>
    </FilterWrap>
  );
}

export default Filter;

const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7.2rem;

  ${media.mobile} {
    margin-top: 3.1rem;
    margin-bottom: 3.1rem;
  }
`;

const Title = styled.div`
  margin-top: 21.2rem;
  margin-bottom: 8.1rem;
  color: ${({ theme }) => theme.colors.black};
  font-family: Junge;
  font-size: 4rem;
  ${media.custom(900)} {
    margin-top: 17.4rem;
    margin-bottom: 4rem;
    font-size: 3.5rem;
  }

  ${media.mobile} {
    margin-top: 7.4rem;
    margin-bottom: 2rem;
    line-height: 2.88rem;
    font-size: 1.6rem;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: flex-end;
  width: 85.1rem;

  ${media.custom(900)} {
    flex-wrap: wrap;
    justify-content: center;
    width: 40rem;
  }

  ${media.mobile} {
    flex-wrap: wrap;
    width: 22rem;
  }
`;

const FilterIcon = styled.button`
  cursor: pointer;
  width: 10.6rem;
  height: 12rem;

  ${media.custom(900)} {
    margin-top: 0.5rem;
    width: 8.5rem;
    height: 8.4rem;
  }

  ${media.mobile} {
    margin-top: 0.5rem;
    width: 5.5rem;
    height: 5.4rem;
  }
`;

const IconImg = styled.img<{ selectedIdx: string; myId: string }>`
  border-bottom: solid 0.2rem ${props => (props.selectedIdx === props.myId ? '#3e3e3e' : '#D4D4D4')};
  width: 10.6rem;
  height: 12rem;

  ${media.custom(900)} {
    width: 8.5rem;
    height: 8.4rem;
  }

  ${media.mobile} {
    margin-top: 0.5rem;
    width: 5.5rem;
    height: 5.4rem;
  }
`;
