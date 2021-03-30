import React, { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';

import ActiveWord from './ActiveWord/ActiveWord';
import WordsSet from '../components/WordsSet/WordsSet';
import { getRandomWords } from '../utils';
import correctSound from '../../../assets/sounds/correct.mp3';
import errorSound from '../../../assets/sounds/error.mp3';

function popActiveWord(wordsForGame, activeWord) {
  return wordsForGame.filter(
    (item) => item.wordTranslate !== activeWord.wordTranslate,
  );
}

export default function Savannah({ data }) {
  const [activeWord, setActiveWord] = useState('');
  const [randomWords, setRandomWords] = useState([]);
  const [clientY, setClientY] = useState(0);
  const [isFail, setIsFail] = useState(false);
  const [wordsForGame, setWordsForGame] = useState(data);

  const wordsContainer = useRef();

  const [playError] = useSound(errorSound);
  const [playCorrect] = useSound(correctSound);

  function checkForCorrectWord(word, activeWordForCheck) {
    if (word === activeWordForCheck.wordTranslate) {
      playCorrect();
    } else {
      playError();
    }
  }

  useEffect(() => {
    if (wordsForGame.length && activeWord !== '') {
      setRandomWords(getRandomWords(data, activeWord));
    }
  }, [wordsForGame, activeWord]);

  useEffect(() => {
    if (wordsForGame.length) {
      setActiveWord(wordsForGame[0]);
    } else {
      alert('конец игры');
    }
  }, [wordsForGame]);

  const setNewRound = () => {
    setWordsForGame(popActiveWord(wordsForGame, activeWord));
  };

  useEffect(() => {
    if (isFail) {
      playError();
      setNewRound();
    }
    setIsFail(false);
  }, [isFail]);

  const handleClick = (e, word) => {
    e.preventDefault();
    setNewRound();
    checkForCorrectWord(word, activeWord);
  };

  useEffect(() => {
    const containerY = wordsContainer
      ? wordsContainer.current.getBoundingClientRect().y
      : null;
    setClientY(+containerY.toFixed(2));
  }, [wordsContainer]);

  return (
    <div className="game__savannah">
      <ActiveWord
        text={activeWord ? activeWord.word : null}
        breakPoint={clientY}
        setIsFail={setIsFail}
        isFail={isFail}
        wordsForGame={wordsForGame}
      />
      <WordsSet
        handleClick={handleClick}
        words={randomWords}
        container={wordsContainer}
        game="savanna"
      />
    </div>
  );
}
