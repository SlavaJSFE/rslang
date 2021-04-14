import React, {
  useEffect, useState, useMemo,
} from 'react';
import Rating from '@material-ui/lab/Rating';
import useSound from 'use-sound';
import NextBtn from '../components/NextBtn/NextBtn';
import ImageComponent from '../../../components/ImageComponent/ImageComponent';
import Display from '../components/Display';
import GameTimer from '../components/GameTimer';
import { makeRandomSprintData } from '../utils';
import correctSound from '../../../assets/sounds/correct.mp3';
import errorSound from '../../../assets/sounds/error.mp3';
import './Sprint.scss';
import { CORRECT, GAME_OVER, WRONG } from '../constants';

export default function Sprint({ data }) {
  const [activeWord, setActiveWord] = useState('');
  const [timing, setTiming] = useState(true);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(1);
  const [coefficient, setCoefficient] = useState(1);
  const [lives, setLives] = useState(5);
  const basicScore = 10;
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
    const clickedCorrect = outerText.toLowerCase() === CORRECT;

    const word = mixedData.find((el) => el.id === idx);
    const wordFromData = data.find((el) => el.id === idx);

    const isCorrect = word.wordTranslate === wordFromData.wordTranslate;

    if ((clickedCorrect && isCorrect) || (!clickedCorrect && !isCorrect)) {
      playCorrect();
      setCorrectAnswers(correctAnswers + 1);
      if (correctAnswers % 4 === 0 && correctAnswers !== 0) {
        setCoefficient(coefficient + 1);
      }
      setScore(score + basicScore * coefficient);
    } else {
      playError();
      setCorrectAnswers(0);
      setCoefficient(1);
      setLives(lives - 1);
    }

    const wordIdx = mixedData.indexOf(word);
    setActiveWord(mixedData[wordIdx + 1]);
  };

  return (
    <div className="game__sprint">
      {lives === 0 || !activeWord || !timing ? (
        <div>
          <div>{GAME_OVER}</div>
          <div>{`Your score is ${score}`}</div>
        </div>
      ) : (
        <div className="sprint_game-field">
          <div className="time-rating-score_block">
            <GameTimer setTiming={setTiming} />
            <div className="sprint_rating">
              <Rating name="stars" value={lives} readOnly />
            </div>
            <Display text={score} />
          </div>
          <ImageComponent image={activeWord.image} />
          <div className="sprint_words">
            <h2>{activeWord.word}</h2>
            <h2>{activeWord.wordTranslate}</h2>
          </div>
          <div className="sprint__buttons-set">
            <NextBtn
              handleClick={checkCorrect}
              id={activeWord ? activeWord.id : null}
              text={CORRECT}
            />
            <NextBtn
              handleClick={checkCorrect}
              id={activeWord ? activeWord.id : null}
              text={WRONG}
            />
          </div>
        </div>
      )}
    </div>
  );
}
