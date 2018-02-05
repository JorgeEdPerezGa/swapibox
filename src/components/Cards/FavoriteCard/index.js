import React from 'react';
import FavoriteButton from '../../FavoriteButton';
import PropTypes from 'prop-types';
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

FavoriteCard.propTypes = {
  handleFavorites: PropTypes.func,
  name: PropTypes.string,
  species: PropTypes.string,
  homeworld: PropTypes.string,
  population: PropTypes.string,
  residents: PropTypes.string,
  climate: PropTypes.string,
  model: PropTypes.string,
  vehicleClass: PropTypes.string,
  passengers: PropTypes.string
};

export default FavoriteCard;
