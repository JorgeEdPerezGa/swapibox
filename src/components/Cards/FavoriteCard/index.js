import React from 'react';
import FavoriteButton from '../../FavoriteButton';
import './style.css';

const FavoriteCard = ({ card, name, species, homeworld, homeworldPopulation, climate, population, residents, model, vehicleClass, passengers, favorite, handleFavorites }) => {
  const favortieClass = favorite ? 'favorited' : '';
  return (
    <article className = 'card'>
      <FavoriteButton
        favortieClass = { favortieClass }
        handleFavorites = { handleFavorites }
        card = { card }/>
      <h1 className = 'card-title card-title-favorite'>{ name }</h1>
      <p>{ species }</p>
      <p>{ homeworld }</p>
      <p>{ homeworldPopulation }</p>
      <p>{ climate }</p>
      <p>{ population }</p>
      <p>{ residents }</p>
      <p>{ model }</p>
      <p>{ vehicleClass }</p>
      <p>{ passengers }</p>
    </article>
  );
};

export default FavoriteCard;
