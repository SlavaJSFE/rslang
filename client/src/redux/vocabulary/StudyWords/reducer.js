import {
  SET_STUDY_WORDS_SUCCESS,
  SET_STUDY_WORDS_FAILURE,
  SET_STUDY_WORDS_STARTED,
  SET_STUDY_GROUP,

} from './constants';

const initialState = {
  words: [],
  error: null,
  loading: false,
  group: 0,
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

    case SET_STUDY_GROUP:
      return {
        ...state,
        group: payload,
      };

    default:
      return state;
  }
};
