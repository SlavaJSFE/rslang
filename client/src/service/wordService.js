/* eslint-disable no-underscore-dangle */

import { setDifficulty } from '../api/api';
import { getUserWord } from '../api/apiVocabulary';

function setMediumWord(word, userData) {
  const userWord = getUserWord(word.id, userData);
  console.log('userWord', userWord);
  if (false) {
    setDifficulty(word._id, userData, 'medium');
  }
}

export default setMediumWord;
