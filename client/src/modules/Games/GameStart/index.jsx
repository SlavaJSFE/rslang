import React, { useState, useEffect } from 'react';

import { Container } from '@material-ui/core';
import Timer from '../components/Timer';
import LevelForm from '../components/LevelForm';
import Rule from '../components/Rule';
import NextBtn from '../components/NextBtn/NextBtn';

export default function GameStart({ rule, setStart, wordsNumber }) {
  const toShow = wordsNumber === 0;
  const [startTimer, setStartTimer] = useState(false);
  const [showRule, setShowRule] = useState(!toShow);
  const [showform, setShowForm] = useState(toShow);

  const handleFormBtnClick = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowRule(true);
  };

  useEffect(() => {
    const start = !startTimer && !showRule && !showform && wordsNumber;
    if (start) setStart(true);
  }, [startTimer]);

  return (
    <Container>
      {showform && <LevelForm />}
      {showform && <NextBtn handleClick={handleFormBtnClick} text="Далее" />}
      {showRule && <Rule rule={rule} setShowRule={setShowRule} setStartTimer={setStartTimer} />}
      {!showRule && startTimer && <Timer setStartTimer={setStartTimer} />}
    </Container>
  );
}
