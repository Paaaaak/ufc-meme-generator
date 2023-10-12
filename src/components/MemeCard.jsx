import React from 'react';
import './MemeCard.css';

const MemeCard = (props) => {
  return (
    <div className='meme_card'>
      <img key={props.img} src={props.img.url}></img>
    </div>
  );
};

export default MemeCard;