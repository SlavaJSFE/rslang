/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';
import { connect, useDispatch } from 'react-redux';
import Rating from '@material-ui/lab/Rating';

import { Box } from '@material-ui/core';
import ActiveWord from './ActiveWord/ActiveWord';
import WordsSet from '../components/WordsSet/WordsSet';
import { getRandomWords } from '../utils';
import correctSound from '../../../assets/sounds/correct.mp3';
import errorSound from '../../../assets/sounds/error.mp3';
import './Savannah.scss';
import useStyles from './SavannahStyles';
import {
  setRightAnswer,
  setWrongAnswer,
} from '../../../redux/miniGameWords/actions';
import { gameNames } from '../../../constants/constants';
import { GAME_OVER, POINTS, YOUR_SCORE_IS } from '../constants';

function popActiveWord(wordsForGame, activeWord) {
  return wordsForGame.filter(
    (item) => item.wordTranslate !== activeWord.wordTranslate,
  );
}

function Savannah({ data }) {
  const basicScore = 10;
  const gameName = gameNames.savannah;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [activeWord, setActiveWord] = useState('');
  const [randomWords, setRandomWords] = useState([]);
  const [clientY, setClientY] = useState(0);
  const [isFail, setIsFail] = useState(false);
  const [wordsForGame, setWordsForGame] = useState(data);
  const [lives, setLives] = useState(5);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(1);
  const [coefficient, setCoefficient] = useState(1);

  const wordsContainer = useRef();

  const [playError] = useSound(errorSound);
  const [playCorrect] = useSound(correctSound);

  function checkForCorrectWord(word, activeWordForCheck) {
    if (word === activeWordForCheck.wordTranslate) {
      playCorrect();
      dispatch(setRightAnswer(activeWordForCheck, gameName));
      setCorrectAnswers(correctAnswers + 1);
      if (correctAnswers % 4 === 0 && correctAnswers !== 0) {
        setCoefficient(coefficient + 1);
      }
      setScore(score + basicScore * coefficient);
    } else {
      playError();
      dispatch(setWrongAnswer(activeWordForCheck, gameName));
      setLives(lives - 1);
      setCorrectAnswers(1);
      setCoefficient(1);
    }
  }

  useEffect(() => {
    if (wordsForGame.length && activeWord !== '') {
      setRandomWords(getRandomWords(data, activeWord));
    }
  }, [wordsForGame, activeWord]);

  useEffect(() => {
    if (wordsForGame.length) {
      setActiveWord(wordsForGame[0]);
    }
  }, [wordsForGame]);

  const setNewRound = () => {
    setWordsForGame(popActiveWord(wordsForGame, activeWord));
  };

  useEffect(() => {
    if (isFail) {
      dispatch(setWrongAnswer(activeWord, gameName));
      playError();
      setNewRound();
      setLives(lives - 1);
      setCorrectAnswers(1);
      setCoefficient(1);
    }
    setIsFail(false);
  }, [isFail]);

  const handleClick = (e, word) => {
    e.preventDefault();
    setNewRound();
    checkForCorrectWord(word, activeWord);
  };

  useEffect(() => {
    const containerY = wordsContainer
      ? wordsContainer.current.getBoundingClientRect().y
      : null;
    setClientY(+containerY.toFixed(2));
  }, [wordsContainer]);

  return (
    <div className="game__savannah">
      {lives === 0 || !wordsForGame.length ? (
        <Box className="game-results">
          <h3 className="center">{GAME_OVER}</h3>
          <div>{`${YOUR_SCORE_IS}: ${score} ${POINTS}`}</div>
        </Box>
      ) : (
        <div className="savannah_game-field">
          <div className="lives-score_block">
            <Rating name="stars" value={lives} className={classes.root} readOnly />
            <div className="savannah_score">{score}</div>
          </div>
          <ActiveWord
            text={activeWord ? activeWord.word : null}
            breakPoint={clientY}
            setIsFail={setIsFail}
            isFail={isFail}
            wordsForGame={wordsForGame}
          />
          <div className="word-set-wrapper">
            <WordsSet
              handleClick={handleClick}
              words={randomWords}
              container={wordsContainer}
              game="savanna"
            />
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.user.user,
});

export default connect(mapStateToProps)(Savannah);
