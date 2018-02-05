import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const FavoriteButton = ({ card, handleFavorites, favortieClass }) => {
  return (
    <button
      onClick = {() => handleFavorites(card) }
      className = {`favorite-button ${favortieClass}`}></button>
  );
};

FavoriteButton.propTypes = {
  card: PropTypes.object,
  handleFavorites: PropTypes.func,
  favortieClass: PropTypes.string
};

export default FavoriteButton;
