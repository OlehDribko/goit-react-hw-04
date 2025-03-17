import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const API_KEY = "Xg7i_oxAaJSlMbaYoc7u2q97M_kEQYjBKm0pkQO7qOM";

function App() {
  const [param, setParam] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!param) return;

    async function fetchArticles() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            query: param,
            client_id: API_KEY,
            page: page,
          },
        });
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (err) {
        setError("Щось пішло не так, спробуйте ще раз.");
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [param, page]);

  const handleSearch = (topic) => {
    setPage(1);
    setImages([]); // Очищаємо попередні зображення
    setParam(topic);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick} />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />}
      <ImageModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} image={selectedImage} />
    </div>
  );
}

export default App;
