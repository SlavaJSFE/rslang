import React, {
  useState, useEffect, useCallback, useMemo, useRef,
} from 'react';

import useSound from 'use-sound';

import { Container } from '@material-ui/core';

import ActiveWord from '../ActiveWord/ActiveWord';
import SetWords from './WordsSet';
import SoundBtn from '../../components/SoundBtnComponent/SoundBtn';

import getRandomWords from './utils';

export default function Savanna() {
  const [data, setData] = useState([]);
  const [activeWord, setActiveWord] = useState('');
  const [randomWords, setRandomWords] = useState([]);
  const [clientY, setClientY] = useState(0);

  const wordsContainer = useRef();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://react-learnwords-example.herokuapp.com/words?group=1&page=1');
      const json = await response.json();
      setData([...json]);
    }

    if (data.length === 0) fetchData();
  }, []);

  useEffect(() => {
    console.log('from useEffect start checking');
    console.log(wordsContainer);
    if (data.length && !randomWords.length) {
      setRandomWords(getRandomWords(data));
    }

    const word = randomWords[Math.round(Math.random() * (randomWords.length - 1))];
    setActiveWord(word);
  }, [data, randomWords]);

  const handleClick = (e, word) => {
    e.preventDefault();

    if (word === activeWord.word) {
      console.log('win');
    } else {
      console.log('false');
    }
  };

  useEffect(() => {
    const containerY = wordsContainer ? wordsContainer.current.getBoundingClientRect().y
      : null;

    setClientY(+containerY.toFixed(2));
  }, [wordsContainer]);

  console.log(activeWord);

  return (
    <div className="game__savanna">
      <ActiveWord text={activeWord ? activeWord.wordTranslate : null} breakPoint={clientY} />
      <SetWords handleClick={handleClick} words={randomWords} uu={wordsContainer} />
    </div>
  );
}
