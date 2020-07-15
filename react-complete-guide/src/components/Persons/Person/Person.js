import React,{Component} from 'react';
//import Radium from 'radium';
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';
//ES 6 Syntex
//Functional, stateless, presentational, dumb components.
//when use by class use this.props
class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('[Person.js] rendering...');
        const style = {
            '@media (minWidth: 500px)': {
                width: '450px'
            }
        }
        return (
            // <div className={classes.Person} style={style}>
            <Auxiliary>
                <AuthContext.Consumer>
                    {
                        context => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>
                    }
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} year's old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name}>
                </input>
            {/* </div> */}
            </Auxiliary>
        );
    }
}

export default withClass(Person, classes.Person); 