import React from 'react';
import styled from 'styled-components';
import Result from './ResultData';
import Image from 'next/image';
import {Green} from '../../../assets/';

function TestResult() {
   const data = Result;
   const descriptions= [
      'Green은 생명의 색이기도 하며, 안전, 인내를 의미합니다.', 
      '또한 Green은 인테리어를 포함하여 다양한 디자인 요소에서 이용될 정도로, 자연스럽고 안정된 모습을 느끼게 해줘요.', 
      '숲속에 자리한 풀잎들과 나무에서 흘러나오는 향기가 떠오르는 색깔이에요. ',
      'Green이 어울리는 당신은 주변에 쉽게 흔들리지 않으며, 신뢰할 수 있는 사람이에요.', 
      '당신은 높은 도덕기준을 가지고 있고, 올바른 일을 하는 것은 당신에게 매우 중요해요. ',
      '위험을 무릅쓰지 않고, 행동을 우선시 하지 않으며, 관찰하는 것을 좋아해요.', 
      '당신에게 올곧은 성품과 자연친화적인 매력을 부각시켜줄 Green계열 향수를 써보기를 추천해요!',]
const listDescription = descriptions.map((description) => 
<li>{description}</li>);

   return (
      <Layout>
         <LeftWrapper>
         <ResultColor>Green</ResultColor>
         <KeySentence>주변의 상황에 휘둘리지 않는 올곧음을 가진</KeySentence>
         <KeySentence>당신의 색깔은 Green</KeySentence>
            <KeyWord>발랄한</KeyWord>
            <MatchingColor>궁합이 맞는 컬러</MatchingColor>
            <DescriptionWrap>
            <Description >{listDescription}</Description>
            </DescriptionWrap>
         </LeftWrapper>
         <RightWrapper>
            <ImageWrapper>
               <Image src={Green} />
            </ImageWrapper>
            <RecommendBtn>향수 추천을 받아보세요</RecommendBtn>
            <CopyLinkBtn>링크 복사</CopyLinkBtn>
            <RetryBtn>다시 하기</RetryBtn>
         </RightWrapper>
      </Layout>
   );
}

export default TestResult;

const Layout = styled.div`
  margin-top: 7.3rem;
  width: 1920px;
`;

const LeftWrapper = styled.div`
   float: left;
   margin-top: 12.4074vh;
   margin-left: 23.8021vw;
`;
const ResultColor = styled.div`
   font-family: Junge;
   font-size: 8rem;
   font-weight: 400;
`;

const KeySentence = styled.div`
   margin-top: 2.4rem;
   margin-left: 1.2rem;
   font-family: NanumMyeongjo;
   font-size: 3rem;
   font-weight: 400;
`;
const KeyWord= styled.div`
   margin-top: 4rem;  
   margin-left: 1.8rem;
   font-family: NotoSans;
   font-size: 1.8rem;
   font-weight: 500;
`;
const MatchingColor = styled.div`
   margin-top: 1rem;
   margin-left: 1.8rem;
   font-family: NotoSans;
   font-size: 1.8rem;
   font-weight: 500;
`;
const DescriptionWrap = styled.div`
   margin-top: 10.1rem;
   width: 80rem;
   font-family: NotoSans;
   font-size: 1.8rem;
   font-weight: 400;
`;
const Description = styled.div`
   margin-bottom: 2rem;
   >li {
      margin-top: 1rem;
   }
`;

const RightWrapper = styled.div`
   float: right;
   margin-top: 18.3rem;
   margin-right: 24.5rem;
   width: 50rem;
   height: 59.9rem;
`;

const ImageWrapper = styled.div`
   margin: 0 auto;
   width: 33.1rem;
   height: 33.1rem;
   align-itmes: center;
`;

const RecommendBtn = styled.button`
   margin-top: 10.7rem;
   background-color: ${({ theme })=> theme.colors.black};
   width: 50rem;
   height: 7.1rem;
   color: #FFFFFF;
   font-family: NotoSans;
   font-size: 2.8rem;
   font-weight: 400;
   
   &:hover {
      cursor: pointer;
   }
`;

const CopyLinkBtn= styled.button`
   margin-top: 2.4rem;
   border: solid 1px;
   width: 23.2rem;
   height: 6.496rem;
   font-family: NotoSans;
   font-size: 2.4rem;
   font-weight: 400;
`;

const RetryBtn = styled.button`
   float: right;
   margin-top: 2.4rem;
   border: solid 1px;
   width: 23.2rem;
   height: 6.496rem;
   font-family: NotoSans;
   font-size: 2.4rem;
   font-weight: 400;
`;