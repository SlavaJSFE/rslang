import React from 'react';

import GameButton from '../Button/Button';

import './WordsSet.scss';

export default function SetWords({
  words, handleClick, container, game,
}) {
  return (
    <div className={`words-set__${game}`} ref={container}>
      {words.map((el) => (
        <GameButton
          key={el.id}
          text={el.wordTranslate}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
