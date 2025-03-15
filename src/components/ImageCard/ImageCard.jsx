import { useState } from "react";
import Modal from "react-modal";

const ImageCard = ({ imag }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  

  if (imag.length === 0) {
    return;
  }

  const urlImg = imag.urls;

  return (
    <div>
      <img
        src={imag.urls.small}
        alt={imag.alt_description}
        onClick={() => setModalIsOpen(true)}
      />
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <img
          src={imag.urls.regular}
          alt={imag.alt_description}
          onClick={() =>  setModalIsOpen(true)}
          style={customStyles}
        />
      </Modal>
    </div>
  );
};
export default ImageCard;
