import React, { Component } from 'react';

const FavoriteButton = ({ card, handleFavorites }) => {
  return (
    <button
      onClick = {() => handleFavorites(card) }
      className = 'favorite-button'>favorite</button>
  );
};

export default FavoriteButton;
