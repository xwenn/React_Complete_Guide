import React, { Component } from 'react';
// Tranforms the CSS code to an object that we can use
import classes from './App.css';
// Component name should be capitalized because in JSX all elements starting
// with lowercase characteres are reserved for the native HTML elements.
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 18 },
      { id: 'asdf11', name: 'Stephanie', age: 18 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // React calls this method to show something to the screen.
  // This method has an important job - returning/rendering some html code to the DOM.
  // You can do other things too, like reaching out to the internet, doing
  // some calculation, listening to events etc.
  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
