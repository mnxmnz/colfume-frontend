import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { media } from '@styles/theme';
import { useRouter } from 'next/router';

function CopyLinkBtn() {
  const router = useRouter();
  const currentPath = router.pathname;
  console.log(currentPath);
  const url = 'https://www.colfume.com/api/test/result' + currentPath;

  const onHandleCopy = () => {
    alert('copied');
  };
  return (
    <CopyToClipboard text={url}>
      <CopyLinkWrapper onClick={onHandleCopy}> 링크 복사</CopyLinkWrapper>
    </CopyToClipboard>
  );
}
const CopyLinkWrapper = styled.button`
  margin-top: 2.4rem;
  border: solid 1px;
  width: 23.2rem;
  height: 6.496rem;
  font-family: NotoSans;
  font-size: 2.4rem;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }

  ${media.mobile} {
    margin-top: 1.222rem;
    margin-left: 4.6rem;
    width: 11.8rem;
    height: 3.274rem;
    font-size: 1.2rem;
  }
`;

export default CopyLinkBtn;
