import * as axios from 'axios';
import {
  SET_WORDS_SUCCESS,
  SET_WORDS_FAILURE,
  SET_WORDS_STARTED,
  SET_PAGE,
  SET_GROUP,
} from './constants';

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

export const fetchVocabularyWords = () => async (dispatch) => {
  dispatch(setWordsStarted());
  try {
    const { data } = await axios.get(
      'https://react-learnwords-example.herokuapp.com/users/1/aggregatedWordsokkok',
    );
    dispatch(setWordsSuccess(data));
  } catch (error) {
    dispatch(setWordsFailure(error.message));
  }
};
