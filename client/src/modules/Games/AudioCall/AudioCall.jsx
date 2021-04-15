import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import SetWords from '../components/WordsSet/WordsSet';
import SoundBtn from '../../../components/SoundBtnComponent/SoundBtn';
import NextBtn from '../components/NextBtn/NextBtn';
import ImageComponent from '../../../components/ImageComponent/ImageComponent';
import Display from '../components/Display';
import { getRandomWords } from '../utils';
import { server } from '../../../constants/constants';
import correctSound from '../../../assets/sounds/correct.mp3';
import errorSound from '../../../assets/sounds/error.mp3';
import './AudioCall.scss';
import { setRightAnswer, setWrongAnswer } from '../../../redux/miniGameWords/actions';
import {
  GAME_OVER, POINTS, YOUR_SCORE_IS,
} from '../constants';

export default function AudioGame({ data }) {
  const basicScore = 10;
  const dispatch = useDispatch();
  const [activeWord, setActiveWord] = useState('');
  const [randomWords, setRandomWords] = useState([]);
  const [shouldOpen, setShouldOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(1);
  const [coefficient, setCoefficient] = useState(1);
  const [lives, setLives] = useState(5);
  const [gameOver, setGameOver] = useState(false);

  const playAudio = async (audioSrc) => {
    const audio = new Audio(audioSrc);

    return new Promise((resolve) => {
      audio.play();
      audio.onended = resolve;
    });
  };

  const onPlay = async () => {
    await playAudio(`${server}/${activeWord.audio}`);
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
      dispatch(setRightAnswer(activeWord, 'audiocall'));
      playCorrect();
      setShouldOpen(true);
      setCorrectAnswers(correctAnswers + 1);
      if (correctAnswers % 4 === 0 && correctAnswers !== 0) {
        setCoefficient(coefficient + 1);
      }
      setScore(score + basicScore * coefficient);
    } else {
      dispatch(setWrongAnswer(activeWord, 'audiocall'));
      playError();
      setShouldOpen(true);
      setCorrectAnswers(1);
      setCoefficient(1);
      setLives(lives - 1);
    }
  };

  const turnNext = (e, idx) => {
    e.preventDefault();

    const word = data.find((el) => el.id === idx);
    const wordIdx = data.indexOf(word);

    if (data[wordIdx + 1]) {
      setActiveWord(data[wordIdx + 1]);
    } else {
      setGameOver(true);
    }
    setShouldOpen(false);
  };

  const checkCorrect = (e) => {
    e.preventDefault();
    setShouldOpen(true);
  };

  return (
    <div className="game__audio-game">
      {gameOver ? (
        <Box className="game-results">
          <h3 className="center">{GAME_OVER}</h3>
          <div>{`${YOUR_SCORE_IS}: ${score} ${POINTS}`}</div>
        </Box>
      ) : (
        <div>
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
      )}
    </div>
  );
}
