import React, { useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from '../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

const Edit = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const memeRef = useRef();

  const addTextHandler = () => {
    setCount(count + 1);
  }

  const saveHandler = (e) => {
    exportComponentAsJPEG(memeRef);
  }

  return (
    <div>
      <div ref={memeRef} className='meme' style={{width: '500px', height: '100%'}}>
        <img src={params.get('url')} style={{width: '100%', height: '100%'}}></img>
        {
          Array(count).fill(0).map((e) => {
            return <Text></Text>
          })
        }
      </div>
      <button onClick={addTextHandler}>Add Text</button>
      <button onClick={(e) => saveHandler(e)}>Save</button>
    </div>
  )
}

export default Edit;