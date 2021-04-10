import {
  SET_GAME_WORDS,
  SET_LEVEL_GAME,
  SET_GRUPWORDS_SUCCESS,
  SET_GRUPWORDS_FAILURE,
  SET_GRUPWORDS_STARTED,
  // UPDATE_WORD, //! Unused var. Can I remove it?
} from './constants';
// import { setWordsSuccess, setWordsStarted, setWordsFailure } from '../textBook/actions';
import * as api from '../../api/api';

const setGameWords = (words) => ({
  type: SET_GAME_WORDS,
  payload: words,
});

const setLevel = (value) => ({
  type: SET_LEVEL_GAME,
  payload: value,
});

const setWordsStarted = () => ({
  type: SET_GRUPWORDS_STARTED,
  payload: true,
});

const setWordsSuccess = (words) => ({
  type: SET_GRUPWORDS_SUCCESS,
  payload: words,
});

const setWordsFailure = (err) => ({
  type: SET_GRUPWORDS_FAILURE,
  payload: err,
});
//! Unused var. For what is it?
// const updateWord = (word) => ({
//   type: UPDATE_WORD,
//   payload: word,
// });

const fetchGrupWords = (currentGroup = 0) => async (dispatch, getState) => {
  const { user } = getState().user;
  dispatch(setWordsStarted());
  try {
    const data = await api.getGrupWords(+currentGroup, user);
    dispatch(setWordsSuccess(data));
  } catch (error) {
    dispatch(setWordsFailure(error.message));
  }
};

const setRightAnswer = (word, gameName) => async (dispatch, getState) => {
  const { user } = getState().user;
  try {
    await api.setRightAnswer(word, gameName, user);
    // dispatch(updateWord(word));
  } catch (error) {
    throw new Error(error);
  }
};

const setWrongAnswer = (word, gameName) => async (dispatch, getState) => {
  const { user } = getState().user;
  try {
    await api.setWrongAnswer(word, gameName, user);
  } catch (error) {
    throw new Error(error);
  }
};

export {
  setGameWords,
  setLevel,
  fetchGrupWords,
  setRightAnswer,
  setWrongAnswer,
};
