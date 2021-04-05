import React, { useState, useMemo, useEffect } from 'react';

import Field from './Field';
import GameTimer from '../components/GameTimer'

import { getMemoryWords } from '../utils';
import './Memory.scss';

export default function MemoryGame({ data }) {
  // const [score, setScore] = useState(0);
  const [isPlaying, setIsplaying] = useState(false);
  const [timing, setTiming] = useState(true);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [coeff, setCoeff] = useState(1);
  // const [popupOpen, setPopupOpen] = useState(false);
  // const [count, setCount] = useState(63);
  // const [gameOver, setGameOver] = useState(false);

  const cards = useMemo(() => getMemoryWords(data), [data]);

  useEffect(() => {
    if (!timing) {
      console.log(timing);
    }
  }, [timing]);

  return (
    <div className="game__memory-game">
      <GameTimer setTiming={setTiming} />
      <Field
        cards={cards}
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
      />
    </div>
  );
}
