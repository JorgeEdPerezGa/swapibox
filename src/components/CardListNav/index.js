import React from 'react';

const CardListNav = ({ type, fetchFirst, handleFetch, fetchLast }) => {
  const fetch = type;
  const disabledPrevious = !fetch || !fetch.previous;
  const disabledNext = !fetch || !fetch.next;

  return (
    <div>
      <button
        onClick = { () => fetchFirst() }
        disabled = { disabledPrevious }>{'<<'}</button>
      <button
        onClick = { () => handleFetch(fetch.previous) }
        disabled = { disabledPrevious }>{'<'}</button>
      <button
        onClick = { () => handleFetch(fetch.next) }
        disabled = { disabledNext }>{'>'}</button>
      <button
        onClick = { () => fetchLast() }
        disabled = { disabledNext }>{'>>'}</button>
    </div>
  );
};

export default CardListNav;
