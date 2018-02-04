import React from 'react';
import FavoriteButton from '../../FavoriteButton';

const PeopleCard = ({ card, name, birthYear, eyeColor, height, mass, skinColor, species, homeworld, homeworldPopulation, handleFavorites }) => {
  return (
    <article className = 'card'>
      <h1>{ name }</h1>
      <p>birth year: { birthYear }</p>
      <p>eye color: { eyeColor }</p>
      <p>height: { height }</p>
      <p>mass: { mass }</p>
      <p>skin color: { skinColor }</p>
      <p>species: { species }</p>
      <p>homeworld: { homeworld }</p>
      <p>homeworld population: { homeworldPopulation }</p>
      <FavoriteButton
        handleFavorites = { handleFavorites }
        card = { card }/>
    </article>
  );
};

export default PeopleCard;
