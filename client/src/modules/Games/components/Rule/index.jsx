import React from 'react';
import './rule.scss';
import { Box } from '@material-ui/core';
import OptionsBtn from '../NextBtn/NextBtn';

export default function Rule({ setShowRule, setStartTimer, rule }) {
  const handleClick = (e) => {
    e.preventDefault();
    setStartTimer(true);
    setShowRule(false);
  };

  return (
    <Box className="game__rule">
      <h2>Правила игры:</h2>
      <p className="game__rule-text">{rule}</p>
      <OptionsBtn handleClick={handleClick} text="Далее" />
    </Box>
  );
}
