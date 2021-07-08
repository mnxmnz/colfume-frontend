import React, { useState } from 'react';
import Image from 'next/image';
import { Logo } from '../../assets';
import styled from 'styled-components';

const Header = () => {
  const [category, setCategory] = useState('');

  const onClickCategory = event => {
    const target = event.currentTarget.getAttribute('value');

    setCategory(target);
  };

  return (
    <>
      <LogoWrap>
        <Image src={Logo} />
      </LogoWrap>
      <Positioner>
        <WhiteBackground>
          <Category>
            <CategoryBtn id="Product" value="Product" onClick={onClickCategory} category={category}>
              Product
            </CategoryBtn>
            <CategoryBtn
              id="ColorTest"
              value="Color Test"
              onClick={onClickCategory}
              category={category}
            >
              Color Test
            </CategoryBtn>
            <CategoryBtn id="Search" value="Search" onClick={onClickCategory} category={category}>
              Search
            </CategoryBtn>
          </Category>
        </WhiteBackground>
      </Positioner>
    </>
  );
};

const LogoWrap = styled.div`
  position: fixed;
  top: 1.62rem;
  z-index: 100;
  margin-left: 10.1rem;
`;

const Positioner = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: column;
  z-index: 1;
  width: 100%;
`;

const WhiteBackground = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};
  width: 100vw;
  height: 7.2rem;
`;

const Category = styled.div`
  display: flex;
  margin: auto;
  padding-right: 1.5rem;

  #Product {
    width: 10rem;
  }

  #ColorTest {
    width: 12.7rem;
  }

  #Search {
    width: 8.8rem;
  }
`;

const CategoryBtn = styled.span<{ value: string; category: string }>`
  margin: 0 3rem;
  border-bottom: ${props => props.category === props.value && '0.1rem solid #3e3e3e;'};
  cursor: pointer;
  padding: 0 1rem;
  text-align: center;
  font-family: 'Junge';
  font-size: 2.2rem;
`;

export default Header;
