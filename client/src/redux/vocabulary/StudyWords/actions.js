import * as axios from 'axios';
import {
  SET_STUDY_WORDS_SUCCESS,
  SET_STUDY_WORDS_FAILURE,
  SET_STUDY_WORDS_STARTED,
} from './constants';

export const setWordsStarted = () => ({
  type: SET_STUDY_WORDS_STARTED,
  payload: true,
});

export const setWordsSuccess = (words) => ({
  type: SET_STUDY_WORDS_SUCCESS,
  payload: words,
});

export const setWordsFailure = (err) => ({
  type: SET_STUDY_WORDS_FAILURE,
  payload: err,
});

export const fetchVocabularyStudyWords = (userData) => async (dispatch) => {
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
  } catch (error) {
    dispatch(setWordsFailure(error.message));
  }
};
