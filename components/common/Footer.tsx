import React from 'react';
import styled from 'styled-components';
import { FooterIcons } from '../../assets';
import Image from 'next/image';

const Box = styled.div`
  bottom: 0;
  margin-top: auto;
  background: ${({ theme }) => theme.colors.gray1};
  width: 100%;
  min-height: 57.6rem;

  @media (max-width: 100rem) {
    padding: 7rem 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: cetner;
  max-width: 190rem;
`;

const Row = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
   grid-gap: 2rem;
   margin-top: 11.44rem;
   margin-left: 11.56rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 13rem;
  text-align: left;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 44rem;
  text-align: left;
`;

const FollowColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 230px;
  width: 150px;
  text-align: left;
`;

const Heading = styled.div`
  margin-bottom: 4rem;
  font-family: 'Gotham';
  font-size: 2rem;
  font-weight: 700;
`;

const FooterHeading = styled.div`
  margin-bottom: 4rem;
  font-family: 'Junge';
  font-size: 3.2rem;
  font-weight: 400;
`;

const FooterButton = styled.div`
  margin-bottom: 3.8rem;
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
`;

const ImageWrapper = styled.div`
  margin-bottom: 3.8rem;
`;

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <FooterHeading>Colfume</FooterHeading>
          </Column>
          <Column>
            <Heading>Menu</Heading>
            <FooterButton>Product</FooterButton>
            <FooterButton>Color Test</FooterButton>
            <FooterButton>Search</FooterButton>
          </Column>
          <InfoColumn>
            <Heading>Contact</Heading>
            <FooterButton>khyeryun98@inha.edu</FooterButton>
            <Heading>Info</Heading>
            <FooterContent>COLFUME | 대표 구혜련</FooterContent>
            <FooterContent>
              https://www.notion.so/Colfume-a4cd3bdbe31e46bfbff60c5beade2788
            </FooterContent>
          </InfoColumn>
          <FollowColumn>
            <Heading>Follow us</Heading>
            <ImageWrapper>
              <Image src={FooterIcons} />
            </ImageWrapper>
            <FooterContent>개인정보취급방침</FooterContent>
            <FooterContent>이용약관</FooterContent>
          </FollowColumn>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
