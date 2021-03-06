import  React, { Component } from 'react';
import classes from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context'; 

//Class based, smart, stateful component
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      {id: 1,name: 'Pranay', age: 22},
      {id: 2,name: 'Ritika', age: 19},
      {id: 3,name: 'Stephanie', age: 27}
    ],
    otherObject: [{id: 1, Job: 'Techi'}],
    showPerson: false,
    showCockpit : true,
    changeCounter: 0,
    authenticated : false
  }

  switchNameHandler = (newName) => {
   this.setState({
     persons: [
       {id: 1,name: newName, age: 22},
       {id: 2,name: 'Ritika', age: 20},
       {id: 3,name: 'Stephanie', age: 28}
     ]
   })
  }

  deletePersonalHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons:persons, 
        changeCounter: prevState.changeCounter
      };
    });
  };

  togglePersonHandler = () => {
    const toggleState = this.state.showPerson;
    this.setState({showPerson: !toggleState})
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {

    let person = null;
    
    if(this.state.showPerson){
      person = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonalHandler}
          changed={this.nameChangeHandler}/>;
    }

    return (
        <Auxiliary>
          <button onClick= {() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
          <AuthContext.Provider 
            value={{
              authenticated: this.state.authenticated,
              login :this.loginHandler
            }}>
            {this.state.showCockpit ? 
            <Cockpit
            title = {this.props.appTitle}
            showPersons={this.state.showPerson}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
            login={this.loginHandler}
            /> : null}
            {person}
            </AuthContext.Provider>
          <p>Id :{this.state.otherObject[0].id} Job :{this.state.otherObject[0].Job}</p>
        </Auxiliary>
    );
    ////return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, Does it works?'));
  }
}

export default withClass(App,classes.App);

//Functional component
//import  React, { useState } from 'react'; //Part of functional component
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
