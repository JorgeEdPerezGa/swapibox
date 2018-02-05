import React from 'react';
import FavoriteButton from '../../FavoriteButton';
import './style.css';

const PlanetCard = ({ card, name, climate, population, residents, handleFavorites }) => {

  return (
    <article className = 'card'>
      <FavoriteButton
        handleFavorites = { handleFavorites }
        card = { card }/>
      <h1 className = 'card-title card-title-planet'>{ name }</h1>
      <p>climate: { climate }</p>
      <p>population: { population }</p>
      <p>residents: { residents } </p>
    </article>
  );
};

export default PlanetCard;
