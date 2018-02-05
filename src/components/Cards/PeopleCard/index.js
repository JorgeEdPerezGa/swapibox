import React from 'react';
import FavoriteButton from '../../FavoriteButton';
import PropTypes from 'prop-types';
import './style.css';

const PeopleCard = ({ card, name, birthYear, eyeColor, height, mass, skinColor, species, homeworld, homeworldPopulation, favorite, handleFavorites }) => {
  const favortieClass = favorite ? 'favorited' : '';
  return (
    <article className = 'card'>
      <FavoriteButton
        favortieClass = { favortieClass }
        handleFavorites = { handleFavorites }
        card = { card }/>
      <h1 className = 'card-title card-title-person'>{ name }</h1>
      <p>birth year: { birthYear }</p>
      <p>eye color: { eyeColor }</p>
      <p>height: { height }</p>
      <p>mass: { mass }</p>
      <p>skin color: { skinColor }</p>
      <p>species: { species }</p>
      <p>homeworld: { homeworld }</p>
      <p>homeworld population: { homeworldPopulation }</p>
    </article>
  );
};

PeopleCard.propTypes = {
  handleFavorites: PropTypes.func,
  card: PropTypes.object,
  name: PropTypes.string,
  birthYear: PropTypes.string,
  eyeColor: PropTypes.string,
  height: PropTypes.string,
  residents: PropTypes.string,
  mass: PropTypes.string,
  skinColor: PropTypes.string,
  species: PropTypes.string,
  homeworld: PropTypes.string,
  homeworldPopulation: PropTypes.string,
  favorite: PropTypes.string
};

export default PeopleCard;
