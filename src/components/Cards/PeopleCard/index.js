import React from 'react';
import Favorites from '../../../containers/Favorites';

const PeopleCard = ({ card, name, birthYear, eyeColor, height, mass, skinColor, homeworld, homeworldPopulation, handleFavorites }) => {
  return (
    <article className = 'card'>
      <h1>{ name }</h1>
      <p>birth year: { birthYear }</p>
      <p>eye color: { eyeColor }</p>
      <p>height: { height }</p>
      <p>mass: { mass }</p>
      <p>skin color: { skinColor }</p>
      <p>homeworld: { homeworld }</p>
      <p>homeworld population: { homeworldPopulation }</p>
      <Favorites
        handleFavorites = { handleFavorites }
        card = { card }/>
    </article>
  );
};

export default PeopleCard;
