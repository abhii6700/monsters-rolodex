import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import { render } from 'react-dom';
import CardList from './component/card-list/card-list.component'
import SearchBox from './component/search-box/search-box.component'

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      SearchField : ''
      
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }))
  }
  render(){
    const {monsters, SearchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(SearchField.toLowerCase()));
    return(
      
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder='Search Monsters'
        handlechange={e => this.setState({SearchField: e.target.value})}
        />
        <CardList monsters= {filteredMonsters}/>
      
    </div>
    )
   
  }
}

export default App;
