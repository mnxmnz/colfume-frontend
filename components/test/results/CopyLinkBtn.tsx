import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { media } from '@styles/theme';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalIsOpenAtom } from '../../../states/test';
import Modal from 'react-modal';

const customStyles = {
  content: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(62, 62, 62, 0.4)',
    width: '100vw',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'hidden',
    textAlign: 'center',
  },
};

function CopyLinkBtn() {
  const [isOpen, setIsOpen] = useRecoilState(modalIsOpenAtom);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const router = useRouter();
  const { id } = router.query;
  const url = 'https://colfume.vercel.app/test/result/' + id + '?shared=true';

  return (
    <>
      <CopyToClipboard text={url}>
        <CopyLinkWrapper onClick={openModal}> 링크 복사</CopyLinkWrapper>
      </CopyToClipboard>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalBox>
          <TextBox>링크가 복사되었습니다.</TextBox>
          <ConfirmBox onClick={closeModal}>확인</ConfirmBox>
        </ModalBox>
      </Modal>
    </>
  );
}

export default CopyLinkBtn;
const TextBox = styled.div`
  margin-top: 7.4rem;
  font-size: 4rem;
  font-weight: 400;
  ${media.mobile} {
    margin-top: 2.647rem;
    font-size: 1.4rem;
  }
`;
const ConfirmBox = styled.button`
  margin-top: 6.79rem;
  border: solid 1px;
  width: 23.2rem;
  height: 6.496rem;
  font-size: 2.4rem;
  ${media.mobile} {
    margin-top: 2.422em;
    width: 8.271rem;
    height: 2.316rem;
    font-size: 1.2rem;
  }
`;

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  width: 69rem;
  height: 30.8rem;
  ${media.mobile} {
    width: 24.2rem;
    height: 11rem;
  }
`;

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
    margin-top: 1.3222rem;
    margin-left: 8rem;
    width: 11.8rem;
    height: 3.274rem;
    font-size: 1.2rem;
  }
`;
