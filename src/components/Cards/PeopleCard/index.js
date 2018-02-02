import React from 'react';

const PeopleCard = ({ name, birthYear, eyeColor, height, mass, skinColor, homeworld, homeworldPopulation }) => {
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
    </article>
  );
};

export default PeopleCard;
