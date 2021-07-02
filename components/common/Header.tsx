import React from 'react';
import styled from 'styled-components';

// 상단 고정
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
`

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    border-bottom: 0.2rem solid #3E3E3E;
    display: flex;
    justify-content: center;
`

// 해더의 내용
const HeaderContents = styled.div`
    width: 100%;
    height: 7.2rem;
    display: flex;
    align-items: center;
`

// 로고
const Logo = styled.div`
    margin-left: 11.2rem;
    font-size: 3.2rem;
    font-family: 'Junge';
`

// 중간 여백
const Space = styled.div`
    flex-grow: 0.405; 
`

//  헤더 카테고리 
const Category = styled.div`
      display: flex; 
      width: 40rem;

    button {
      font-size: 2.2rem;
      font-family: 'Junge';
      margin: auto;
    } 

`

const Header = () => {

    return (
      <>
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Logo>Colfume</Logo>
                    <Space/>
                    <Category>
                      <button>Product</button>
                      <button>Color Test</button>
                      <button>Search</button>
                    </Category>
                </HeaderContents>
            </WhiteBackground>
        </Positioner>
        </>
    );
};

export default Header;
