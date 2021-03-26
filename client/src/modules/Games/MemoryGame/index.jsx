import React, {
  useEffect, useState, useMemo,
} from 'react';

import useSound from 'use-sound';

import Field from './Field';

import { getMemoryWords } from '../utils';

export default function MemoryGame({ data }) {
  // const [score, setScore] = useState(0);
  const [isPlaying, setIsplaying] = useState(false);
  // const [popupOpen, setPopupOpen] = useState(false);
  // const [count, setCount] = useState(63);
  // const [gameOver, setGameOver] = useState(false);

  const cards = useMemo(() => getMemoryWords(data), [data]);

  return (
    <div className="game__memory-game">
      <Field
        cards={cards}
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
      />
    </div>
  );
}
