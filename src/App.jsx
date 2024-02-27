import React, { Component } from "react";
import CardList from "./CardList";
import { cats } from "./cats";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: cats,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value}, 
    () => console.log(this.state.searchfield))
  }




  render() {
    const filteredCats = this.state.cats.filter(cat =>{
      return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <>
      <div className='tc'>
        <h1 className="f-headline">FantastiCATS</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList cats={filteredCats} />
      </div>
      </>
    )
  }
}

export default App;