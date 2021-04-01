/* eslint-disable no-underscore-dangle */
import {
  SET_WORDS_SUCCESS,
  SET_WORDS_FAILURE,
  SET_WORDS_STARTED,
  SET_PAGE,
  SET_GROUP,
  SET_SETTINGS,
  DELETE_WORD,
  SET_HARD_WORD,
  SET_WORDS_COUNT,
} from './constants';

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
    case SET_WORDS_STARTED:
      return {
        ...state,
        loading: payload,
      };
    case SET_WORDS_SUCCESS:
      return {
        ...state,
        words: payload.reduce((prev, cur) => {
          if (cur._id) {
            cur.id = cur._id;
            return [...prev, cur];
          }
          return [...prev, cur];
        }, []),
        loading: false,
      };
    case SET_WORDS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case DELETE_WORD:
      return {
        ...state,
        words: state.words.filter((word) => word.id !== payload),
      };
    case SET_HARD_WORD:
      return {
        ...state,
        words: state.words.map((word) => {
          if (word.id === payload) {
            return Object.assign(word, { userWord: { difficulty: 'hard' } });
          }
          return word;
        }),
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case SET_GROUP:
      return {
        ...state,
        currentGroup: payload,
      };
    case SET_WORDS_COUNT:
      return {
        ...state,
        wordsCount: payload,
      };
    case SET_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          optional: { ...state.settings.optional, ...payload },
        },
      };

    default:
      return state;
  }
};
