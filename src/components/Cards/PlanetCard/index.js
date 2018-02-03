import React from 'react';
import Favorites from '../../../containers/Favorites';

const PlanetCard = ({ card, name, climate, population, residents, handleFavorites }) => {

  return (
    <article className = 'card'>
      <h1>{ name }</h1>
      <p>climate: { climate }</p>
      <p>population: { population }</p>
      <p>residents: { residents } </p>
      <Favorites
        handleFavorites = { handleFavorites }
        card = { card }/>
    </article>
  );
};

export default PlanetCard;
