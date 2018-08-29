import React from 'react';
import Radium from 'radium';

import './Person.css';

// person is a function instead of a class, so we don't import or extend Component
const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default Radium(person);
