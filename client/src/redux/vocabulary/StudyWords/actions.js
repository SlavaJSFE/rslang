/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import * as axios from 'axios';
import { server } from '../../../constants/constants';
import {
  SET_STUDY_WORDS_SUCCESS,
  SET_STUDY_WORDS_FAILURE,
  SET_STUDY_WORDS_STARTED,
  SET_STUDY_GROUP,

} from './constants';

export const setWordsStarted = () => ({
  type: SET_STUDY_WORDS_STARTED,
  payload: true,
});

export const setGroup = (group) => ({
  type: SET_STUDY_GROUP,
  payload: group,
});

export const setWordsSuccess = (words) => ({
  type: SET_STUDY_WORDS_SUCCESS,
  payload: words,
});

export const setWordsFailure = (err) => ({
  type: SET_STUDY_WORDS_FAILURE,
  payload: err,
});

export const fetchVocabularyStudyWords = (userData, group) => async (dispatch) => {
  dispatch(setWordsStarted());
  dispatch(setGroup());
  const { userId } = userData;
  const { token } = userData;

  try {
    await axios.get(
      // `${server}/users/${userId}/aggregatedWords?group=${group}&wordsPerPage=3600&filter=%7B%22%24or%22%3A%5B%7B%22userWord.difficulty%22%3A%22medium%22%7D%2C%7B%22userWord.difficulty%22%3A%22hard%22%7D%5D%7D`,
      `${server}/users/${userId}/aggregatedWords?wordsPerPage=3600&filter=%7B%22%24or%22%3A%5B%7B%22userWord.difficulty%22%3A%22medium%22%7D%2C%7B%22userWord.difficulty%22%3A%22hard%22%7D%5D%7D`,
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
