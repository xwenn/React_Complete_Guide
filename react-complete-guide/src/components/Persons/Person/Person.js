import React from 'react';

import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

// person is a function instead of a class, so we don't import or extend Component
const person = (props) => {
  return (
    <WithClass classes={classes.Person}>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </WithClass>
  )
};

export default person;
