import React, { Component } from 'react';
import Helper from '../../helper';
import CardListNav from '../../components/CardListNav';
import CardList from '../CardList';
import FavoriteCard from '../../components/Cards/FavoriteCard';
import './style.css';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {};
  }

  displayFavorites = () => {
    if (this.props.type.length > 0) {
      let cards = this.props.type.map( (card, index) => {

        if (this.props.type && this.props.title === 'favorites') {
          return (
            <FavoriteCard
              key = {`${index}${card.name}`}
              card = { card }
              name = { card.name }
              height = { card.height }
              mass = { card.mass }
              species = { card.species }
              homeworld = { card.homeworld }
              homeworldPopulation = { card.homeworldPopulation }
              climate = { card.climate }
              population = { card.population }
              residents = { card.residents }
              model = { card.model }
              vehicleClass = { card.vehicleClass }
              passengers = { card.passengers }
              manufacturer = { card.manufacturer }
              favorite = { card.favorite }
              handleFavorites = { this.props.handleFavorites }/>
          );
        }
      });

      return (
        <section className = {`card-list card-list-${this.props.title}`}>
          { cards }
        </section>
      );
    } else {
      return (
        <h5>no favorites</h5>
      );
    }
  }

  render() {
    return (
      <div>
        { this.displayFavorites() }
      </div>
    );
  }
}

export default Favorites;
