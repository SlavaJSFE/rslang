import { NUMBER_OF_WORDS } from '../constants/constants';

export default function getRandomWords(words, word) {
  // const randomWords = [word];

  // for (let i = 0; i < NUMBER_OF_WORDS; i += 1) {
  //   const random = Math.round(Math.random() * (words.length - 1));

  //   if (randomWords.includes(words[random])) {
  //     i -= 1;
  //   } else {
  //     randomWords.push(words[random]);
  //   }
  // }

  let randomWords = [word];

  for (let i = randomWords.length; i < NUMBER_OF_WORDS; i += 1) {
    const random = Math.round(Math.random() * (words.length - 1));

    if (randomWords.includes(words[random])) {
      i -= 1;
    } else {
      randomWords.push(words[random]);
    }
  }

  randomWords = randomWords.sort(() => Math.random() - 0.5);

  return randomWords;
}
