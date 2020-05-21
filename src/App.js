import React , { Component } from 'react';
import {CardList} from "./components/card-list/card-list.component"
import { SearchBox } from "./components/search-box/search-box.components";

import "./App.css"

class App extends Component  {
    constructor () {
      super()

      this.state = {
        "monsters": [],
        "searchFields": ""
      }
    }
  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json() )
    .then(users => this.setState({"monsters": users}))
  }
  handelChange = (e) => {
    this.setState({searchFields: e.target.value})
  }

  render () {
    const { monsters, searchFields } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFields.toLowerCase())
    )
    return (
      <div className="App">
      <h1> Monsters Rolodex</h1>
      <SearchBox 
        placeHolder='Search Monster'
        handelChange={this.handelChange}
      />
      <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
