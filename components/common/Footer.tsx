import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FooterIcons } from '../../assets';
import Image from 'next/image';
import { media } from '@styles/theme';
import { Logo } from '../../assets';

const Box = styled.div`
  bottom: 0;
  background: ${({ theme }) => theme.colors.gray1};
  width: 100%;
  height: 57.6rem;

  ${media.mobile} {
    width: 100vw;
  }
`;

const MaterialBox = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 0 20%; */
  padding-top: 17.8rem;
  width: 100%;

  ${media.mobile} {
    margin-top: 3.36rem;
    padding-top: 3.36rem;
  }
`;

const HeadingColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  text-align: left;

  ${media.mobile} {
    display: none;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px 0 80px;
  width: 50rem;
  text-align: left;

  ${media.mobile} {
    display: flex;
    flex-direction: row;
    background: pink;
    width: 25.9rem;
    text-align: left;
  }
`;

const FollowColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  text-align: left;

  ${media.mobile} {
    margin-left: 0;
  }
`;

const Heading = styled.div`
  margin-bottom: 4rem;
  width: 20rem;
  font-family: 'Gotham';
  font-size: 2rem;
  font-weight: 700;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
    font-size: 1.2rem;
  }
`;

const LogoColumn = styled.div`
  margin-right: 10rem;
  width: 14rem;

  ${media.custom(1180)} {
    opacity: 0;
  }
`;

const LogoWrapper = styled.div`
  img {
    width: 13rem;
    height: 3rem;
  }

  ${media.mobile} {
    background: yellow;
    width: 8.012rem;
  }
`;

const FooterButton = styled.div`
  margin-bottom: 3.8rem;
  width: 11rem;
  font-family: 'Junge';
  font-size: 2rem;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
    font-size: 1rem;
  }
`;

const FooterContent = styled.div`
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  font-weight: 400;

  ${media.mobile} {
    margin-bottom: 1.2rem;
    font-size: 1rem;
  }
`;

const MobileContent = styled.div`
  margin-bottom: 1.2rem;
  width: 50rem;
  font-size: 1.5rem;
  font-weight: 400;

  ${media.mobile} {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 3.8rem;
`;

const Footer = () => {
  return (
    <Box>
      <MaterialBox>
        <LogoColumn>
          <LogoWrapper>
            <Image src={Logo} />
          </LogoWrapper>
        </LogoColumn>
        <HeadingColumn>
          <Heading>Menu</Heading>
          <Link href="/product">
            <FooterButton>Product</FooterButton>
          </Link>
          <Link href="/test">
            <FooterButton>Color Test</FooterButton>
          </Link>
          <Link href="/search">
            <FooterButton>Search</FooterButton>
          </Link>
        </HeadingColumn>

        <InfoColumn>
          <Heading>Contact</Heading>
          <a href="mailto:khyeryun98@inha.edu">
            <FooterButton>khyeryun98@inha.edu</FooterButton>
          </a>
          <Heading>Info</Heading>
          <FooterContent>COLFUME | 대표 구혜련</FooterContent>
          <a href="https://www.notion.so/Colfume-a4cd3bdbe31e46bfbff60c5beade2788">
            <MobileContent>
              https://www.notion.so/Colfume-a4cd3bdbe31e46bfbff60c5beade2788
            </MobileContent>
          </a>
        </InfoColumn>

        <FollowColumn>
          <Heading>Follow us</Heading>
          <ImageWrapper>
            <a href="https://www.notion.so/Colfume-a4cd3bdbe31e46bfbff60c5beade2788">
              <Image alt="footerIcon" src={FooterIcons} />
            </a>
          </ImageWrapper>
          <FooterContent>개인정보취급방침</FooterContent>
          <FooterContent>이용약관</FooterContent>
        </FollowColumn>
      </MaterialBox>
    </Box>
  );
};

export default Footer;
