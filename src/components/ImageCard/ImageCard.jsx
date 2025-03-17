const ImageCard = ({ image, onImageClick }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(image)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
