import React, { useEffect, useState } from 'react';

import SetWords from '../components/WordsSet/WordsSet';
import SoundBtn from '../../../components/SoundBtnComponent/SoundBtn';

import getRandomWords from '../utils/utils';

export default function AudioGame() {
  const [data, setData] = useState([]);
  const [activeWord, setActiveWord] = useState('');
  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://react-learnwords-example.herokuapp.com/words?group=1&page=1');
      const json = await response.json();
      setData([...json]);
    }

    if (data.length === 0) fetchData();
  }, []);

  useEffect(() => {
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

  console.log(activeWord);
  return (
    <div className="game__audio-game">
      <SoundBtn audioSrc={activeWord.audio} />
      <SetWords handleClick={handleClick} words={randomWords} game="audio-game" />
    </div>
  );
}
