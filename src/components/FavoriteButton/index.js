import React, { Component } from 'react';
import './style.css';

const FavoriteButton = ({ card, handleFavorites, favortieClass }) => {
  return (
    <button
      onClick = {() => handleFavorites(card) }
      className = {`favorite-button ${favortieClass}`}></button>
  );
};

export default FavoriteButton;
