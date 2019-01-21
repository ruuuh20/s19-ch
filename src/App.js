import React, { Component } from 'react';
import SearchBar from './components/SearchBar'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: [],
      results: [],
      favourites: []

    }
  }

  componentDidMount() {
    fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
      .then(res => res.json())
      .then(data => {
        this.setState({
          apiData: data
        })
      })
  }

  handleResults = (searchValue) => {
    const lowercased = searchValue.toLowerCase();
    if (searchValue === "") {
      //if blank search
      this.setState({
        results: []
      })
    } else {


    const filteredResults = this.state.apiData.filter(result => {
          return result.title.includes(lowercased) || result.keywords.includes(lowercased);
        })
    this.setState({
      results: filteredResults
    })
    console.log(lowercased)
    console.log(filteredResults)
  }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Toronto Waste Lookup</h1>
        </header>
        <SearchBar handleResults={this.handleResults}/>
        <div>

        </div>
        results/list
        favourites
      </div>
    );
  }
}

export default App;
