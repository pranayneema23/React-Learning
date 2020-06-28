import  React, { Component } from 'react';
//import  React, { useState } from 'react'; //Part of functional component
import './App.css';
import Person from './Person/Person';

//Functional component
/*const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Pranay', age: 22},
      {name: 'Ritika', age: 19},
      {name: 'Stephanie', age: 27}
    ],
  });

  const [otherObject,setOtherState] = useState({otherObject: [{id: 1, Job: 'Techi'}]})

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Pranay', age: 22},
        {name: 'Ritika', age: 20},
        {name: 'Stephanie', age: 28}
      ]
    })
   }

  return (
    <div className="App">
    <h1>Hi, I'm Pranay!!</h1>
    <button onClick={switchNameHandler}>Switch Name</button>
    <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
    <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies : Sleeping </Person>
    <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    <p>Id :{otherObject.otherObject[0].id} Job :{otherObject.otherObject[0].Job}</p>
  </div>
  );
}

export default app;*/

//Class based, smart, stateful component
class App extends Component {
  state = {
    persons: [
      {name: 'Pranay', age: 22},
      {name: 'Ritika', age: 19},
      {name: 'Stephanie', age: 27}
    ],
    otherObject: [{id: 1, Job: 'Techi'}],
    showPerson: false
  }

  switchNameHandler = (newName) => {
   this.setState({
     persons: [
       {name: newName, age: 22},
       {name: 'Ritika', age: 20},
       {name: 'Stephanie', age: 28}
     ]
   })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Pranay', age: 22},
        {name: event.target.value, age: 20},
        {name: 'Stephanie', age: 28}
      ]
    })
  }

  togglePersonHandler = () =>{
    const toggleState = this.state.showPerson;
    this.setState({showPerson: !toggleState})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if(this.state.showPerson){
      person = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm Pranay!!</h1>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>
        {this.state.showPerson ? 'Hide Person' : 'Show Person'}</button>
        {person}
        <p>Id :{this.state.otherObject[0].id} Job :{this.state.otherObject[0].Job}</p>
      </div>
    );
    ////return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, Does it works?'));
  }
}

export default App;
