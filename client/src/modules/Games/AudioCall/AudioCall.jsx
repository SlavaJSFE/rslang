import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
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
  const [shouldAddScore, changeShouldAddScore] = useState(true);

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
      playCorrect();
      setShouldOpen(true);
      if (shouldAddScore) {
        dispatch(setRightAnswer(activeWord, 'audiocall'));
        setCorrectAnswers(correctAnswers + 1);
        if (correctAnswers % 4 === 0 && correctAnswers !== 0) {
          setCoefficient(coefficient + 1);
        }
        setScore(score + basicScore * coefficient);
      }
    } else {
      playError();
      setShouldOpen(true);
      if (shouldAddScore) {
        dispatch(setWrongAnswer(activeWord, 'audiocall'));
        setCorrectAnswers(1);
        setCoefficient(1);
        setLives(lives - 1);
      }
    }
    changeShouldAddScore(false);
  };

  const turnNext = (e, idx) => {
    e.preventDefault();

    const word = data.find((el) => el.id === idx);
    const wordIdx = data.indexOf(word);

    changeShouldAddScore(true);
    setShouldOpen(false);

    if (data[wordIdx + 1]) {
      setActiveWord(data[wordIdx + 1]);
    } else {
      setGameOver(true);
    }
  };

  const checkCorrect = (e) => {
    e.preventDefault();
    changeShouldAddScore(true);
    setShouldOpen(true);
  };

  return (
    <div className="game__audio-game">
      {gameOver || !lives ? (
        <Box className="game-results">
          <h3 className="center">{GAME_OVER}</h3>
          <div>{`${YOUR_SCORE_IS}: ${score} ${POINTS}`}</div>
        </Box>
      ) : (
        <div className="audio-call_game-field">
          <div className="rating-score_block">
            <div className="sprint_rating">
              <Rating name="stars" value={lives} readOnly />
            </div>
            <Display text={score} />
          </div>
          <Box className={`audio-call_image ${shouldOpen ? '' : 'hidden'}`}>
            <ImageComponent image={activeWord.image} />
          </Box>
          <Box className="audio-call_word-sound-block">
            <h2 className={shouldOpen ? '' : 'hidden'}>{activeWord.word}</h2>
            <SoundBtn audioSrc={activeWord ? activeWord.audio : null} />
          </Box>
          <Box className="audio-call_word-answers">
            <SetWords
              handleClick={handleClick}
              words={randomWords}
              game="audio-game"
            />
          </Box>
          <Box className="audio-call_next-button">
            {shouldOpen ? (
              <NextBtn
                handleClick={turnNext}
                id={activeWord ? activeWord.id : null}
                text="Далее"
              />
            ) : (
              <NextBtn handleClick={checkCorrect} text="Не знаю" />
            )}
          </Box>
        </div>
      )}
    </div>
  );
}
