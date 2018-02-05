import React, { Component } from 'react';
import './style.css';

const FavoriteButton = ({ card, handleFavorites }) => {
  return (
    <button
      onClick = {() => handleFavorites(card) }
      className = 'favorite-button'></button>
  );
};

export default FavoriteButton;
