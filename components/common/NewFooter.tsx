import React from 'react';
import styled from 'styled-components';
import { FooterIcons, Logo } from '../../assets';
import { media } from '@styles/theme';
import Image from 'next/image';

function NewFooter() {
  return (
    <FooterWrap>
      <MainWrap>
        <LogoWrap>
          <Image src={Logo} alt="" />
        </LogoWrap>
        <DetailWrap>
          <Contact>
            <Title>Contact</Title>
            <a href="mailto:khyeryun98@inha.edu">
              <Content>khyeryun98@inha.edu</Content>
            </a>
          </Contact>
          <Info>
            <Title>Info</Title>
            <a href="https://cooing-mandolin-be1.notion.site/c-lfume-fedc588d0ba54d6f9d1b8be10823c968">
              <Content>COLFUME | 대표 구혜련</Content>
            </a>
          </Info>
        </DetailWrap>
        <AccountWrap>
          <SNS>
            <Title>Follow us</Title>
            <a href="https://cooing-mandolin-be1.notion.site/c-lfume-fedc588d0ba54d6f9d1b8be10823c968">
              <Content>
                <Image alt="footerIcon" src={FooterIcons} />
              </Content>
            </a>
          </SNS>
          <Account>
            <Content>개인정보취급방칩</Content>
            <Content>이용약관</Content>
          </Account>
        </AccountWrap>
      </MainWrap>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  background: ${({ theme }) => theme.colors.gray1};

  ${media[768]} {
    width: 100vw;
    height: 25.6rem;
  }
`;

const MainWrap = styled.div`
  ${media[768]} {
    margin: 0 auto;
  }
`;

const LogoWrap = styled.div`
  ${media[768]} {
    padding-top: 3.6rem;
    text-align: center;
  }
`;

const DetailWrap = styled.div`
  ${media[768]} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4.8rem;
  }
`;

const Contact = styled.div`
  ${media[768]} {
    margin-right: 6.2rem;
  }
`;

const Info = styled.div`
  ${media[768]} {
  }
`;

const AccountWrap = styled.div`
  ${media[768]} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
  }
`;

const SNS = styled.div`
  ${media[768]} {
    margin-right: 20rem;
  }
`;

const Account = styled.div`
  ${media[768]} {
    padding-top: 0.4rem;
  }
`;

const Title = styled.div`
  ${media[768]} {
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.borderGray};
    font-size: 1.2rem;
    font-weight: 700;
    font-style: normal;
  }
`;

const Content = styled.div`
  ${media[768]} {
    line-height: 1.6rem;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;

    img {
      width: 3.7rem;
    }
  }
`;

export default NewFooter;
