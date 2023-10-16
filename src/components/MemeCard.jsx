import React from 'react';
import './MemeCard.css';
import { useNavigate } from 'react-router-dom';

const MemeCard = (props) => {
  const navigate = useNavigate();

  const mouseOverHandler = (e) => {
    // console.log('Mouse on', e);
  }

  const mouseOutHandler = () => {
    // console.log('Mouse out');
  }

  return (
    <div 
      className='meme_card' 
      onMouseOver={(e) => mouseOverHandler(e)} 
      onMouseOut={(e) => mouseOutHandler(e)}>
      <img key={props.img} src={props.img.url}></img>
      <span>{props.img.name}</span>
      <button onClick={(e) => navigate(`/edit?url=${props.img.url}`)}>Edit</button>
    </div>
  );
};

export default MemeCard;