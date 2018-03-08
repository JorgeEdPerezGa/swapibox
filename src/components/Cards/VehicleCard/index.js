import React from 'react';
import FavoriteButton from '../../FavoriteButton';
import PropTypes from 'prop-types';
import './style.css';

const VehicleCard = ({ card, name, model, vehicleClass, passengers, manufacturer, favorite, handleFavorites }) => {
  const favortieClass = favorite ? 'favorited' : '';

  return (
    <article className = 'card'>
      <FavoriteButton
        favortieClass = { favortieClass }
        handleFavorites = { handleFavorites }
        card = {card}/>
      <h1 className = 'card-title card-title-vehicle'>{ name }</h1>
      <p>model: { model }</p>
      <p>class: { vehicleClass }</p>
      <p>passenger capacity: { passengers }</p>
      <p>manufacturer: { manufacturer }</p>
    </article>
  );
};

VehicleCard.propTypes = {
  handleFavorites: PropTypes.func,
  card: PropTypes.object,
  name: PropTypes.string,
  vehicleClass: PropTypes.string,
  model: PropTypes.string,
  passengers: PropTypes.string,
  manufacturer: PropTypes.string,
  favorite: PropTypes.string
};

export default VehicleCard;
