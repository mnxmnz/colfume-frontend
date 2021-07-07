import React from 'react';
import { SearchArrowOff, SearchArrowOn, SearchIcon } from '../../assets';
import styled from 'styled-components';

const SearchBar = () => {
  const searchButton = React.useRef();

  return (
    <SearchBarWrap>
      <SearchBarBox>
        <img className="searchIcon" src={SearchIcon.src} alt="" />
        <input type="text" placeholder="제품명, 키워드로 검색해보세요" />
        <button type="submit">
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
};

const SearchBarWrap = styled.div`
  align-items: center;margin값display
  justify-content: center;justify-contentjustify-contentjustify-contentjustify-content
  margin-top: 7.2rem;margin-topmargin-topmargin-top // 헤더 높이만큼의 margin값
  display: flex;margin값displaymargin값displaymargin값displaymargin값display
`;

const SearchBarBox = styled.div`
  display: flex;
  align-items: center;
  margin: 16.7rem 58rem 14.2rem;
  border-bottom: 0.2rem solid #3e3e3e;

  .searchIcon {
    margin-right: 4.2rem;
  }

  input {
    position: relative;
    bottom: 0.1rem;
    outline-style: none;
    border: none;
    width: 61.5rem;
    font-size: 2.6rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray3};
    }
  }

  button {
    position: relative;
    right: -0.6rem;
    bottom: -0.6rem;
  }
`;

export default SearchBar;
