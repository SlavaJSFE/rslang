/* eslint-disable no-underscore-dangle */
import RESTORE_WORD, { DIFFICULTY_WORD } from './constants';

const initialState = {
  words: [],
  currentPage: 0,
  currentGroup: 0,
  wordsCount: 0,
  error: null,
  loading: false,
  settings: {
    optional: {
      isTranslation: true,
      isButtonsActive: true,
    },
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RESTORE_WORD:
      return {
        ...state,
        words: state.words.filter((word) => word._id !== payload),
      };
    case DIFFICULTY_WORD:
      return {
        ...state,
        words: state.words.filter((word) => word._id !== payload),
      };

    default:
      return state;
  }
};
