import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FooterIcons } from '../../assets';
import Image from 'next/image';
import { media } from '@styles/theme';
import { Logo } from '../../assets';

const Box = styled.div`
  bottom: 0;
  margin-top: auto;
  background: ${({ theme }) => theme.colors.gray1};
  width: 100%;
  min-height: 57.6rem;

  ${media.mobile} {
    width: 37.5rem;
    min-height: 25.6rem;
  }
`;

const MaterialBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 17.8rem;
  width: 190rem;
  ${media.mobile} {
    margin-top: 3.36rem;
    padding-top: 3.36rem;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 2rem;
  margin-left: 21.3rem;

  ${media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(6.2rem, 1fr));
    margin-left: 1.4744rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 13rem;
  text-align: left;
`;
const HeadingColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 13rem;
  text-align: left;
  ${media.mobile} {
    display: none;
  }
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  text-align: left;
  ${media.mobile} {
    display: flex;
    flex-direction: column;
    width: 25.9rem;
    text-align: left;
  }
`;

const FollowColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 43rem;
  width: 150px;
  text-align: left;

  ${media.mobile} {
    margin-left: 0;
  }
`;

const Heading = styled.div`
  margin-bottom: 4rem;
  font-family: 'Gotham';
  font-size: 2rem;
  font-weight: 700;

  ${media.mobile} {
    margin-bottom: 2.5rem;
    font-size: 1.2rem;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 4rem;
  width: 12.8rem;
  font-family: 'Junge';
  font-size: 3.2rem;
  ${media.mobile} {
    width: 8.012rem;
  }
`;

const FooterButton = styled.div`
  margin-bottom: 3.8rem;
  font-family: 'Junge';
  font-size: 2rem;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
  ${media.mobile} {
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

const ImageWrapper = styled.div`
  margin-bottom: 3.8rem;
`;

const Footer = () => {
  const [windowSize, setWindowSize] = useState(1920);
  const isMobile = windowSize <= 375 ? true : false;
  return (
    <Box>
      <MaterialBox>
        <Row>
          <Column>
            <LogoWrapper>
              <Image src={Logo} />
            </LogoWrapper>
          </Column>
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
              <FooterContent>
                https://www.notion.so/Colfume-a4cd3bdbe31e46bfbff60c5beade2788
              </FooterContent>
            </a>
          </InfoColumn>
          <FollowColumn>
            <Heading>Follow us</Heading>
            <ImageWrapper>
              <a href="https://www.notion.so/Colfume-a4cd3bdbe31e46bfbff60c5beade2788">
                <Image src={FooterIcons} />
              </a>
            </ImageWrapper>
            <FooterContent>개인정보취급방침</FooterContent>
            <FooterContent>이용약관</FooterContent>
          </FollowColumn>
        </Row>
      </MaterialBox>
    </Box>
  );
};

export default Footer;
