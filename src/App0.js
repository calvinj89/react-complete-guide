import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons: [
      {name : 'Mashari', age: 4},
      {name : 'Jordyn', age: 1},
      {name: 'CJ', age: 20}
    ],
    otherState: 'Set other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked');
    //Dont do this this.state.persons[0].name = 'Tammy Jones';
    this.setState({persons: [
      {name : newName, age: 4},
      {name : 'Telli Tubby', age: 1},
      {name: 'Dat Dat Dat Boy', age: 20}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name : 'Kelly', age: 4},
      {name : event.target.value, age: 1},
      {name: 'Dat Dat Dat Boy', age: 20}
      ]
    })
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if( this.state.showPersons ){

      persons = (
        <div >
          <Person
            name={this.state.persons[0].name}
            age = {this.state.persons[0].age}> My grand babies
          </Person>
          <Person
            name={this.state.persons[1].name}
            age = {this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Kool K')}
            changed={this.nameChangedHandler}/>
          <Person
            name={this.state.persons[2].name}
            age = {this.state.persons[2].age}/>
        </div>
      );

    }

    return (
      <div className="App">
        <h1>Hi, my name is Calvin Jones</h1>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
