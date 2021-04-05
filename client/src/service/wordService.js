/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

import { setDifficulty } from '../api/api';
import { getUserWord } from '../api/apiVocabulary';

async function setMediumWord(word, userData) {
  console.log('word', word);
  const wordId = word.id;
  let userWord = null;
  try {
    userWord = await getUserWord(wordId, userData);
  } catch {
    console.log('errrr');
  }
  if (userWord === null) {
    setDifficulty(wordId, userData, 'medium');
    console.log('set medium');
  }
}

export default setMediumWord;
