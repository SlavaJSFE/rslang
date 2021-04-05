/* eslint-disable no-empty */
import RESTORE_WORD from './constants';
import * as api from '../../api/apiVocabulary';

export const restoreWordRedux = (wordId) => ({
  type: RESTORE_WORD,
  payload: wordId,
});

export const restoreWord = (wordId, userData) => async (dispatch) => {
  try {
    await api.restoreWord(wordId, userData);
    dispatch(restoreWordRedux(wordId));
  } catch (error) {}
};
