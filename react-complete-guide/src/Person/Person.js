import React from 'react';

import './Person.css';

// person is a function instead of a class, so we don't import or extend Component
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;
