import React, { Component } from 'react';
import Classes from './App.css';

import Person from './Person/Person';
import Users from './Users/Users';

class App extends Component {
  state = {
    Persons: [{
      name: 'Anita',
      company: 'Xoriant Solutions',
      id:1
    },{
      name: 'Harsh',
      company: 'CMC',
      id : 2  
    }],
    showName : false
  }
  switchButtonHandler = (newName) => {
    this.setState({
      Persons:[{
        name: 'Anita',
        company: 'Xoriant Solutions'  
      },{
        name: newName,
        company: 'TCS'
      }]
    })
  }
  clickNameHandler = (name) => {
    console.log("Click handler called");
    this.setState({
      Persons:[{
        name: 'Sw',
        company: 'Xoriant Solutions'  
      },{
        name: name,
        company: 'SAS'
      }]
    })
  }
  componentWillMount = () => {
    console.log('Component Mounted');
  }

  nameChangeHandler = (event,id) =>{

    const personIndex = this.state.Persons.findIndex(p => {
        return p.id === id;
    })
    console.log("In change handler");
    const person = [...this.state.Persons];
    person[personIndex].name = event.target.value;
    this.setState({
      Persons: person
    })
    console.log(this.state.Persons);

  }

  togglrHandler = () => {
    let show = this.state.showName;
    this.setState({
      showName : !show
    })
  }

  deleteHandler = (personIndex) => {
    //const person = this.state.Persons.slice();
    const person = [...this.state.Persons];
    person.splice(personIndex,1);
    this.setState({
      Persons : person
    });
    console.log(this.state.Persons);
  }

  render() {

    let person = null;
    let buttonClass = '';
    // let style = { 
    //   backgroundColor : 'green',
    //   color : 'white',
    //   font : 'inherit',
    //   border : '1px solid blue',
    //   padding : '8px',
    //   cursor : 'pointer',
    //   ':hover' :{
    //     backgroundColor : 'lightgreen'
    //   } 
    // }
    if(this.state.showName){
      person = (
        <div>
          {this.state.Persons.map((obj,index) => {
              return <Person name={obj.name} 
                company={obj.company} 
                key={obj.id}
                textChange={(event) => this.nameChangeHandler(event,obj.id)}
                click={() => this.deleteHandler(index)}/> 
          })}
        
        </div> 
        
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor : 'salmon'
      // }
      buttonClass = Classes.Red;
    }

    const Assignclasses = [];

    if(this.state.Persons.length <=1){
      Assignclasses.push(Classes.red);
    }
    
    if(this.state.Persons.length <=2){
      Assignclasses.push(Classes.bold);
    }

    return (
     
      <div className={Classes.App}>
      <p className={Assignclasses.join(' ')}>This is Working</p>
      <button className={buttonClass} onClick={this.togglrHandler}>Toggle Button</button>
        {person}
       
      </div>
      
    );
  }
}

export default App;
