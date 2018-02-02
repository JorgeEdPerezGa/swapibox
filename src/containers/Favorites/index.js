import React, { Component } from 'react';

class Favorites extends Component {
  constructor(){
    super();
    this.state = {};
  }

  handleFavorites = () => {
    console.log('favorite');
  }

  render(){
    return (
      <button
        onClick = {() => this.handleFavorites() }
        className = 'favorite-button'>favorite</button>
    );
  }
}

export default Favorites;
