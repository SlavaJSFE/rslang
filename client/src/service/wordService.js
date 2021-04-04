/* eslint-disable no-underscore-dangle */

import { setDifficulty } from '../api/api';
import { getUserWord } from '../api/apiVocabulary';

async function setMediumWord(word, userData) {
  console.log('word2', word);
  const wordId = word.id;
  const userWord = await getUserWord(wordId, userData);
  console.log('userWord', userWord);
  if (userWord && userWord.difficulty !== 'hard') {
    setDifficulty(wordId, userData, 'medium');
    console.log('set medium');
  }
}

export default setMediumWord;
