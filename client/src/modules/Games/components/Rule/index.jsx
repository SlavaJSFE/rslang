import React from 'react';

import './rule.scss';
import OptionsBtn from '../NextBtn/NextBtn';

export default function Rule({ setShowRule, setStartTimer, rule }) {
  const handleClick = (e) => {
    e.preventDefault();
    setStartTimer(true);
    setShowRule(false);
  };

  return (
    <div className="game__rule">
      <div className="game__rule-text">{rule}</div>
      <OptionsBtn handleClick={handleClick} text="Далее" />
    </div>
  );
}
