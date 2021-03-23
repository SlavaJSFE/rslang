import { SET_WORDS, SET_PAGE, SET_GROUP } from './constants';

const initialState = {
  words: [],
  currentPage: 0,
  currentGroup: 0,
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
