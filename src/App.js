// @ts-nocheck
import React from 'react';
import './App.css';
import { Cardlist } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      Heros:[],
      searchField:""

    }
  }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(users=>{this.setState({Heros:users})})
  }


  handleChange = e =>{
    this.setState({searchField:e.target.value})
  }

  render(){
    const {searchField,Heros} = this.state
    const filterHeros = Heros.filter(hero=>
      hero.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monster robolex</h1>
        <SearchBox OnChangeEvent={this.handleChange} placeholder="Search monster"/>
        <Cardlist Heros={filterHeros}/>
      </div>
    );
  }
}

export default App; 
