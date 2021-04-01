import {
  SET_GAME_WORDS,
  SET_LEVEL_GAME,
  SET_GRUPWORDS_SUCCESS,
  SET_GRUPWORDS_FAILURE,
  SET_GRUPWORDS_STARTED,
} from './constants';
// import { setWordsSuccess, setWordsStarted, setWordsFailure } from '../textBook/actions';
import * as api from '../../api/api';

const setGameWords = (words) => ({
  type: SET_GAME_WORDS,
  payload: words,
});

// const setGrupWords = () => ({
//   type: SET_GRUP_WORDS,
// });

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

const fetchGrupWords = (currentGroup) => async (dispatch) => {
  dispatch(setWordsStarted());
  try {
    const data = await api.getGrupWords(+currentGroup);
    dispatch(setWordsSuccess(data));
  } catch (error) {
    dispatch(setWordsFailure(error.message));
  }
};

const setRightAnswer = (word) => async (dispatch, getState) => {
  const { user } = getState().user;
  try {
    await api.setRightAnswer(word, user);
  } catch (error) {
    console.log(error);
  }
};

const setWrongAnswer = (word) => async (dispatch, getState) => {
  const { user } = getState().user;
  try {
    await api.setWrongAnswer(word, user);
  } catch (error) {
    console.log(error);
  }
};

export {
  setGameWords,
  setLevel,
  fetchGrupWords,
  setRightAnswer,
  setWrongAnswer,
};
