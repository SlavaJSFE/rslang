/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import './index.scss';

const Card = ({
  title, frontRotate, backRotate, handleClick,
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div className="card" onClick={handleClick}>
    <div className={`card__front ${frontRotate}`} id="card">
      <div className="card__text">{title}</div>

    </div>
    <div className={`card__back ${backRotate}`}>
      {/* <img src={cardBG} alt="bg" id="card" /> */}
    </div>
  </div>
);

export default Card;
