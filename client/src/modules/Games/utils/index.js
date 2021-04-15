import { NUMBER_OF_WORDS, NUMBER_OF_PAIRS } from '../constants';

function getRandom(arr) {
  return Math.round(Math.random() * (arr.length - 1));
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function makeRandomSprintData(arrData) {
  if (!arrData.length) return [];

  const random = getRandom(arrData);
  const falseData = [];

  for (let i = 0; i <= random; i += 1) {
    const randomIdx = getRandom(arrData);

    const { wordTranslate } = arrData[randomIdx];
    const word = { ...arrData[i], wordTranslate };

    falseData.push(word);
  }

  arrData.forEach((el) => {
    const { word } = el;
    const wordObj = falseData.find((item) => item.word === word);

    if (!wordObj) falseData.push(el);
  });

  return shuffle(falseData);
}

function getRandomWords(words, word) {
  let randomWords = [word];

  for (let i = randomWords.length; i < NUMBER_OF_WORDS; i += 1) {
    const random = getRandom(words);

    if (randomWords.includes(words[random])) {
      i -= 1;
    } else {
      randomWords.push(words[random]);
    }
  }

  randomWords = shuffle(randomWords);

  return randomWords;
}

function getMemoryWords(arrData) {
  if (!arrData.length) return [];

  let randomWords = [];
  for (let i = randomWords.length; i < NUMBER_OF_PAIRS; i += 1) {
    const random = getRandom(arrData);

    if (randomWords.includes(arrData[random])) {
      i -= 1;
    } else {
      randomWords.push(arrData[random]);
    }
  }

  randomWords = randomWords.map((el) => {
    const item = { ...el, card: 1 };
    return item;
  });

  let cards = [...randomWords, ...randomWords];
  const { length } = cards;

  cards = cards.map((el, idx) => {
    const newEl = { ...el, card: idx >= length / 2 ? 2 : 1 };
    return newEl;
  });
  cards = shuffle(cards);
  cards = cards.map((el, idx) => {
    const newEl = { ...el, idx: idx + 1, isFlipped: false };
    return newEl;
  });

  return cards;
}

function getScore() {
  let coefficient = 1;
  let score = 10;

  return (answers) => {
    if (answers % 4 === 0 && answers !== 0) {
      coefficient += 1;
      score *= coefficient;
    }
    return score;
  };
}

function addZero(n) {
  const numb = +n.toFixed(0);
  const min = Math.floor(numb / 60);
  const sec = numb % 60;
  return `0${min}:${sec >= 10 ? sec : `0${sec}`}`;
}

export {
  shuffle, getRandom, getRandomWords, makeRandomSprintData, getMemoryWords, getScore, addZero,
};
