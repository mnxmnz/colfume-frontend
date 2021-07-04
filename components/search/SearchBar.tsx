import React from 'react';
import { SearchArrowOff, SearchArrowOn, SearchIcon, SearchCheckboxOn, SearchCheckboxHover, SearchCheckboxOff } from '../../assets'; 
import styled from 'styled-components';

const SearchBarWrap = styled.div`
margin-top: 7.2rem; // 헤더 높이만큼의 margin값
display: flex;
justify-content: center;
align-items: center;
`;

const SearchBarBox = styled.div`
margin: 16.7rem 58rem 14.2rem;
display: flex;
align-items: center;
border-bottom: 0.2rem solid #3E3E3E;
.searchIcon{
    margin-right: 4.2rem;
}
input {
    outline-style: none;
width: 61.5rem;
border: none;
font-size: 2.6rem;
font-family: 'NotoSans';
position: relative;
bottom: 0.1rem;

&::placeholder {
    color: #D4D4D4;
}
}

.searchButton {
    position: relative;
    bottom: -0.2rem;
}
`;


const SearchBar = () => {
    const searchButton = React.useRef();

    return (
        <SearchBarWrap>
            <SearchBarBox>
            <img 
            className='searchIcon' 
            src={SearchIcon.src}
            alt="" 
            />
            <input type='text' placeholder='제품명, 키워드로 검색해보세요' />
            <img  className='searchButton'
            src={SearchArrowOff.src}
            alt="" 
            onMouseEnter={() => (searchButton.current.src = SearchArrowOn.src)}
            onMouseLeave={() => (searchButton.current.src = SearchArrowOff.src)}
            ref={searchButton}
            />
            </SearchBarBox>
        </SearchBarWrap>
    );
};

export default SearchBar;