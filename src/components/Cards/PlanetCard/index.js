import React from 'react';
import FavoriteButton from '../../FavoriteButton';
import PropTypes from 'prop-types';
import './style.css';

const PlanetCard = ({ card, name, climate, population, residents, favorite, handleFavorites }) => {
  const favortieClass = favorite ? 'favorited' : '';

  return (
    <article className = 'card'>
      <FavoriteButton
        favortieClass = { favortieClass }
        handleFavorites = { handleFavorites }
        card = { card }/>
      <h1 className = 'card-title card-title-planet'>{ name }</h1>
      <p>climate: { climate }</p>
      <p>population: { population }</p>
      <p>residents: { residents } </p>
    </article>
  );
};

PlanetCard.propTypes = {
  handleFavorites: PropTypes.func,
  card: PropTypes.object,
  name: PropTypes.string,
  climate: PropTypes.string,
  population: PropTypes.string,
  residents: PropTypes.string,
  favorite: PropTypes.string
};

export default PlanetCard;
