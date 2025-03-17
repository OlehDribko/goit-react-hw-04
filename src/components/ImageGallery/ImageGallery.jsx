import ImageCard from "../ImageCard/ImageCard";
import style from "./ImagGallery.module.css";


const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="cardOfImg">
      {images.map((img) => (
        <li className={style.cardOfImg} key={img.id}>
          <ImageCard image={img} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
