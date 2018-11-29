import React from 'react';
import Classes from './Person.css';

const person = (props) => {
  
    return(
        <div className={Classes.Person} >
            <h1> My Name is {props.name}</h1>
            <p onClick={props.click}>My Company {props.company} </p>
            <input type="text" onChange={props.textChange} id="text1" value={props.name}></input>
            <button onClick={props.clickName}>Switch Name</button>
        </div>
    )
};

export default person;