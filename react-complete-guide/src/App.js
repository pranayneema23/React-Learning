import  React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//Class based, smart, stateful component
class App extends Component {
  state = {
    persons: [
      {name: 'Pranay', age: 22},
      {name: 'Ritika', age: 19},
      {name: 'Stephanie', age: 27}
    ],
    otherObject: [{id: 1, Job: 'Techi'}]
  }

  switchNameHandler = () => {
   this.setState({
     persons: [
       {name: 'Pranay', age: 22},
       {name: 'Ritika', age: 20},
       {name: 'Stephanie', age: 28}
     ]
   })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Pranay!!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies : Sleeping </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    <p>Id :{this.state.otherObject[0].id} Job :{this.state.otherObject[0].Job}</p>
      </div>
    );
    ////return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, Does it works?'));
  }
}

export default App;
