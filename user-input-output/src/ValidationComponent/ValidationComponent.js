import React from 'react';

const validationComponent = (props) => {
    let val = 'Text too short';
    if(props.Length > 5)
        val = 'Text long enough';
return (<p>{val}</p>);
}

export default validationComponent;

