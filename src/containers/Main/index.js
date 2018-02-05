import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../../components/Nav';
import Scroll from '../Scroll';
import People from '../People';
import Planets from '../Planets';
import Vehicles from '../Vehicles';
import Favorites from '../Favorites';

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({ favorites: [] });
  }

  handleFavorites = (card) => {
    const favorites = this.state.favorites;
    const removeFavorite = favorites.filter(cards => cards !== card);
    this.toggleFavorite(card);
    const newFavorites = [...favorites, card];
    if (favorites.includes(card)){
      return this.setState({ favorites: removeFavorite });
    }
    this.setState({ favorites: newFavorites });
  }

  toggleFavorite = (card) => {
    card.favorite = !card.favorite;
  }

  render() {
    return (
      <div>
        <Nav count = {this.state.favorites.length} />
        <Route path = '/' component = { Nav }/>
        <Route
          exact path = '/'
          component = { Scroll }/>
        <Route
          path = '/people'
          render={ () => (
            <People handleFavorites = { this.handleFavorites }/>) }/>
        <Route
          path = '/planets'
          render={ () => (
            <Planets handleFavorites = { this.handleFavorites }/>) }/>
        <Route
          path = '/vehicles'
          render={ () => (
            <Vehicles handleFavorites = { this.handleFavorites }/>) }/>
        <Route
          path = '/favorites'
          render={ () => (
            <Favorites
              title = { 'favorites' }
              handleFavorites = { this.handleFavorites }
              type = { this.state.favorites }/>) }/>
      </div>
    );
  }
}

export default Main;
