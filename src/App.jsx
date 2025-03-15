import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from './components/ImageGallery/ImageGallery'


const API_KEY = "Xg7i_oxAaJSlMbaYoc7u2q97M_kEQYjBKm0pkQO7qOM";

function App() {
  const [param, setParam] = useState("");
  const [imag, setImag] = useState([]);

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
      console.log(response.data.results);
      setImag(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if(param){
        fetchArticles(param);
    }
  
  }, [param]);

  const hendleSerch = async (topic) => {
    try {
      const data = await fetchArticles(topic);
      setParam(topic);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <SearchBar onSerch={hendleSerch} />
      {imag.length > 0 ? <ImageGallery imag={imag}/> : null}
    </div>
  );
}

export default App;
