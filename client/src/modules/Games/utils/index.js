import { NUMBER_OF_WORDS } from '../constants/constants';

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

export { shuffle, getRandom, getRandomWords, makeRandomSprintData };
