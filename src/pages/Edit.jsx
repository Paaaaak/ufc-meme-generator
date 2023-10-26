import React, { useState, useRef, useEffect } from 'react';
import Text from '../components/Text';
import { exportComponentAsPNG } from 'react-component-export-image';
import { createPortal } from 'react-dom';

const Edit = (props) => {
  const [count, setCount] = useState(0);

  const memeRef = useRef();

  const addTextHandler = () => {
    setCount(count + 1);
  }

  const saveHandler = (e) => {
    console.log(memeRef);
    exportComponentAsPNG(memeRef);
  }

  useEffect(() => {
    console.log(props);
  }, []);

  const backdropClickHandler = () => {
    console.log('Backdrop clicked!');
    props.closeEditor(false);
  }

  return (
    <div>
      {createPortal(
        <div className='backdrop' onClick={backdropClickHandler}></div>,
        document.getElementById('backdrop-root'))}
      {createPortal(
        <div className='overlay'>
          <h1>{props.sp.name}</h1>
          <div ref={memeRef} className='meme' style={{ width: '500px', height: '100%' }}>
            <img src={props.sp.url} style={{ width: '100%', height: '100%' }}></img>
            {
              Array(count).fill(0).map((e) => {
                return <Text></Text>
              })
            }
          </div>
          <button onClick={addTextHandler}>Add Text</button>
          <button onClick={(e) => saveHandler(e)}>Save</button>
        </div>, 
        document.getElementById('modal-root'))}
    </div>
  )
}

export default Edit;