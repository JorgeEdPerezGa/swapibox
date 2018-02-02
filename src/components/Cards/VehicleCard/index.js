import React from 'react';

const VehicleCard = ({ name, model, vehicleClass, passengers, manufacturer }) => {

  return (
    <article className = 'card'>
      <h1>{ name }</h1>
      <p>model: { model }</p>
      <p>class: { vehicleClass }</p>
      <p>passenger capacity: { passengers }</p>
      <p>manufacturer: { manufacturer }</p>
    </article>
  );
};

export default VehicleCard;
