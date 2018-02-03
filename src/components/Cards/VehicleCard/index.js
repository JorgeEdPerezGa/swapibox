import React from 'react';
import FavoriteButton from '../../FavoriteButton';

const VehicleCard = ({ card, name, model, vehicleClass, passengers, manufacturer, handleFavorites }) => {

  return (
    <article className = 'card'>
      <h1>{ name }</h1>
      <p>model: { model }</p>
      <p>class: { vehicleClass }</p>
      <p>passenger capacity: { passengers }</p>
      <p>manufacturer: { manufacturer }</p>
      <FavoriteButton
        handleFavorites = { handleFavorites }
        card = {card}/>
    </article>
  );
};

export default VehicleCard;
