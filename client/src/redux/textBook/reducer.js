import {
  SET_WORDS_SUCCESS,
  SET_WORDS_FAILURE,
  SET_WORDS_STARTED,
  SET_PAGE,
  SET_GROUP,
} from './constants';

const initialState = {
  words: [],
  currentPage: 0,
  currentGroup: 0,
  error: null,
  loading: false,
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
        words: payload,
        loading: false,
      };
    case SET_WORDS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
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

    default:
      return state;
  }
};
