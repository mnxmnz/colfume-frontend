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
        <SearchIconImg src={SearchIcon.src} alt="" />
        <input
          type="text"
          placeholder="제품명, 키워드로 검색해보세요"
          value={keyword}
          onChange={handleChange}
          onKeyPress={handleSubmit}
        />
        <button type="submit" onClick={handleClick}>
          <img
            className="searchButton"
            src={SearchArrowOff.src}
            alt="search"
            onMouseEnter={() => (searchButton.current.src = SearchArrowOn.src)}
            onMouseLeave={() => (searchButton.current.src = SearchArrowOff.src)}
            ref={searchButton}
          />
        </button>
      </SearchBarBox>
    </SearchBarWrap>
  );
}

const SearchBarWrap = styled.div`
  display: flex;
  position: relative;
  right: 19rem;
  align-items: center;
  justify-content: center;
  ${media[1440]} {
    right: 4.2rem;
  }

  ${media[768]} {
    right: 0rem;
  }
`;

const SearchBarBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16.6rem;
  margin-bottom: 6rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.black};

  input {
    position: relative;
    bottom: 0.1rem;
    outline-style: none;
    border: none;
    width: 60.2rem;
    font-size: 2.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray3};
    }
  }

  button {
    position: relative;
    right: -0.8rem;
    bottom: -0.7rem;
  }

  ${media[768]} {
    margin: 8rem 0;

    input {
      width: 40rem;
    }
  }

  ${media.mobile} {
    margin: 2.3rem 0 3em 0;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};

    input {
      bottom: -0.2rem;
      width: 24rem;
      font-size: 1.6rem;
    }

    button {
      bottom: -0.6rem;

      img {
        width: 4.7rem;
        height: 3.2rem;
      }
    }
  }
`;

const SearchIconImg = styled.img`
  margin-right: 4.2rem;

  ${media[768]} {
    position: relative;
    margin-right: 3.5rem;
  }

  ${media.mobile} {
    position: relative;
    bottom: -0.1rem;
    margin-right: 0.9rem;
    width: 2rem;
  }
`;

export default SearchBar;
