import React from 'react';
import PeopleCard from '../Cards/PeopleCard';

const CardList = ({ title, type }) => {

  if (type) {
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
  return (
    <div>loading</div>
  );
};

export default CardList;
