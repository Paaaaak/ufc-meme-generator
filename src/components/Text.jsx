import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Text = () => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState('Double click to edit text!');
    const doubleClickHandler = () => {
        console.log('Double clicked!');
        setEditMode(true);
    }
    return (
        <Draggable>
            {editMode ? (
                <input value={value} onChange={(e) => setValue(e.target.value)}></input>
            ) : (
                <div onDoubleClick={doubleClickHandler}>
                    <h1>{value}</h1>
                </div>
            )}
        </Draggable>
    );
}

export default Text;