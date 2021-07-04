import React from 'react';
import styled from 'styled-components';
//mport { Box, Container, Row, Column, FooterButton, Heading,FooterContent} from "./FooterStyles";

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
  max-width: 1000px;
  margin: 0 auto;
`;

const Row = styled.div`
  margin-top: 178px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-gap: 20px;
`;
const Column = styled.div`
 // background: ivory;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
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
  margin-bottom: 20px;
  font-family: 'Junge';
  font-weight: 400;
  font-size: 20px;
  
`;
const FooterContent = styled.div`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 15px;
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
          <Column>
            <Heading>Contact</Heading>
            <FooterButton>khyeryun98@inha.edu</FooterButton>
            <Heading>Info</Heading>
            <FooterContent>Colfume| 대표 구혜련</FooterContent>
            <FooterContent>https://www.notion.so/Colfume-a4cd3bdbe31e46bfbff60c5beade2788</FooterContent>
          </Column>
          <Column>
            <Heading>Follow us</Heading>
            <FooterContent>개인정보취급방침</FooterContent>
            <FooterContent>이용약관</FooterContent>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;


    // <FooterContainer>
    //   <ContentBox>
    //     <FooterLogo>Colfume</FooterLogo>
    //      <FooterCategory>
    //      Menu
    //       <button>Product</button>
    //       <button>Color Test</button>
    //       <button>Search</button>
    //     </FooterCategory>
    //     <FooterInfo>
    //       <classname = "info-title">Contact</>
    //       <classname = "info-content">khyeryun@inha.edu</>
    //     </FooterInfo>
    //   </ContentBox>
     
    // </FooterContainer>
    const FooterContainer = styled.div`
    background: #FAFAFA;
     display: flex;
     min-height: 576px;
     margin-top: auto;
   `;
   
   const ContentBox = styled.div`
     background: grey;
     width: 100%;
     margin: 11.13rem 19.47vw 10.94rem 12.76vw;
   `;
   const FooterLogo = styled.div`
     background: white;
     display: flex;
     font-size: 32px;
     font-weight: 400;
     font-family: 'Junge';
   `;
   
   const FooterCategory = styled.div`
     background: white;
     display: flex;
     font-family: 'Gotham';
     font-weight: 700;
     font-size: 20px;
   
     button {
       font-family: 'Junge';
       font-weight: 400;
       font-size: 20px;
     }
   `;
   
   const FooterInfo = styled.div`
   background: white;
   display: flex;
   
   `;
   
   const FooterEtc = styled.div`
   background: white;
   display: flex;
   `;