import React, {
  useEffect, useState, useMemo,
} from 'react';
import { useSelector } from 'react-redux';

import useSound from 'use-sound';

import NextBtn from '../components/NextBtn/NextBtn';
import ImageComponent from '../../../components/ImageComponent/ImageComponent';

import { makeRandomSprintData } from '../utils';

import correctSound from '../../../assets/sounds/correct.mp3';
import errorSound from '../../../assets/sounds/error.mp3';
import './Sprint.scss';

export default function AudioGame({ data }) {
  const [activeWord, setActiveWord] = useState('');
  // const activeWords = useSelector((state) => state.game.words);

  const [playError] = useSound(errorSound);
  const [playCorrect] = useSound(correctSound);

  const mixedData = useMemo(() => makeRandomSprintData(data), [data]);

  useEffect(() => {
    if (mixedData.length) {
      const word = mixedData[0];
      setActiveWord(word);
    }
  }, [data, mixedData]);

  const checkCorrect = (e, idx) => {
    e.preventDefault();

    const { outerText } = e.target;
    const clickedCorrect = outerText.toLowerCase() === 'верно';

    const word = mixedData.find((el) => el.id === idx);
    const wordfromData = data.find((el) => el.id === idx);

    const isCorrect = word.wordTranslate === wordfromData.wordTranslate;

    if ((clickedCorrect && isCorrect) || (!clickedCorrect && !isCorrect)) {
      playCorrect();
    } else {
      playError();
    }

    const wordIdx = mixedData.indexOf(word);
    setActiveWord(mixedData[wordIdx + 1]);
  };

  return (
    <div className="game__sprint">
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
