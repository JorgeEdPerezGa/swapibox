import React from 'react';

const PlanetCard = ({ name, climate, population, residents}) => {

  return (
    <article className = 'card'>
      <h1>{ name }</h1>
      <p>climate: { climate }</p>
      <p>population: { population }</p>
      <p>residents: { residents } </p>
    </article>
  );
};

export default PlanetCard;
