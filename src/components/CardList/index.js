import React, { Component } from 'react';
import PeopleCard from '../Cards/PeopleCard';
import PlanetCard from '../Cards/PlanetCard';
import VehicleCard from '../Cards/VehicleCard';

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

  render() {
    console.log(this.state.favorites);
    if (this.props.type && this.props.title === 'people') {
      let cards = this.props.type.results.map( (card, index) => {
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
            homeworld = { card.homeworld }
            homeworldPopulation = { card.homeworldPopulation }
            handleFavorites = { this.handleFavorites }/>
        );
      });

      return (
        <section className = {`card-list-${this.props.title}`}>
          { cards }
        </section>
      );
    }

    if (this.props.type && this.props.title === 'planets') {
      let cards = this.props.type.results.map( (card, index) => {
        return (
          <PlanetCard
            key = {`${index}${card.name}`}
            name = { card.name }
            climate = { card.climate }
            population = { card.population }
            residents = { card.residents }/>
        );
      });

      return (
        <section className = {`card-list-${this.props.title}`}>
          { cards }
        </section>
      );
    }

    if (this.props.type && this.props.title === 'vehicles') {
      let cards = this.props.type.results.map( (card, index) => {
        console.log(card);
        return (
          <VehicleCard
            key = {`${index}${card.name}`}
            name = { card.name }
            model = { card.model }
            vehicleClass = { card.vehicleClass }
            passengers = { card.passengers }
            manufacturer = { card.manufacturer }/>
        );
      });

      return (
        <section className = {`card-list-${this.props.title}`}>
          { cards }
        </section>
      );
    }

    return (
      <div>loading</div>
    );
  }
}

export default CardList;
