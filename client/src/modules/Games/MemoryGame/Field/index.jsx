import React, {
  useState, useEffect, useCallback,
} from 'react';
import useSound from 'use-sound';

import swapSound from '../../../../assets/sounds/swap.mp3';
import correctSound from '../../../../assets/sounds/correct.mp3';
import Card from '../Card';

import './index.scss';
import { ONE_SECOND } from '../../constants';

const Field = ({
  cards, isPlaying, setIsPlaying, score, setScore, setGameOver,
}) => {
  const [cardsArr, setCardsArr] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [matchedArr, setMatchedArr] = useState([]);
  const basicScore = 10;
  const [playSwap] = useSound(swapSound);
  const [playCorrect] = useSound(correctSound);

  const handleClick = (card) => {
    playSwap();

    if (!isPlaying || openedCards.length > 2 || matchedArr.includes(card)) return;

    const flippedCard = cardsArr.find((el) => el.idx === card.idx);
    flippedCard.isFlipped = true;

    setOpenedCards([...openedCards, card]);
  };

  const onStart = useCallback(() => {
    setCardsArr([...cards]);

    playSwap();

    if (!isPlaying) setTimeout(() => setIsPlaying(!isPlaying), 3000);
  }, [cards, isPlaying, setIsPlaying]);

  useEffect(() => {
    onStart();
  }, [onStart]);

  useEffect(() => {
    if (openedCards.length === 2) {
      const [a, b] = openedCards;
      if (a.id === b.id && a.idx !== b.idx) {
        setTimeout(() => {
          playCorrect();
        }, 400);

        setScore(score + basicScore);
        setMatchedArr([...matchedArr, a, b]);
        setOpenedCards([]);
      } else {
        setTimeout(() => {
          cardsArr.forEach((el) => {
            if (matchedArr.includes(el)) return;
            el.isFlipped = false;
          });
          playSwap();

          setOpenedCards([]);
        }, 800);
      }
    }
  }, [openedCards.length, setMatchedArr, setOpenedCards]);

  useEffect(() => {
    const { length } = cards;

    if (length === matchedArr.length && isPlaying) {
      setTimeout(() => {
        setGameOver(true);
      }, ONE_SECOND);
    }
  }, [matchedArr.length, cards, isPlaying]);

  return (
    <div className="memory_cards">
      {cardsArr.map((card) => (
        <Card
          key={card.idx}
          title={card.card === 1 ? card.word : card.wordTranslate}
          frontRotate={isPlaying && !card.isFlipped ? 'front-rotate' : ''}
          backRotate={isPlaying && !card.isFlipped ? 'back-rotate' : ''}
          handleClick={() => handleClick(card)}
        />
      ))}
    </div>
  );
};

export default Field;
