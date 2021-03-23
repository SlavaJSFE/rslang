import { SET_WORDS, SET_PAGE, SET_GROUP } from './constants';

export const setWords = (words) => ({
  type: SET_WORDS,
  payload: words,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setGroup = (group) => ({
  type: SET_GROUP,
  payload: group,
});
