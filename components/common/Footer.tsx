import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background: #FAFAFA;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  min-height: 576px;

  @media (max-width: 1000px) {
    padding: 70px 30px
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: cetner;
  max-width: 1900px;

`;

const Row = styled.div`
    margin-top: 11.44rem;
    margin-left: 11.56rem;
    display: grid;
   grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-gap: 20px;
`;

const Column = styled.div`
 width: 130px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const InfoColumn = styled.div`
display: flex;
width: 440px;
flex-direction: column;
text-align: left;
`;

const FollowColumn = styled.div`
margin-left: 230px;
width: 150px;
display: flex;
flex-direction: column;
text-align: left;
`;


const Heading = styled.div`
  margin-bottom: 40px;
  font-family: 'Gotham';
  font-weight: 700;
  font-size: 20px;
`;

const FooterHeading = styled.div`
  margin-bottom: 40px;
  font-family: 'Junge';
  font-weight: 400;
  font-size: 32px;

`;
const FooterButton = styled.div`
  margin-bottom: 38px;
  font-family: 'Junge';
  font-weight: 400;
  font-size: 20px;
  
`;
const FooterContent = styled.div`
  margin-bottom: 12px;
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 15px;
`;

const Image = styled.div``;
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
            <FooterContent>https://www.notion.so/Colfume-a4cd3bdbe31e46bfbff60c5beade2788</FooterContent>
          </InfoColumn>
          <FollowColumn>
            <Heading>Follow us</Heading>
            <FooterContent>개인정보취급방침</FooterContent>
            <FooterContent>이용약관</FooterContent>
          </FollowColumn>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
