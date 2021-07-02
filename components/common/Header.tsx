import React from 'react';
import styled from 'styled-components';

// 상단 고정
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
  background: white;
  border-bottom: 0.2rem solid #3e3e3e;
  display: flex;
`;

// 헤더의 내용
const HeaderContents = styled.div`
  height: 7.2rem;
  display: flex;
  align-items: center;
`;

// 로고
const Logo = styled.div`
  margin-left: 11.2rem;
  font-size: 3.2rem;
  font-family: 'Junge';
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
  width: 40rem;
  align-items: center;
  text-align: center;

  button {
    font-size: 2.2rem;
    font-family: 'Junge';
    margin: auto;
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
