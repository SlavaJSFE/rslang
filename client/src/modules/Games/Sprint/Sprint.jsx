import React, {
  useEffect, useState, useMemo, useCallback,
} from 'react';
// import { useSelector } from 'react-redux';

import useSound from 'use-sound';

import NextBtn from '../components/NextBtn/NextBtn';
import ImageComponent from '../../../components/ImageComponent/ImageComponent';
import Display from '../components/Display';
import GameTimer from '../components/GameTimer';

import { makeRandomSprintData } from '../utils';

import correctSound from '../../../assets/sounds/correct.mp3';
import errorSound from '../../../assets/sounds/error.mp3';
import './Sprint.scss';

export default function Sprint({ data }) {
  const [activeWord, setActiveWord] = useState('');
  const [timing, setTiming] = useState(true);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [coeff, setCoeff] = useState(1);

  const [playError] = useSound(errorSound);
  const [playCorrect] = useSound(correctSound);

  const mixedData = useMemo(() => makeRandomSprintData(data), [data]);

  const onScoreChange = useCallback(() => {
    let addScore = 10;

    if (correctAnswers % 4 === 0 && correctAnswers !== 0) {
      setCoeff(coeff + 1);
    }
    addScore *= coeff;
    return addScore;
  }, [coeff]);

  useEffect(() => {
    if (mixedData.length) {
      const word = mixedData[0];
      setActiveWord(word);
    }
  }, [data, mixedData]);

  useEffect(() => {
    if (!timing) {
      // console.log(timing);
    }
  }, [timing]);

  const checkCorrect = (e, idx) => {
    e.preventDefault();

    const { outerText } = e.target;
    const clickedCorrect = outerText.toLowerCase() === 'верно';

    const word = mixedData.find((el) => el.id === idx);
    const wordfromData = data.find((el) => el.id === idx);

    const isCorrect = word.wordTranslate === wordfromData.wordTranslate;

    if ((clickedCorrect && isCorrect) || (!clickedCorrect && !isCorrect)) {
      playCorrect();
      setCorrectAnswers(correctAnswers + 1);
      setScore(score + onScoreChange());
    } else {
      playError();
      setCorrectAnswers(0);
      setScore(score + onScoreChange());
    }

    const wordIdx = mixedData.indexOf(word);
    setActiveWord(mixedData[wordIdx + 1]);
  };

  return (
    <div className="game__sprint">
      <GameTimer setTiming={setTiming} />
      <Display text={score} />
      <ImageComponent image={activeWord.image} />

      <h2>{activeWord.word}</h2>
      <h2>{activeWord.wordTranslate}</h2>
      <div className="sprint__buttons-set">
        <NextBtn handleClick={checkCorrect} id={activeWord ? activeWord.id : null} text="Верно" />
        <NextBtn handleClick={checkCorrect} id={activeWord ? activeWord.id : null} text="Неверно" />
      </div>
    </div>
  );
}
