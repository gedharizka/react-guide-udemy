/* eslint-disable react/no-unescaped-entities */
import React,{Component} from 'react';
import './App.css';
// import style from 'styled-components';
import Person from '../components/Persons/Person/Person';
import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';
// import classes from '*.module.css';

const StyleButton = styled.button`
background-color:${props => props.alt ? 'red' : 'green'};
color:white;
font:inherit;
border:1px solid blue;
padding: 8px;
cursor:pointer;

&:hover{
  background-color:${props => props.alt ? 'salmon' : 'lightgreen'};
  color:black;
}
`;
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
    // const style= {
    //   backgroundColor:'green',
    //   color:'white',
    //   font:'inherit',
    //   border:'1px solid blue',
    //   padding: '8px',
    //   cursor:'pointer',
    //   ':hover':{
    //     backgroundColor:'lightgreen',
    //     color:'black'
    //   }
    // };

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
      // style.backgroundColor='red';
      // style[':hover']={
      //   backgroundColor:'salmon',
      //   color:'black'
      // };
    }

    const classes= [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi i'm now learn react APp Understanding component</h1>
        <p className={classes.join(' ')}>Ini bekerja</p>
        <StyleButton
           onClick={this.togglePersonHandler}
           alt={this.state.showPersons}>toggle persons</StyleButton>
        {persons}
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Ini juga berhasil jalan ') );
    }
  }

export default App;
