import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MemeCard from '../components/MemeCard';

const Main = () => {
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

    // 페이지 처음 렌더링됐을시 랜덤 Meme 불러오기
    useEffect(() => {
        getMemeUrls();
    }, []);

    const searchHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={searchHandler}>
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

export default Main;