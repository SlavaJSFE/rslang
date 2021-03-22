import React from 'react';

import GameButton from './Button';

import './WordsSet.scss';

export default function SetWords({ words, handleClick, uu }) {
  return (
    <div className="words__set" ref={uu}>
      {words.map((el) => <GameButton key={el.id} text={el.word} handleClick={handleClick} />)}
    </div>
  );
}
