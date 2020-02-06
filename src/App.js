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

    return (
      <div className="App">
        <h1>Hi i'm now learn react APp Understanding component</h1>
        <p>Ini bekerja</p>
        <button
          style={style}
           onClick={this.togglePersonHandler}>toggle persons</button>

        {this.state.showPersons === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}>
            </Person>
            <Person 
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'MAX !!!')}
              changed={this.nameChangeHandler}>My Hobbies : Football</Person>
            <Person 
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}>
            </Person>
          </div> : null
        }

      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Ini juga berhasil jalan ') );
    }
  }

export default App;
