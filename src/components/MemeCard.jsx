import { useState } from 'react';
import React from 'react';
import './MemeCard.css';
import { useNavigate } from 'react-router-dom';

const MemeCard = (props) => {
  const navigate = useNavigate();
  const [isMouseOver, setIsMouseOver] = useState(false);

  const mouseOverHandler = (e) => {
    // console.log('Mouse on', e);
    setIsMouseOver(true);
  }

  const mouseOutHandler = (e) => {
    // console.log('Mouse out', e);
    setIsMouseOver(false);
  }

  return (
    <div
      className='meme-card'
      onMouseOver={(e) => mouseOverHandler(e)}
      onMouseOut={(e) => mouseOutHandler(e)}
      onClick={(e) => navigate(`/edit?url=${props.img.url}`)}>
      <div className='meme-card__image'>
        <img key={props.img} src={props.img.url}></img>
        {isMouseOver && (
          <div className='meme-card__image-edit'>
            <span>Click to edit</span>
          </div>
        )}
      </div>
      <span>{props.img.name}</span>
    </div>
  );
};

export default MemeCard;