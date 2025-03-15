import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ imag }) => {
  if (!imag || imag.length === 0) {
    return alert("Дані відсутні");
  }
  return (
    <ul>
      {imag.map((img) => {
        return (
          <li key={img.id}>
            <ImageCard imag={img} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
