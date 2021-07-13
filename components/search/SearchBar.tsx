import React from 'react';
import { media } from '@styles/theme';
import { SearchArrowOff, SearchArrowOn, SearchIcon } from '../../assets';
import styled from 'styled-components';

function SearchBar() {
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

  .searchIcon {
    margin-right: 4.2rem;
  }

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
    right: -0.6rem;
    bottom: -0.6rem;
  }

  ${media[768]} {
    margin: 8rem 0;

    .searchIcon {
      position: relative;
      margin-right: 3.5rem;
    }

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

    .searchIcon {
      position: relative;
      bottom: -0.1rem;
      margin-right: 0.9rem;
      width: 2rem;
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

export default SearchBar;
