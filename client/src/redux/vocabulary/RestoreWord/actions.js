import * as axios from 'axios';
import { server } from '../../../constants/constants';
import {
  SET_RES_WORD_SUCCESS,
  SET_RES_WORD_FAILURE,
  SET_RES_WORD_STARTED,
} from './constants';

export const setWordsStarted = () => ({
  type: SET_RES_WORD_STARTED,
  payload: true,
});

export const setWordsSuccess = (words) => ({
  type: SET_RES_WORD_SUCCESS,
  payload: words,
});

export const setWordsFailure = (err) => ({
  type: SET_RES_WORD_FAILURE,
  payload: err,
});

export const fetchVocabularyDeletedWords = (userData) => async (dispatch) => {
  dispatch(setWordsStarted());
  const { userId } = userData;
  const { token } = userData;

  try {
    await axios.get(
      `${server}/users/${userId}/aggregatedWords?wordsPerPage=3600&filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22easy%22%7D%5D%7D`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((data) => dispatch(setWordsSuccess(data.data[0].paginatedResults)));
  } catch (error) {
    dispatch(setWordsFailure(error.message));
  }
};
