/* eslint-disable no-empty */
import RESTORE_WORD, { DIFFICULTY_WORD } from './constants';
import * as apiVocabulary from '../../api/apiVocabulary';
import * as api from '../../api/api';

export const restoreWordRedux = (wordId) => ({
  type: RESTORE_WORD,
  payload: wordId,
});

export const restoreWord = (wordId, userData) => async (dispatch) => {
  try {
    await apiVocabulary.restoreWord(wordId, userData);
    dispatch(restoreWordRedux(wordId));
  } catch (error) {}
};

export const setDifficultyWordRedux = (wordId) => ({
  type: DIFFICULTY_WORD,
  payload: wordId,
});

export const setDifficulty = (wordId, userData) => async (dispatch) => {
  try {
    await api.setDifficulty(wordId, userData);
    dispatch(setDifficultyWordRedux(wordId));
  } catch (error) {}
};
