import * as axios from 'axios';
import { server } from '../../../constants/constants';
import {
  SET_DEL_WORDS_SUCCESS,
  SET_DEL_WORDS_FAILURE,
  SET_DEL_WORDS_STARTED,
  SET_DEL_PAGE,
  SET_DEL_GROUP,
  SET_DEL_WORDS_COUNT,
} from './constants';
import * as vocabularyApi from '../../../api/apiVocabulary';

export const setWordsStarted = () => ({
  type: SET_DEL_WORDS_STARTED,
  payload: true,
});

export const setWordsSuccess = (delWords) => ({
  type: SET_DEL_WORDS_SUCCESS,
  payload: delWords,
});

export const setWordsFailure = (err) => ({
  type: SET_DEL_WORDS_FAILURE,
  payload: err,
});

export const setPage = (delPage) => ({
  type: SET_DEL_PAGE,
  payload: delPage,
});

export const setGroup = (delGroup) => ({
  type: SET_DEL_GROUP,
  payload: delGroup,
});

export const setWordsCount = (delCount) => ({
  type: SET_DEL_WORDS_COUNT,
  payload: delCount,
});

export const fetchDelWords = (typeWords, delCurrentGroup, delCurrentPage, delUserData) => async (
  dispatch,
) => {
  dispatch(setWordsStarted());
  try {
    if (delUserData.token) {
      const data = await vocabularyApi.getDelWords(typeWords, delCurrentGroup, delCurrentPage, delUserData);
      dispatch(setWordsSuccess(data[0].paginatedResults));
      dispatch(setWordsCount(data[0].totalCount[0].count));
    } else {
      const data = await vocabularyApi.getDelWordsWithOutAuth(delCurrentGroup, delCurrentPage);
      dispatch(setWordsSuccess(data));
      dispatch(setWordsCount(null));
    }
  } catch (error) {
    dispatch(setWordsFailure(error.message));
  }
};

export const fetchVocabularyDeletedWords = (userData) => async (dispatch) => {
  dispatch(setWordsStarted());
  const { userId } = userData;
  const { token } = userData;

  try {
    await axios.get(
      `${server}/users/${userId}/aggregatedWords?wordsPerPage=25&filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22easy%22%7D%5D%7D`,
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
