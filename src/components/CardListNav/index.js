import React from 'react';
import style from './style.css';
import PropTypes from 'prop-types';

const CardListNav = ({ type, fetchFirst, handleFetch, fetchLast }) => {
  const fetch = type;
  const disabledPrevious = !fetch || !fetch.previous;
  const disabledNext = !fetch || !fetch.next;

  return (
    <div>
      <button
        className = 'card-list-nav-button first-button'
        onClick = { () => fetchFirst() }
        disabled = { disabledPrevious }></button>
      <button
        className = 'card-list-nav-button previous-button'
        onClick = { () => handleFetch(fetch.previous) }
        disabled = { disabledPrevious }></button>
      <button
        className = 'card-list-nav-button next-button'
        onClick = { () => handleFetch(fetch.next) }
        disabled = { disabledNext }></button>
      <button
        className = 'card-list-nav-button last-button'
        onClick = { () => fetchLast() }
        disabled = { disabledNext }></button>
    </div>
  );
};

CardListNav.propTypes = {
  type: PropTypes.object,
  fetchFirst: PropTypes.func,
  handleFetch: PropTypes.func,
  fetchLast: PropTypes.func
};

export default CardListNav;
