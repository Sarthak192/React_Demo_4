import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons :[
      {id: 1, name: "Sarthak", age: 22},
      {id: 2, name: "Somil", age: 23},
      {id: 3, name: "Sarita", age: 24}
    ],
    Hobby: "cricket",
    showPersons: false
  }

  deletePersonsHandler = (index, id)=>{
    //This is not the best way as we are just copying the refence not the data
    //const persons = this.state.persons
    //This is the netter way it copies whole datainto persons
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(index,1)
    this.setState({persons:persons})
  }

  nameChangeHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value  
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons : persons
    })
  }

  toggleHandler = ()=>{
    const condition = this.state.showPersons
    this.setState({showPersons: !condition})
  }

  style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  render(){
    let persons = null
    if(this.state.showPersons){
    persons = (
      <div>
        {this.state.persons.map((person,index)=>{
          return <Person 
            key = {person.id}
            clickMe = {()=>this.deletePersonsHandler(index)}  
            name = {person.name} 
            age = {person.age}
            changed = {(event)=>this.nameChangeHandler(event, person.id)}/>          
        })}
      </div>
  )
    }

  return (
    <div className="App">
      <h1>Angular-Demo-4</h1>
      <h1>I am a React App</h1>
      <p>This is really working</p>
      <button style = {this.style} onClick={this.toggleHandler}>Toggle</button>
      {persons}
    </div>

    // React.createElement('div', {className: 'App'}, React.createElement('h1', null,'I am a React App'))
  );
}
}

export default App;


