import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { media } from '@styles/theme';
import styled from 'styled-components';
import { MenuIcon, Logo } from '../../assets';
import Image from 'next/image';

interface IStyledProps {
  current: boolean;
}

const Positioner = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: column;
  z-index: 1;
`;

const WhiteBackground = styled.div`
  display: flex;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};
  width: 100vw;
  height: 7.2rem;
  ${media.custom(480)} {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray2};
    height: 4.3rem;
  }
`;

const Category = styled.div`
  margin: auto;
  cursor: pointer;
  font-family: 'Junge';
  font-size: 2.2rem;
  ${media.custom(480)} {
    font-size: 1.2rem;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2.5rem;
  width: 100%;
`;

const LogoWrap = styled.div<IStyledProps>`
  display: flex;
  ${media.custom(480)} {
    width: 7.4rem;
  }
`;

const IconWrap = styled.div`
  display: flex;
  ${media.custom(480)} {
    width: 2.3rem;
  }
`;

const MobileHeader = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const [isOpen, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  };

  return (
    <>
      {isOpen ? (
        <Positioner>
          <WhiteBackground>
            <Wrap>
              <Link href="/" passHref>
                <LogoWrap current={currentPath === '/'}>
                  <Image src={Logo} id="Logo" alt="colfume logo" />
                </LogoWrap>
              </Link>
              <IconWrap>
                <Image src={MenuIcon} id=" MenuIcon" alt="menu icon" onClick={toggleMenu} />
              </IconWrap>
            </Wrap>
          </WhiteBackground>
        </Positioner>
      ) : (
        <Positioner>
          <WhiteBackground>
            <Link href="/product" passHref>
              <Category onClick={toggleMenu}>Product</Category>
            </Link>
          </WhiteBackground>
          <WhiteBackground>
            <Link href="/test" passHref>
              <Category onClick={toggleMenu}>Color Test</Category>
            </Link>
          </WhiteBackground>
          <WhiteBackground>
            <Link href="/search" passHref>
              <Category onClick={toggleMenu}>Search</Category>
            </Link>
          </WhiteBackground>
          <WhiteBackground>
            <Wrap>
              <Link href="/" passHref>
                <LogoWrap current={currentPath === '/'}>
                  <Image src={Logo} id="Logo" alt="colfume logo" />
                </LogoWrap>
              </Link>
              <IconWrap>
                <Image src={MenuIcon} id="MenuIcon" alt="menu icon" onClick={toggleMenu} />
              </IconWrap>
            </Wrap>
          </WhiteBackground>
        </Positioner>
      )}
    </>
  );
};

export default MobileHeader;
