import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from '../components/Text';

const Edit = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const addTextHandler = () => {
    setCount(count + 1);
  }

  const saveHandler = () => {
    
  }

  return (
    <div>
      <img src={params.get('url')} style={{width: '500px'}}></img>
      <button onClick={addTextHandler}>Add Text</button>
      <button onClick={saveHandler}>Save</button>
      {
        Array(count).fill(0).map((e) => {
          return <Text></Text>
        })
      }
    </div>
  )
}

export default Edit;