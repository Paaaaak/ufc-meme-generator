import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MemeCard from './components/MemeCard';

function App() {
  const [data, setData] = useState([]);

  let url = 'https://api.imgflip.com/get_memes';

  const getMemeUrls = async () => {
    try {
      const memeUrls = await axios.get(url);
      console.log(memeUrls.data.data.memes);
      setData(memeUrls.data.data.memes);
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMemeUrls();
  }, []);

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <form>
        <input type='text' placeholder='Search memes'></input>
        <button>Search</button>
      </form>
      <div className='meme-container'>
        {data && data.map((item, index) => {
          return <MemeCard img={item}></MemeCard>
        })}
      </div>
    </div>
  );
}

export default App;