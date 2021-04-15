/* eslint-disable no-empty */
import RESTORE_WORD, { DIFFICULTY_WORD, COUNT_WORDS, COUNT_STUDY_WORDS } from './constants';
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

export const getCountWordRedux = (countWords) => ({
  type: COUNT_WORDS,
  payload: countWords,
});

export const getCountStudyWordRedux = (countStudyWords) => ({
  type: COUNT_STUDY_WORDS,
  payload: countStudyWords,
});

export const getCountWord = (userData) => async (dispatch) => {
  try {
    const deletedData = await apiVocabulary.getCountWord(userData, 'deleted');
    const studiedData = await apiVocabulary.getCountWord(userData, 'studied');
    dispatch(getCountWordRedux(deletedData[0].paginatedResults.length));
    dispatch(getCountStudyWordRedux(studiedData[0].paginatedResults.length));
  } catch (error) {}
};
