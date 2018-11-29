import React from 'react';

import Person from './Person/Person'

const Persons = (props) => props.state.Persons.map((obj,index) => {
        return <Person name={obj.name} 
          company={obj.company} 
          key={obj.id}
          textChange={(event) => props.textChange(event,obj.id)}
          click={() => props.clickDelete(index)}/> 
    })


export default Persons;