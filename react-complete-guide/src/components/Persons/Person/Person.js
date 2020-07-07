import React,{Component} from 'react';
//import Radium from 'radium';
import classes from './Person.css';
//ES 6 Syntex
//Functional, stateless, presentational, dumb components.
//when use by class use this.props
class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        const style = {
            '@media (minWidth: 500px)': {
                width: '450px'
            }
        }
        return (
            <div className={classes.Person} style={style}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} year's old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        );
    }
}

export default Person; 