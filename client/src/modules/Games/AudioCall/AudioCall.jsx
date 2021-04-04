import React, { useEffect, useState } from 'react';

import useSound from 'use-sound';

import SetWords from '../components/WordsSet/WordsSet';
import SoundBtn from '../../../components/SoundBtnComponent/SoundBtn';
import NextBtn from '../components/NextBtn/NextBtn';
import ImageComponent from '../../../components/ImageComponent/ImageComponent';

import { getRandomWords } from '../utils';
import { server } from '../../../constants/constants';

import correctSound from '../../../assets/sounds/correct.mp3';
import errorSound from '../../../assets/sounds/error.mp3';

export default function AudioGame({ data }) {
  const [activeWord, setActiveWord] = useState('');
  const [randomWords, setRandomWords] = useState([]);
  const [shouldOpen, setShouldOpen] = useState(false);

  const url = `${server}${activeWord ? activeWord.audio : null}`;

  const [playError] = useSound(errorSound);
  const [playCorrect] = useSound(correctSound);
  const [playWord] = useSound(url);

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

    if (word === activeWord.wordTranslate) {
      playCorrect();
      setShouldOpen(true);
    } else {
      playError();
      setShouldOpen(true);
    }
  };

  const turnNext = (e, idx) => {
    e.preventDefault();

    const word = data.find((el) => el.id === idx);
    const wordIdx = data.indexOf(word);
    setActiveWord(data[wordIdx + 1]);
    setShouldOpen(false);
  };

  const checkCorrect = (e) => {
    e.preventDefault();
    setShouldOpen(true);
  };

  return (
    <div className="game__audio-game">
      {shouldOpen ? (
        <>
          <ImageComponent image={activeWord.image} />
          <SoundBtn audioSrc={activeWord ? activeWord.audio : null} />
          <h2>{activeWord.word}</h2>
        </>
      ) : (
        <SoundBtn audioSrc={activeWord ? activeWord.audio : null} />
      )}
      <SetWords
        handleClick={handleClick}
        words={randomWords}
        game="audio-game"
      />
      {shouldOpen ? (
        <NextBtn
          handleClick={turnNext}
          id={activeWord ? activeWord.id : null}
          text="Далее"
        />
      ) : (
        <NextBtn handleClick={checkCorrect} text="Не знаю" />
      )}
    </div>
  );
}
