import {
  SET_STUDY_WORDS_SUCCESS,
  SET_STUDY_WORDS_FAILURE,
  SET_STUDY_WORDS_STARTED,

} from './constants';

const initialState = {
  words: [],
  error: null,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_STUDY_WORDS_STARTED:
      return {
        ...state,
        loading: payload,
      };

    case SET_STUDY_WORDS_SUCCESS:
      return {
        ...state,
        words: payload,
        loading: false,
      };
    case SET_STUDY_WORDS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
