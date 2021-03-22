import { SET_WORDS, SET_PAGE } from './constants';

export const setWords = (words) => ({
  type: SET_WORDS,
  payload: words,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});
