import React, { Component } from 'react';
import xivAPI from '../../api/xiv-api';

import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResult from '../../components/SearchResult/SearchResult';

import './ItemSearchPage.css';

class ItemSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      results: []
    };
  }

  handleItemSearch = (event) => {
    event.preventDefault();

    xivAPI.itemSearch(event.target.elements[0].value)
      .then( itemResults => this.setState({ results: itemResults.Results }))
      .catch( error => console.log(error) )
  }

  renderSearchResults = () => {
    if(this.state.results.length > 0){
      return this.state.results.map( (result, index) => {
        return <SearchResult key={index+1} result={result} />
      })
    }
  }



  render() {
    return (
      <div id="search-page">
        <div className="top">
          <label htmlFor="itemSearch">Search for an item</label>
          <SearchForm form-type='itemSearch' handler={this.handleItemSearch} id='itemSearch'/>
        </div>
     

        <div className="search-results">
          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

export default ItemSearchPage;