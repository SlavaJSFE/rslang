/* eslint-disable no-underscore-dangle */
import RESTORE_WORD, { DIFFICULTY_WORD, COUNT_DEL_WORDS, COUNT_STUDY_WORDS } from './constants';

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
  countDelWords: 0,
  countStudyWords: 0,
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
    case COUNT_DEL_WORDS:
      return {
        ...state,
        countDelWords: payload,
      };
    case COUNT_STUDY_WORDS:
      return {
        ...state,
        countStudyWords: payload,
      };

    default:
      return state;
  }
};
