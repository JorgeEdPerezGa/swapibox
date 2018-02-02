import React from 'react';
import PeopleCard from '../Cards/PeopleCard';
import PlanetCard from '../Cards/PlanetCard';
import VehicleCard from '../Cards/VehicleCard';

const CardList = ({ title, type }) => {

  if (type && title === 'people') {
    let cards = type.results.map( (card, index) => {
      return (
        <PeopleCard
          key = {`${index}${card.name}`}
          name = { card.name }
          birthYear = { card.birthYear }
          eyeColor = { card.eyeColor }
          skinColor = { card.skinColor }
          height = { card.height }
          mass = { card.mass }
          homeworld = { card.homeworld }
          homeworldPopulation = { card.homeworldPopulation }/>
      );
    });

    return (
      <section className = {`card-list-${title}`}>
        { cards }
      </section>
    );
  }

  if (type && title === 'planets') {
    let cards = type.results.map( (card, index) => {
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
      <section className = {`card-list-${title}`}>
        { cards }
      </section>
    );
  }

  if (type && title === 'vehicles') {
    let cards = type.results.map( (card, index) => {
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
      <section className = {`card-list-${title}`}>
        { cards }
      </section>
    );
  }

  return (
    <div>loading</div>
  );
};

export default CardList;
