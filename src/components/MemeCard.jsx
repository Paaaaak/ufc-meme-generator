import { useState } from 'react';
import React from 'react';
import './MemeCard.css';
import Edit from '../pages/Edit';

const MemeCard = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const mouseOverHandler = (e) => {
    // console.log('Mouse on', e);
    setIsMouseOver(true);
  }

  const mouseOutHandler = (e) => {
    // console.log('Mouse out', e);
    setIsMouseOver(false);
  }

  const [showEditor, isShowEditor] = useState(false);

  const memeCardClickHandler = () => {
    console.log('Meme card clicked!');
      isShowEditor(true);
      setIsMouseOver(false);
  };
  
  return (
    <div
      className='meme-card'
      onMouseOver={(e) => mouseOverHandler(e)}
      onMouseOut={(e) => mouseOutHandler(e)}>
      {showEditor && (
        <Edit sp={props.img} closeEditor={isShowEditor}></Edit>
      )}
      <div className='meme-card__image' onClick={memeCardClickHandler}>
        <img key={props.img} src={props.img.url}></img>
        {/* 이미지 위에 커서가 올라갔을 경우 아래 문구 보여주기 */}
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