import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {

  //Use to initilize the state based on props you're getting
  //Sync State to Props
  // static getDerivedStateFromProps(props,state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  //Supported by legacy react
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  //Can use to cancel the updating process(Use carefully)
  //Use for performance optimization
  //You should have to return either rue or false
  shouldComponentUpdate(nextProps,nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  //Last min dom operations-get last scroll position
  //Data package
  getSnapshotBeforeUpdate(prevProps,prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message : 'Snapshot!'};
  }

  //Not supported anymore
  // componentWillUpdate() {
  // }

  componentDidUpdate(prevProps,prevState,snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnMount() {
    console.log('[Persons.js] componentWillUnMount');
  }

  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person,index) => {
      return (
         <Person 
            name={person.name} 
            age={person.age}
            click={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event,person.id)}
            key={person.id}
            />
      );  
    });
  }
};

export default Persons;