import React from 'react';
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

function LinkCopiedModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    ></Modal>
  );
}

export default LinkCopiedModal;
