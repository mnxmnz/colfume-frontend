import React from 'react';
import styled from 'styled-components';

// 상단 고정
const Positioner = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    flex-direction: column;
    z-index: 1;
    width: 100%;
`

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
  display: flex;
  border-bottom: 0.2rem solid #3e3e3e;
  background: white;
`;

// 헤더의 내용
const HeaderContents = styled.div`
  display: flex;
  align-items: center;
  height: 7.2rem;
`;

// 로고
const Logo = styled.div`
  margin-left: 11.2rem;
  font-family: 'Junge';
  font-size: 3.2rem;
`;

// 헤더 가운데 정렬하기 위해 wrap
const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

//  헤더 카테고리
const Category = styled.div`
  display: flex;
  align-items: center;
  width: 40rem;
  text-align: center;

  button {
    margin: auto;
    font-family: 'Junge';
    font-size: 2.2rem;
  }
`;

const Header = () => {
  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <Logo>Colfume</Logo>
          <CategoryWrap>
            <Category>
              <button>Product</button>
              <button>Color Test</button>
              <button>Search</button>
            </Category>
          </CategoryWrap>
        </HeaderContents>
      </WhiteBackground>
    </Positioner>
  );
};

export default Header;
