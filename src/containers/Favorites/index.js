import React, { Component } from 'react';

const Favorites = ({ card, handleFavorites }) => {
  return (
    <button
      onClick = {() => handleFavorites(card) }
      className = 'favorite-button'>favorite</button>
  );
};

export default Favorites;
