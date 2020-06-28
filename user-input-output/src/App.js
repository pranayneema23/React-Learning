import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component{

  state = {
    username: "Pranay Neema",
    userInput: '',
    inputLength: 0
  }

  userNameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  inputChangehHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const val = this.state.userInput.split('');
    val.splice(index,1);
    const updateText = val.join('');
    this.setState({userInput: updateText});
  }

  render() {  
    const characters = this.state.userInput.split('').map((ch,index) => {
      return <CharComponent Character={ch} key={index} click={() => this.deleteCharHandler(index)}/>
    }); 
    return (
      <div className="App">
        <UserInput onNameChange={this.userNameChangeHandler} currentName={this.state.username}></UserInput>
        <UserOutput userName={this.state.username}></UserOutput>
        <input 
          type='text' 
          onChange={this.inputChangehHandler}
          value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <ValidationComponent Length={this.state.userInput.length}/>
        {characters}
      </div>
    );
  }
}

export default App;
