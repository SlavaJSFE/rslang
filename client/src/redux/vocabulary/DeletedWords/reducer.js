import {
  SET_DEL_WORDS_SUCCESS,
  SET_DEL_WORDS_FAILURE,
  SET_DEL_WORDS_STARTED,
  SET_DEL_PAGE,
  SET_DEL_GROUP,
  SET_DEL_WORDS_COUNT,

} from './constants';

const initialState = {
  delWords: [],
  error: null,
  loading: false,
  delCurrentPage: 0,
  delCurrentGroup: 0,
  delWordsCount: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DEL_WORDS_STARTED:
      return {
        ...state,
        loading: payload,
      };

    case SET_DEL_WORDS_SUCCESS:
      return {
        ...state,
        delWords: payload,
        loading: false,
      };
    case SET_DEL_WORDS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case SET_DEL_PAGE:
      return {
        ...state,
        delCurrentPage: payload,
      };
    case SET_DEL_GROUP:
      return {
        ...state,
        delCurrentGroup: payload,
      };
    case SET_DEL_WORDS_COUNT:
      return {
        ...state,
        delWordsCount: payload,
      };

    default:
      return state;
  }
};
