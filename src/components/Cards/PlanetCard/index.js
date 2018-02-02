import React from 'react';
import Favorites from '../../../containers/Favorites';

const PlanetCard = ({ name, climate, population, residents}) => {

  return (
    <article className = 'card'>
      <h1>{ name }</h1>
      <p>climate: { climate }</p>
      <p>population: { population }</p>
      <p>residents: { residents } </p>
      <Favorites />
    </article>
  );
};

export default PlanetCard;
