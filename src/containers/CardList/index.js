import React, { Component } from 'react';
import PeopleCard from '../../components/Cards/PeopleCard';
import PlanetCard from '../../components/Cards/PlanetCard';
import VehicleCard from '../../components/Cards/VehicleCard';
import './style.css';

class CardList extends Component {

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
              favorite = { card.favorite }
              handleFavorites = { this.props.handleFavorites }/>
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
              favorite = { card.favorite }
              handleFavorites = { this.props.handleFavorites }/>
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
        <div>
          <img src = 'https://cdnb.artstation.com/p/assets/images/images/003/827/899/original/matthew-garwin-loading-vector.gif?1477723699' height='200px' width='200px'/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className = 'card-list'>
        {this.renderCards()}
      </div>
    );
  }
}

export default CardList;
