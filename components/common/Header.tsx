import React from 'react';
import Link from 'next/link';
import { Logo } from '../../assets';
import { media } from '@styles/theme';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import sizeMe from 'react-sizeme';
import { ISizeProps } from 'types/main';
import MobileHeader from './MobileHeader';

interface IStyledProps {
  current: boolean;
}

const Header = (props: ISizeProps) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const { width } = props.size;
  const isMobile = width <= 768 ? true : false;

  const onClickLogo = () => {
    document.location.href = '/';
  };

  return (
    <>
      {isMobile ? (
        <MobileHeader />
      ) : (
        <Positioner>
          <WhiteBackground>
            <LogoWrap current={currentPath === '/'} onClick={onClickLogo}>
              <Image src={Logo} id="Logo" alt="colfume logo" />
            </LogoWrap>
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
      )}
    </>
  );
};

const Positioner = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const WhiteBackground = styled.div`
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};
  width: 100vw;
  height: 7.2rem;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 7.2rem;
`;

const LogoWrap = styled.div<IStyledProps>`
  position: fixed;
  top: 1.62rem;
  margin-left: 5%;
  cursor: pointer;
`;

const Category = styled.div`
  display: flex;
  margin: auto;
`;

const CategoryBtn = styled.span<IStyledProps>`
  margin: 0 3rem;
  border-bottom: 0.1rem solid ${props => (props.current ? '#3e3e3e' : 'transparent')};
  cursor: pointer;
  text-align: center;
  line-height: 2.674rem;
  font-family: 'Junge';
  font-size: 2.2rem;
`;

export default sizeMe({ monitorHeight: true })(Header);
