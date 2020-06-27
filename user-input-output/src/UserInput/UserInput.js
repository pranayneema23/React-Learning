import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid blue'
    };
    return <input style={style} type="text" onChange={props.onNameChange} value={props.currentName}/>;
};

export default userInput;