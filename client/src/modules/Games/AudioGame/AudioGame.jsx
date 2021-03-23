import React, { useEffect, useState } from 'react';

import useSound from 'use-sound';

import SetWords from '../components/WordsSet/WordsSet';
import SoundBtn from '../../../components/SoundBtnComponent/SoundBtn';
import NextBtn from '../components/NextBtn/NextBtn';

import getRandomWords from '../utils/utils';
import ImageComponent from '../../../components/ImageComponent/ImageComponent';

import correctSound from '../../../assets/sounds/correct.mp3';
import errorSound from '../../../assets/sounds/error.mp3';

export default function AudioGame({ data }) {
  const [activeWord, setActiveWord] = useState('');
  const [randomWords, setRandomWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

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

  const handleClick = (e, word) => {
    e.preventDefault();

    if (word === activeWord.word) {
      playCorrect();
      setIsCorrect(true);
    } else {
      playError();
    }
  };

  const turnNext = (e, idx) => {
    e.preventDefault();

    const word = data.find((el) => el.id === idx);
    const wordIdx = data.indexOf(word);
    setActiveWord(data[wordIdx + 1]);
    setIsCorrect(false);
  };

  return (
    <div className="game__audio-game">
      {isCorrect ? <ImageComponent image={activeWord.image} />
        : <SoundBtn audioSrc={activeWord ? activeWord.audio : null} /> }
      <SetWords handleClick={handleClick} words={randomWords} game="audio-game" />
      <NextBtn turnNext={turnNext} id={activeWord ? activeWord.id : null} />
    </div>
  );
}
