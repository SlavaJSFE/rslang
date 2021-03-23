import React from 'react';

import GameButton from '../Button/Button';

import './WordsSet.scss';

export default function SetWords({
  words, handleClick, uu, game,
}) {
  return (
    <div className={`words-set__${game}`} ref={uu}>
      {words.map((el) => <GameButton key={el.id} text={el.word} handleClick={handleClick} />)}
    </div>
  );
}
