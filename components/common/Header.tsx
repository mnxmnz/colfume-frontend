import React from 'react';
import Link from 'next/link';
import { Logo } from '../../assets';
import { media } from '@styles/theme';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface IStyledProps {
  current: boolean;
}

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Positioner>
      <WhiteBackground>
        <Link href="/" passHref>
          <LogoWrap current={currentPath === '/'}>
            <img src={Logo} id="Logo" alt="" />
          </LogoWrap>
        </Link>
        <Layout>
          <Category>
            <Link href="/product" passHref>
              <CategoryBtn id="Product" current={currentPath === '/product'}>
                Product
              </CategoryBtn>
            </Link>
            <Link href="/test" passHref>
              <CategoryBtn id="ColorTest" current={currentPath === '/test'}>
                Color Test
              </CategoryBtn>
            </Link>
            <Link href="/search" passHref>
              <CategoryBtn id="Search" current={currentPath === '/search'}>
                Search
              </CategoryBtn>
            </Link>
          </Category>
        </Layout>
      </WhiteBackground>
    </Positioner>
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

const LogoWrap = styled.div<IStyledProps>`
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

const CategoryBtn = styled.span<IStyledProps>`
  margin: 0 3rem;
  border-bottom: 0.1rem solid ${props => (props.current ? '#3e3e3e' : 'transparent')};
  cursor: pointer;
  text-align: center;
  line-height: 2.674rem;
  font-family: 'Junge';
  font-size: 2.2rem;

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
