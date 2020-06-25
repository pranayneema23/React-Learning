import React from 'react';
//ES 6 Syntex
//Functional, stateless, presentational, dumb components.
//when use by class use this.props
const person = (props) => {
return (
    <div>
        <p>I'm a {props.name} and I'm {props.age} year's old!</p>
        <p>{props.children}</p>
    </div>
);
}

export default person; 