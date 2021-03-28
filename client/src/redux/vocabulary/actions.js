import * as axios from 'axios';
import {
  SET_DIF_WORDS_SUCCESS,
  SET_DIF_WORDS_FAILURE,
  SET_DIF_WORDS_STARTED,
  SET_DIF_PAGE,
  SET_DIF_GROUP,
} from './constants';

export const setWordsStarted = () => ({
  type: SET_DIF_WORDS_STARTED,
  payload: true,
});

export const setWordsSuccess = (words) => ({
  type: SET_DIF_WORDS_SUCCESS,
  payload: words,
});

export const setWordsFailure = (err) => ({
  type: SET_DIF_WORDS_FAILURE,
  payload: err,
});

export const setPage = (page) => ({
  type: SET_DIF_PAGE,
  payload: page,
});

export const setGroup = (group) => ({
  type: SET_DIF_GROUP,
  payload: group,
});

export const fetchVocabularyWords = () => async (dispatch) => {
  dispatch(setWordsStarted());
  try {
    const { data } = await axios.get(
      'https://rslang-server-slavajsfe.herokuapp.com/users/1/aggregatedWords',
    );
    dispatch(setWordsSuccess(data));
  } catch (error) {
    dispatch(setWordsFailure(error.message));
  }
};
