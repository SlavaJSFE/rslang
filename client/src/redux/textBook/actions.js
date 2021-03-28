import * as axios from 'axios';
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
    const { data } = await axios.get(
      `https://react-learnwords-example.herokuapp.com/words?group=${currentGroup}&page=${currentPage}`,
    );
    dispatch(setWordsSuccess(data));
  } catch (error) {
    dispatch(setWordsFailure(error.message));
  }
};

export const setSettings = (settings) => ({
  type: SET_SETTINGS,
  payload: settings,
});

export const fetchSettings = () => async (dispatch) => {
  try {
    const data = await api.fetchSettings();
    dispatch(setSettings(data.optional));
  } catch (error) {
    console.log(error);
  }
};

export const updateSettings = (field, value) => async (dispatch) => {
  const data = await api.updateSettings(field, value);
  dispatch(setSettings(data));
};
