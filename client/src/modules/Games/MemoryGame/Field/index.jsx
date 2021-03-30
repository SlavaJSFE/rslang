import React, {
  useState, useEffect, useCallback,
} from 'react';
import useSound from 'use-sound';

import swapSound from '../../../../assets/sounds/swap.mp3';
import correctSound from '../../../../assets/sounds/correct.mp3';
import Card from '../Card';

import './index.scss';

const Field = ({
  // eslint-disable-next-line no-unused-vars
  cards, score, setscore, isPlaying, setIsplaying, level,
  // eslint-disable-next-line no-unused-vars
  isFinished, setIsFinished, isReseted, isAutoplaying, finish,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [cardsArr, setCardsArr] = useState([]);
  const [openedCards, setOpendeCards] = useState([]);
  const [machedArr, setmachedArr] = useState([]);

  const [playSwap] = useSound(swapSound);
  const [playCorrect] = useSound(correctSound);

  const handleClick = (card) => {
    console.log(card);
    playSwap();

    if (!isPlaying || openedCards.length > 2 || machedArr.includes(card)) return;

    const flippedCard = cardsArr.find((el) => el.idx === card.idx);
    flippedCard.isFlipped = true;

    setOpendeCards([...openedCards, card]);
    console.log(cardsArr, openedCards);
  };

  const onStart = useCallback(() => {
    console.log(cards);
    setCardsArr([...cards]);

    playSwap();

    if (!isPlaying) setTimeout(() => setIsplaying(!isPlaying), 3000);
  }, [cards, isPlaying, setIsplaying]);
    /// /
  useEffect(() => {
    onStart();
  }, [onStart]);

  const onFinish = useCallback(() => {
    cardsArr.forEach((el) => {
      el.isFlipped = false;
    });
    // cant understand why
    setTimeout(() => {
      cardsArr.forEach((el) => {
        el.isFlipped = false;
      });
      // setIsplaying(!isPlaying);
    }, 8000);

    // setIsFinished(!isFinished);
    console.log(isPlaying, 'from onfinish');
    setmachedArr([]);
  }, [cardsArr]);

  useEffect(() => {
    if (openedCards.length === 2) {
      const [a, b] = openedCards;
      if (a.id === b.id && a.idx !== b.idx) {
        setTimeout(() => {
          playCorrect();
        }, 400);

        // if (a.clickedTimes === b.clickedTimes && a.clickedTimes === 1) {
        //   setscore(score + 5);
        // } else {
        //   setscore(score + 1);
        // }

        setmachedArr([...machedArr, a, b]);

        setOpendeCards([]);
      } else {
        setTimeout(() => {
          cardsArr.forEach((el) => {
            if (machedArr.includes(el)) return;
            el.isFlipped = false;
          });
          playSwap();

          setOpendeCards([]);
        }, 800);
      }
    }
  }, [openedCards.length, setmachedArr, setOpendeCards]);

  useEffect(() => {
    const { length } = cards;

    if (length === machedArr.length && isPlaying) setTimeout(() => onFinish(), 1000);
  }, [machedArr.length, onFinish, cards, isPlaying]);

  return (
    <div className="gamefield">
      {cardsArr.map((card) => (
        <Card
          key={card.idx}
          // id={card.id}
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
