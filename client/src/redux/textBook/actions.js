import {
  SET_WORDS_SUCCESS,
  SET_WORDS_FAILURE,
  SET_WORDS_STARTED,
  SET_PAGE,
  SET_GROUP,
  SET_SETTINGS,
  DELETE_WORD,
  SET_HARD_WORD,
  SET_WORDS_COUNT,
  SET_IS_AUTH_ERROR,
} from './constants';
import * as api from '../../api/api';

export const setWordsStarted = () => ({
  type: SET_WORDS_STARTED,
  payload: true,
});

export const setWordsSuccess = (words) => ({
  type: SET_WORDS_SUCCESS,
  payload: words,
});

export const setWordsFailure = (err) => ({
  type: SET_WORDS_FAILURE,
  payload: err,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setGroup = (group) => ({
  type: SET_GROUP,
  payload: group,
});

export const deleteWordRedux = (wordId) => ({
  type: DELETE_WORD,
  payload: wordId,
});

export const setWordsCount = (count) => ({
  type: SET_WORDS_COUNT,
  payload: count,
});

export const setIsAuthError = (value) => ({
  type: SET_IS_AUTH_ERROR,
  payload: value,
});

export const fetchWords = (currentGroup, currentPage, userData) => async (
  dispatch,
) => {
  dispatch(setWordsStarted());
  try {
    if (userData.token) {
      const data = await api.getWords(currentGroup, currentPage, userData);
      dispatch(setWordsSuccess(data[0].paginatedResults));
      dispatch(setWordsCount(data[0].totalCount[0].count));
    } else {
      const data = await api.getWordsWithOutAuth(currentGroup, currentPage);
      dispatch(setWordsSuccess(data));
      dispatch(setWordsCount(null));
    }
  } catch (error) {
    dispatch(setWordsFailure(error.message));
  }
};

export const setSettings = (settings) => ({
  type: SET_SETTINGS,
  payload: settings,
});

export const fetchSettings = (userData) => async (dispatch) => {
  try {
    const data = await api.fetchSettings(userData);
    dispatch(setSettings(data.optional));
  } catch (error) {
    console.log(error);
  }
};

export const updateSettings = (field, value, userData) => async (
  dispatch,
  getState,
) => {
  const {
    textBookPage: { settings },
  } = getState();
  try {
    const data = await api.updateSettings(
      settings.optional,
      field,
      value,
      userData,
    );
    dispatch(setSettings(data));
  } catch (error) {
    console.log(error);
  }
};

export const setHardWordRedux = (wordId) => ({
  type: SET_HARD_WORD,
  payload: wordId,
});

export const setHardWord = (word, userData) => async (dispatch) => {
  try {
    await api.setHardWord(word, userData);
    dispatch(setHardWordRedux(word.id));
  } catch (error) {
    console.log(error);
  }
};

export const deleteWord = (wordId, userData) => async (dispatch) => {
  try {
    await api.deleteWord(wordId, userData);
    dispatch(deleteWordRedux(wordId));
  } catch (error) {
    console.log(error);
  }
};
