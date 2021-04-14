import React, { useState, useMemo } from 'react';

import Field from './Field';
import GameTimer from '../components/GameTimer';

import { getMemoryWords } from '../utils';
import './Memory.scss';
import { GAME_OVER } from '../constants';
import Display from '../components/Display';

export default function MemoryGame({ data }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timing, setTiming] = useState(true);
  const [score, setScore] = useState(0);
  // const [correctAnswers, setCorrectAnswers] = useState(0);
  // const [coeff, setCoeff] = useState(1);
  // const [popupOpen, setPopupOpen] = useState(false);
  // const [count, setCount] = useState(63);
  // const [gameOver, setGameOver] = useState(false);

  const cards = useMemo(() => getMemoryWords(data), [data]);

  return (
    <div className="game__memory-game">
      {!timing ? (
        <div>
          <div>{GAME_OVER}</div>
          <div>{`Your score is ${score}`}</div>
        </div>
      ) : (
        <div className="memory_game-field">
          <GameTimer setTiming={setTiming} />
          <Display text={score.toString()} />
          <div className="memory_cards-wrapper">
            <Field
              cards={cards}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              setScore={setScore}
            />
          </div>
        </div>
      )}
    </div>
  );
}
