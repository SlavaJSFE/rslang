/* eslint-disable no-empty */
import RESTORE_WORD, { DIFFICULTY_WORD, COUNT_DEL_WORDS, COUNT_STUDY_WORDS } from './constants';
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

export const getCountDelWordRedux = (countDelWords) => ({
  type: COUNT_DEL_WORDS,
  payload: countDelWords,
});

export const getCountStudyWordRedux = (countStudyWords) => ({
  type: COUNT_STUDY_WORDS,
  payload: countStudyWords,
});

export const getCountDelWord = (userData) => async (dispatch) => {
  try {
    const deletedData = await apiVocabulary.getCountDelWord(userData, 'deleted');
    const studiedData = await apiVocabulary.getCountDelWord(userData, 'studied');
    dispatch(getCountDelWordRedux(deletedData[0].paginatedResults.length));
    dispatch(getCountStudyWordRedux(studiedData[0].paginatedResults.length));
  } catch (error) {}
};
