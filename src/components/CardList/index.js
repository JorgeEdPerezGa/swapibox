import React from 'react';
import Card from '../Card';

const CardList = ({ title, type }) => {
  console.log(type);

  return (
    <section className = {`card-list-${title}`}>
      CARDLIST
      <Card />
    </section>
  );
};

export default CardList;
