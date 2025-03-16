import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

const API_KEY = "Xg7i_oxAaJSlMbaYoc7u2q97M_kEQYjBKm0pkQO7qOM";

function App() {
  const [param, setParam] = useState("");
  const [imag, setImag] = useState([]);
  let [loading, setLoading] = useState(false);


  

  async function fetchArticles(topic) {
    if (!topic.trim()) {
      return;
    }
    
    try {
      
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query: topic,
            client_id: API_KEY,
          },
        }
      );
      setImag(response.data.results);
    } catch (err) {
      console.log(err);
    } finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    if (param) {
      fetchArticles(param);
    }
  }, [param]);

  const hendleSerch = async (topic) => {
    try {
      setLoading(true);
      const data = await fetchArticles(topic);
      setParam(topic);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <SearchBar onSerch={hendleSerch} />
      {loading && <Loader />}
      {imag.length > 0 && !loading && <ImageGallery imag={imag} />}
      
    </div>
  );
}

export default App;
