/* eslint-disable react/no-unescaped-entities */
import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons :[
      {id:'qwer1',name :"max", age: 9},
      {id:'asdf2',name: "Wellber", age:8},
      {id:'zxcv3',name: "Swazer", age:7}
    ],
    otherState :'ini dari state lain',
    showPersons : false
  }

  deleteHandler=(personIndex)=>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  nameChangeHandler=(event, id )=>{

    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]};
    
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons:persons })
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  render(){
    const style= {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    let persons = null;

    if (this.state.showPersons === true){
      persons=(
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click = {()=>this.deleteHandler(index)}
              name={person.name}
              age ={person.age}
              key ={person.id}
              changed={(event)=>this.nameChangeHandler(event, person.id)} />
          })}
            
          </div> 
      );
      style.backgroundColor='red';
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
