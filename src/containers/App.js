import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');

  }

  state = {
    persons: [
      {id: '12', name : 'Mashari', age: 4},
      {id: '23', name : 'Jordyn', age: 1},
      {id: '45', name: 'CJ', age: 20}
    ],
    otherState: 'Set other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
  }

  /*
  componentWillMount(){
      console.log('[App.js] componentWillMount');
  }
  */
  componentDidMount(){
      console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(){
      console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }


  /*
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
*/


  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    //copies the original person in the array to new object person that was define by the conts
    const person ={
      ...this.state.persons[personIndex]
    };

    //const person = this.state.persons[personIndex];
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});

  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    //const persons = this.state.persons.slice(); actually makes a copy of the array.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if( this.state.showPersons ){
      persons = <Persons
         persons={this.state.persons}
         clicked={this.deletePersonHandler}
         changed={this.nameChangedHandler}/>;
    }

    return (
        <div className={classes.App}>
          <button
            onClick={()=>{
                this.setState({ showCockpit: false});
            }}
          >
            Remove Cockpit
          </button>
          {this.state.showCockpit ? (
          <Cockpit
            title = {this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
            />
          ) : null}
            {persons}
        </div>
    );
  }
}

export default App;
