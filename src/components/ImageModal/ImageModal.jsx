import Modal from "react-modal";

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Selected Image">
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
      <button onClick={onClose}>Закрити</button>
    </Modal>
  );
};

export default ImageModal;
