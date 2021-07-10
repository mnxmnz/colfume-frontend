import React from 'react';
import { SearchArrowOff, SearchArrowOn, SearchIcon } from '../../assets';
import styled from 'styled-components';

const SearchBar = () => {
  const searchButton: any = React.useRef();

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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7.2rem;
`;

const SearchBarBox = styled.div`
  display: flex;
  align-items: center;
  margin: 16.7rem 58rem 14.2rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray3};

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

  @media screen and (max-width: 768px) {
    margin: 8rem 0;
    .searchIcon {
      position: relative;
      margin-right: 3.5rem;
    }
    input {
      width: 40rem;
    }
  }

  @media screen and (max-width: 576px) {
    margin: 5.3rem 0 3em 0;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};

    input {
      bottom: -0.2rem;
      width: 24.5rem;
      font-size: 1.6rem;
    }

    .searchIcon {
      position: relative;
      bottom: -0.1rem;
      margin-right: 0.9rem;
      width: 2rem;
    }
    button {
      bottom: -0.5rem;
      img {
        width: 4.7rem;
        height: 3.2rem;
      }
    }
  }
`;

export default SearchBar;
