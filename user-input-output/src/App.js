import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component{

  state = {
    username: "Pranay Neema"
  }

  userNameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput onNameChange={this.userNameChangeHandler} currentName={this.state.username}></UserInput>
        <UserOutput userName={this.state.username}></UserOutput>
      </div>
    );
  }
}

export default App;
