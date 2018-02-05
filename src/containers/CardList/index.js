import React, { Component } from 'react';
import PeopleCard from '../../components/Cards/PeopleCard';
import PlanetCard from '../../components/Cards/PlanetCard';
import VehicleCard from '../../components/Cards/VehicleCard';
import './style.css';

class CardList extends Component {
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
    const newFavorites = [...favorites, card];
    if (favorites.includes(card)){
      return this.setState({ favorites: removeFavorite });
    }
    this.setState({ favorites: newFavorites });
  }

  renderCards = () => {
    if (this.props.type) {
      let cards = this.props.type.results.map( (card, index) => {

        if (this.props.type && this.props.title === 'people') {
          return (
            <PeopleCard
              key = {`${index}${card.name}`}
              card = { card }
              name = { card.name }
              birthYear = { card.birthYear }
              eyeColor = { card.eyeColor }
              skinColor = { card.skinColor }
              height = { card.height }
              mass = { card.mass }
              species = { card.species }
              homeworld = { card.homeworld }
              homeworldPopulation = { card.homeworldPopulation }
              handleFavorites = { this.handleFavorites }/>
          );
        }

        if (this.props.type && this.props.title === 'planets') {
          return (
            <PlanetCard
              key = {`${index}${card.name}`}
              card = { card }
              name = { card.name }
              climate = { card.climate }
              population = { card.population }
              residents = { card.residents }
              handleFavorites = { this.handleFavorites }/>
          );
        }

        if (this.props.type && this.props.title === 'vehicles') {
          return (
            <VehicleCard
              key = {`${index}${card.name}`}
              card = { card }
              name = { card.name }
              model = { card.model }
              vehicleClass = { card.vehicleClass }
              passengers = { card.passengers }
              manufacturer = { card.manufacturer }
              handleFavorites = { this.handleFavorites }/>
          );
        }

      });

      return (
        <section className = {`card-list card-list-${this.props.title}`}>
          { cards }
        </section>
      );
    } else {
      return ( <div>loading</div> );
    }
  }

  render() {
    console.log(this.state.favorites);
    return (
      <div className = 'card-list'>
        {this.renderCards()}
      </div>
    );
  }
}

export default CardList;
