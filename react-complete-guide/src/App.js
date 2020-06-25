import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//Class based, smart, stateful component
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Pranay!!</h1>
        <Person />
      </div>
    );
    ////return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, Does it works?'));
  }
}

export default App;
