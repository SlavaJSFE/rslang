import {
  SET_WORDS_SUCCESS,
  SET_WORDS_FAILURE,
  SET_WORDS_STARTED,
  SET_PAGE,
  SET_GROUP,
  SET_SETTINGS,
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

export const fetchWords = (currentGroup, currentPage) => async (dispatch) => {
  dispatch(setWordsStarted());
  try {
    const data = await api.getWords(currentGroup, currentPage)
    dispatch(setWordsSuccess(data));
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

export const setHardWord = (wordId, userData) => async () => {
  try {
    await api.setHardWord(wordId, userData);
    // логика пометки сложного слова
  } catch (error) {
    console.log(error);
  }
};

export const setEasyWord = (wordId, userData) => async () => {
  try {
    await api.setEasyWord(wordId, userData);
    // логика пометки удаоенного слова
  } catch (error) {
    console.log(error);
  }
};
