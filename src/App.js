/* eslint-disable react/no-unescaped-entities */
import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons :[
      {name :"max", age: 9},
      {name: "Wellber", age:8},
      {name: "Swazer", age:7}
    ],
    otherState :'ini dari state lain',
    showPersons : false
  }

  switchNameHandler =(newName)=>{
    // dont do this
    // this.state.persons[0].name='gedha';
    this.setState({
      persons :[
        {name :newName, age: 10},
        {name: "Rizka", age:20},
        {name: "Ramadhan", age:39}
      ]
    })
    
  }

  nameChangeHandler=(event)=>{
    this.setState({
      persons :[
        {name :"max", age: 99},
        {name: event.target.value , age:88},
        {name: "Ramadhan", age:77}
      ]
    })
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  render(){
    const style= {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    let persons = null;

    if (this.state.showPersons === true){
      persons=(
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name}
              age ={person.age}/>
          })}
            
          </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi i'm now learn react APp Understanding component</h1>
        <p>Ini bekerja</p>
        <button
          style={style}
           onClick={this.togglePersonHandler}>toggle persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Ini juga berhasil jalan ') );
    }
  }

export default App;
