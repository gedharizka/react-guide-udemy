/* eslint-disable react/no-unescaped-entities */
import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hi i'm now learn react APp Understanding component</h1>
        <p>Ini bekerja</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>

      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,'Ini juga berhasil jalan ') );
    }
  }

export default App;
