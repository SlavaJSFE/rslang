import React, { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';

import ActiveWord from './ActiveWord/ActiveWord';
import SetWords from '../components/WordsSet/WordsSet';
import { getRandomWords } from '../utils';
import correctSound from '../../../assets/sounds/correct.mp3';
import errorSound from '../../../assets/sounds/error.mp3';

export default function Savannah({ data }) {
  const [activeWord, setActiveWord] = useState('');
  const [randomWords, setRandomWords] = useState([]);
  const [clientY, setClientY] = useState(0);
  const [isFail, setIsFail] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const wordsContainer = useRef();

  const [playError] = useSound(errorSound);
  const [playCorrect] = useSound(correctSound);

  useEffect(() => {
    if (data.length && activeWord !== '') {
      setRandomWords(getRandomWords(data, activeWord));
    }
  }, [data, activeWord]);

  useEffect(() => {
    if (data.length) {
      const word = data[0];
      setActiveWord(word);
    }
  }, [data]);

  useEffect(() => {
    if (isFail) {
      playError();
    }
  }, [isFail]);

  const handleClick = (e, word) => {
    e.preventDefault();
    setIsClicked(true);

    const clickedword = data.find((el) => el.wordTranslate === word);

    const wordIdx = data.indexOf(clickedword);
    setActiveWord(data[wordIdx + 1]);

    if (word === activeWord.wordTranslate) {
      playCorrect();
    } else {
      playError();
    }
    setIsClicked(false);
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
        isClicked={isClicked}
      />
      <SetWords
        handleClick={handleClick}
        words={randomWords}
        container={wordsContainer}
        game="savanna"
      />
    </div>
  );
}
