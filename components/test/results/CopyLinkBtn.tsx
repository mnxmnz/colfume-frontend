import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { media } from '@styles/theme';
import { useRouter } from 'next/router';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    right: 'auto',
    bottom: 'auto',
    left: '',
    transform: 'translate(-50%, -50%)',
    marginRight: '-50%',
  },
};
function CopyLinkBtn() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const router = useRouter();
  const currentPath = router.pathname;
  const url = 'https://www.colfume.com/api/test/result' + currentPath;

  return (
    <CopyToClipboard text={url}>
      <CopyLinkWrapper onClick={openModal}> 링크 복사</CopyLinkWrapper>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      ></Modal>
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
