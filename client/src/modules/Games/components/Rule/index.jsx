import React, { useState } from 'react';

import OptionsBtn from '../NextBtn/NextBtn';

export default function Rule({ setShowRule, setStartTimer, rule }) {
//   const [startTimer, setStartTimer] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setStartTimer(true);
    setShowRule(false);
  };
  return (
    <div className="game__rule">
      <div>
        {rule}
      </div>
      <OptionsBtn handleClick={handleClick} text="Далее" />
    </div>
  );
}
