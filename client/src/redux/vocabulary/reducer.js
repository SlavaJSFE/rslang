import {
  SET_DIF_WORDS_SUCCESS,
  SET_DIF_WORDS_FAILURE,
  SET_DIF_WORDS_STARTED,
  SET_DIF_PAGE,
  SET_DIF_GROUP,
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
    case SET_DIF_WORDS_STARTED:
      return {
        ...state,
        loading: payload,
      };
    case SET_DIF_WORDS_SUCCESS:
      return {
        ...state,
        words: payload,
        loading: false,
      };
    case SET_DIF_WORDS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case SET_DIF_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case SET_DIF_GROUP:
      return {
        ...state,
        currentGroup: payload,
      };

    default:
      return state;
  }
};
