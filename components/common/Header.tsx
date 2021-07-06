import React, { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [category, setCategory] = useState('');
  const onClickCategory = event => {
    const target = event.currentTarget.getAttribute('value');
    setCategory(target);
  };

  return (
    <>
      <Logo>Colfume</Logo>
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

const Logo = styled.div`
  position: fixed;
  top: 2rem;
  z-index: 100;
  margin-left: 11.2rem;
  font-family: 'Junge';
  font-size: 3.2rem;
`;

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
`;

const WhiteBackground = styled.div`
  width: 100vw;
  height: 7.2rem;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.black};
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

const CategoryBtn = styled.span`
  font-size: 2.2rem;
  font-family: 'Junge';
  text-align: center;
  padding: 0 1rem;
  margin: 0 3rem;
  cursor: pointer;
  border-bottom: ${props => props.category === props.value && '0.1rem solid #3e3e3e;'};
`;

export default Header;
