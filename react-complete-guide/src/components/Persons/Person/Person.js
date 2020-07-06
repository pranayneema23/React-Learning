import React from 'react';
//import Radium from 'radium';
import classes from './Person.css';
//ES 6 Syntex
//Functional, stateless, presentational, dumb components.
//when use by class use this.props
const person = (props) => {
    const style = {
        '@media (minWidth: 500px)': {
            width: '450px'
        }
    }
    console.log('[Person.js] rendering...');
    return (
        <div className={classes.Person} style={style}>
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age} year's old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
}

export default person; 