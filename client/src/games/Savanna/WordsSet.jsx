import React from 'react';

import GameButton from './Button';

import './WordsSet.scss';

export default function SetWords({ words, handleClick }) {
  return (
    <div className="words__set">
      {words.map((el) => <GameButton key={el.id} text={el.word} handleClick={handleClick} />)}
    </div>
  );
}
