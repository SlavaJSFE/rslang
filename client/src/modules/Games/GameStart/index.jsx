import React, { useState, useEffect } from 'react';

import { Container } from '@material-ui/core';
import Timer from '../components/Timer';
import LevelForm from '../components/LevelForm';
import Rule from '../components/Rule';
import NextBtn from '../components/NextBtn/NextBtn';
import getAppropriateStyles from '../utils/getAppropriateStyles';

export default function GameStart({
  type,
  rule,
  setStart,
  wordsNumber,
}) {
  const toShow = wordsNumber === 0;
  const [startTimer, setStartTimer] = useState(false);
  const [showRule, setShowRule] = useState(!toShow);
  const [showForm, setShowForm] = useState(toShow);
  const classes = getAppropriateStyles(type);

  const handleFormBtnClick = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowRule(true);
  };

  useEffect(() => {
    const start = !startTimer && !showRule && !showForm && wordsNumber;
    if (start) setStart(true);
  }, [startTimer]);

  return (
    <div className={classes.root}>
      <Container>
        {showForm && <LevelForm />}
        {showForm && <NextBtn handleClick={handleFormBtnClick} text="Далее" />}
        {showRule && (
          <Rule
            rule={rule}
            setShowRule={setShowRule}
            setStartTimer={setStartTimer}
          />
        )}
        {!showRule && startTimer && <Timer setStartTimer={setStartTimer} />}
      </Container>
    </div>
  );
}
