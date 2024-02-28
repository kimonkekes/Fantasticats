import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState({ cats: users}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filteredCats = this.state.cats.filter(cat =>{
      return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if (this.state.cats.length === 0) {
      return <h1>Gathering cats. Please wait</h1>
    } else {
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
}

export default App;