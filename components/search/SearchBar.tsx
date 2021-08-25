import React, { useState } from 'react';
import { media } from '@styles/theme';
import { SearchArrowOff, SearchArrowOn, SearchIcon } from '../../assets';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { keywordAtom } from '../../states/search';

function SearchBar() {
  const searchButton: any = React.useRef();

  const [keyword, getKeyword] = useState('');
  const handleChange = event => {
    getKeyword(event.target.value);
  };

  const setKeyword: any = useSetRecoilState(keywordAtom);

  const handleClick = event => {
    setKeyword(['/', keyword]);
    getKeyword('');
  };

  const handleSubmit = event => {
    if (event.key === 'Enter') {
      handleClick(event);
    }
  };

  return (
    <SearchBarWrap>
      <SearchBarBox>
        <SearchIconImg>
          <IconImg src={SearchIcon.src} alt="" />
        </SearchIconImg>
        <SearchInput
          type="text"
          placeholder="제품명, 키워드로 검색해보세요"
          value={keyword}
          onChange={handleChange}
          onKeyPress={handleSubmit}
        />
      </SearchBarBox>
      <SearchArrowIcon>
        <img
          onClick={handleClick}
          src={SearchArrowOff.src}
          alt="search"
          onMouseEnter={() => (searchButton.current.src = SearchArrowOn.src)}
          onMouseLeave={() => (searchButton.current.src = SearchArrowOff.src)}
          ref={searchButton}
        />
      </SearchArrowIcon>
    </SearchBarWrap>
  );
}

const SearchBarWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 16.6rem;
  margin-bottom: 6rem;

  ${media.custom(480)} {
    margin: 2.3rem 0 3rem 0;
  }
`;

const SearchBarBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.black};
  padding-bottom: 1.9rem;

  ${media[768]} {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
    padding-bottom: 0.8rem;
    width: 100%;
    max-width: 54rem;
  }

  ${media.custom(480)} {
    padding-top: 0.5rem;
    padding-bottom: 0.3rem;
  }
`;
const SearchIconImg = styled.div`
  width: 7rem;
  ${media.custom(480)} {
    width: 3.7rem;
  }
`;

const IconImg = styled.img`
  ${media.custom(480)} {
    width: 2rem;
  }
`;

const SearchInput = styled.input`
  width: 60.2rem;
  font-size: 2.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray3};
  }

  ${media[768]} {
    width: 80%;
    font-size: 2.1rem;
  }

  ${media.custom(480)} {
    width: 100%;
    font-size: 1.6rem;
  }
`;

const SearchArrowIcon = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0;

  ${media[768]} {
    img {
      width: 6rem;
    }
  }

  ${media.custom(480)} {
    img {
      width: 4.7rem;
      height: 3.2rem;
    }
  }
`;
export default SearchBar;
