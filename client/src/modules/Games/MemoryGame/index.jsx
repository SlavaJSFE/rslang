import React, { useState, useMemo } from 'react';
import { Box } from '@material-ui/core';
import Field from './Field';
import GameTimer from '../components/GameTimer';
import { getMemoryWords } from '../utils';
import './Memory.scss';
import { GAME_OVER, POINTS, YOUR_SCORE_IS } from '../constants';
import Display from '../components/Display';

export default function MemoryGame({ data }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timing, setTiming] = useState(true);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const cards = useMemo(() => getMemoryWords(data), [data]);

  return (
    <div className="game__memory-game">
      {!timing || gameOver ? (
        <Box className="game-results">
          <h3 className="center">{GAME_OVER}</h3>
          <div>{`${YOUR_SCORE_IS}: ${score} ${POINTS}`}</div>
        </Box>
      ) : (
        <div className="memory_game-field">
          <div className="time-score_block">
            <GameTimer setTiming={setTiming} />
            <Display text={score} />
          </div>
          <div className="memory_cards-wrapper">
            <Field
              cards={cards}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              setScore={setScore}
              score={score}
              setGameOver={setGameOver}
            />
          </div>
        </div>
      )}
    </div>
  );
}
