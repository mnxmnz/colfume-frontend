import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../../assets';
import { media } from '@styles/theme';
import styled from 'styled-components';

const Header = () => {
  const [category, setCategory] = useState('');

  const onClickCategory = event => {
    const target = event.currentTarget.getAttribute('value');

    setCategory(target);
  };

  return (
    <>
      <Positioner>
        <WhiteBackground>
          <Link href="/">
            <LogoWrap>
              <Image
                src={Logo}
                id="Logo"
                value="Logo"
                onClick={onClickCategory}
                category={category}
              />
            </LogoWrap>
          </Link>
          <Layout>
            <Category>
              <Link href="/product">
                <CategoryBtn
                  id="Product"
                  value="Product"
                  onClick={onClickCategory}
                  category={category}
                >
                  Product
                </CategoryBtn>
              </Link>
              <Link href="/test">
                <CategoryBtn
                  id="ColorTest"
                  value="Color Test"
                  onClick={onClickCategory}
                  category={category}
                >
                  Color Test
                </CategoryBtn>
              </Link>
              <Link href="/search">
                <CategoryBtn
                  id="Search"
                  value="Search"
                  onClick={onClickCategory}
                  category={category}
                >
                  Search
                </CategoryBtn>
              </Link>
            </Category>
          </Layout>
        </WhiteBackground>
      </Positioner>
    </>
  );
};

const Positioner = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: column;
  z-index: 1;
`;

const WhiteBackground = styled.div`
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};
  width: 100vw;
  height: 7.2rem;

  ${media.mobile} {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray2};
    height: 4.5rem;
  }
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 100%;
  max-width: 113.6rem;
  height: 7.2rem;

  ${media[1440]} {
    max-width: 84rem;
  }

  ${media[768]} {
    max-width: 35rem;
  }

  ${media.mobile} {
    height: 4.5rem;
  }
`;

const LogoWrap = styled.div`
  position: fixed;
  top: 1.62rem;
  z-index: 100;
  margin-left: 10.1rem;
  cursor: pointer;

  ${media[1440]} {
    margin-left: 6rem;
  }

  ${media[768]} {
    top: 2.2rem;
    margin-left: 3rem;
    width: 10rem;
  }

  ${media.mobile} {
    top: 1.1rem;
    width: 8rem;
  }
`;

const Category = styled.div`
  display: flex;
  margin: auto;

  ${media[1440]} {
    margin-right: 4rem;
  }

  ${media[768]} {
    margin-left: 5rem;
  }

  ${media.mobile} {
    margin-left: 12rem;
  }

  #Product {
    width: 10rem;

    ${media[768]} {
      width: 8.5rem;
    }

    ${media.mobile} {
      width: 5.5rem;
    }
  }

  #ColorTest {
    width: 12.7rem;

    ${media[768]} {
      width: 11.5rem;
    }

    ${media.mobile} {
      width: 6.8rem;
    }
  }

  #Search {
    width: 8.8rem;

    ${media[768]} {
      width: 7.5rem;
    }

    ${media.mobile} {
      width: 4.8rem;
    }
  }
`;

const CategoryBtn = styled.span<{ value: string; category: string }>`
  margin: 0 3rem;
  border-bottom: ${props => props.category === props.value && '0.1rem solid #3E3E3E'};
  cursor: pointer;
  text-align: center;
  line-height: 2.674rem;
  font-family: 'Junge';
  font-size: 2.2rem;

  ${media[1440]} {
  }

  ${media[768]} {
    margin: 0 1.3rem;
    font-size: 1.8rem;
  }

  ${media.mobile} {
    margin: 0 1rem;
    line-height: 1.458rem;
    font-size: 1.2rem;
  }
`;

export default Header;
