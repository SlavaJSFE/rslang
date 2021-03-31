/* eslint-disable no-console */
/* eslint-disable max-len */
import * as axios from 'axios';
import {
  SET_DEL_WORDS_SUCCESS,
  SET_DEL_WORDS_FAILURE,
  SET_DEL_WORDS_STARTED,
} from './constantsDeletedWords';

export const setWordsStarted = () => ({
  type: SET_DEL_WORDS_STARTED,
  payload: true,
});

export const setWordsSuccess = (words) => ({
  type: SET_DEL_WORDS_SUCCESS,
  payload: words,
});

export const setWordsFailure = (err) => ({
  type: SET_DEL_WORDS_FAILURE,
  payload: err,
});

export const fetchVocabularyDeletedWords = (userData) => async (dispatch) => {
  dispatch(setWordsStarted());
  const { userId } = userData;
  const { token } = userData;

  try {
    await axios.get(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userId}/aggregatedWords?wordsPerPage=3600&filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22easy%22%7D%5D%7D`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((data) => dispatch(setWordsSuccess(data.data[0].paginatedResults)));
    // .then((data) => console.log(data.data[0].paginatedResults));
  } catch (error) {
    dispatch(setWordsFailure(error.message));
  }
};
