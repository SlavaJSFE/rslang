import React, { useEffect, useState, useCallback } from 'react';

import useSound from 'use-sound';

import SetWords from '../components/WordsSet/WordsSet';
import SoundBtn from '../../../components/SoundBtnComponent/SoundBtn';
import NextBtn from '../components/NextBtn/NextBtn';
import ImageComponent from '../../../components/ImageComponent/ImageComponent';
import Display from '../components/Display';

import { getRandomWords, getScore } from '../utils';
import { server } from '../../../constants/constants';

import correctSound from '../../../assets/sounds/correct.mp3';
import errorSound from '../../../assets/sounds/error.mp3';

export default function AudioGame({ data }) {
  const [activeWord, setActiveWord] = useState('');
  const [randomWords, setRandomWords] = useState([]);
  const [shouldOpen, setShouldOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(1);
  const [coeff, setCoeff] = useState(1);

  // const onScoreChange = useCallback(() => {
  //   let addScore = 10;

  //   if (correctAnswers % 4 === 0 && correctAnswers !== 0) setCoeff(coeff + 1);

  //   if (!correctAnswers) setCoeff(1);

  //   addScore *= coeff;
  //   return addScore;
  // }, [correctAnswers]);

  const onScoreChange = () => {
    let addScore = 10;

    // if (correctAnswers % 4 === 0 && correctAnswers !== 0) setCoeff(coeff + 1);

    if (!correctAnswers) setCoeff(1);

    addScore *= coeff;
    return addScore;
  };

  const playAudio = async (audioSrc) => {
    const audio = new Audio(audioSrc);
    return new Promise((resolve) => {
      audio.play();
      audio.onended = resolve;
    });
  };

  const onPlay = async () => {
    await playAudio(`${server}${activeWord.audio}`);
  };

  const [playError] = useSound(errorSound);
  const [playCorrect] = useSound(correctSound);

  useEffect(() => {
    onPlay();
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
      setCorrectAnswers(correctAnswers + 1);
      if (correctAnswers % 4 === 0 && correctAnswers !== 0) setCoeff(coeff + 1);
      setScore(score + onScoreChange());
      console.log(correctAnswers, score, coeff);
    } else {
      playError();
      setShouldOpen(true);
      setCorrectAnswers(1);
      setCoeff(1);
      setScore(score + onScoreChange());
      console.log(correctAnswers, score, coeff);
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
      <Display text={score} />
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
