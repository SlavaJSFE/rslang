import {
  SET_RES_WORD_SUCCESS,
  SET_RES_WORD_FAILURE,
  SET_RES_WORD_STARTED,

} from './constants';

const initialState = {
  words: [],
  error: null,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RES_WORD_STARTED:
      return {
        ...state,
        loading: payload,
      };

    case SET_RES_WORD_SUCCESS:
      return {
        ...state,
        words: payload,
        loading: false,
      };

    case SET_RES_WORD_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
