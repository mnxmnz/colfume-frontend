import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { media } from '@styles/theme';
import { Logo, FooterIcons } from '../../assets';

const Box = styled.div`
  bottom: 0;
  background: ${({ theme }) => theme.colors.gray1};
  height: 57.6rem; ;
`;

const MaterialBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 17.8rem;
  width: 100%;
`;

const HeadingColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  text-align: left;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px 0 80px;
  width: 50rem;
  text-align: left;

  ${media.custom(900)} {
    width: 25rem;
  }
`;

const FollowColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  text-align: left;
`;

const Heading = styled.div`
  margin-bottom: 4rem;
  width: 20rem;
  font-family: 'Gotham';
  font-size: 2rem;
  font-weight: 700;
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

  ${media.custom(900)} {
    width: 25rem;
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
            <Image src={Logo} alt="footer logo" />
          </LogoWrapper>
        </LogoColumn>
        <HeadingColumn>
          <Heading>Menu</Heading>
          <Link href="/product" passHref>
            <FooterButton>Product</FooterButton>
          </Link>
          <Link href="/test" passHref>
            <FooterButton>Color Test</FooterButton>
          </Link>
          <Link href="/search" passHref>
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
          <a href="https://cooing-mandolin-be1.notion.site/c-lfume-fedc588d0ba54d6f9d1b8be10823c968">
            <MobileContent>
              https://cooing-mandolin-be1.notion.site/c-lfume-fedc588d0ba54d6f9d1b8be10823c968
            </MobileContent>
          </a>
        </InfoColumn>

        <FollowColumn>
          <Heading>Follow us</Heading>
          <ImageWrapper>
            <a href="https://cooing-mandolin-be1.notion.site/c-lfume-fedc588d0ba54d6f9d1b8be10823c968">
              <Image alt="footer icon" src={FooterIcons} />
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
