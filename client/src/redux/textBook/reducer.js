import { SET_WORDS, SET_PAGE } from './constants';

const initialState = {
  words: [],
  page: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_WORDS:
      return {
        ...state,
        words: payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: payload,
      };

    default:
      return state;
  }
};
