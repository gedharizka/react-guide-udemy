/* eslint-disable react/no-unescaped-entities */
import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons :[
      {name :"max", age: 11},
      {name: "Wellber", age:20},
      {name: "Swazer", age:39}
    ]
  }

  switchNameHandler =()=>{
    console.log('clicked!');
    
  }

  render(){
    return (
      <div className="App">
        <h1>Hi i'm now learn react APp Understanding component</h1>
        <p>Ini bekerja</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies : Football</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>

      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Ini juga berhasil jalan ') );
    }
  }

export default App;
