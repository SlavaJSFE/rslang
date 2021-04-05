import {
  SET_AMOUNTSTUDY_WORDS_SUCCESS,
  SET_AMOUNTSTUDY_WORDS_FAILURE,
  SET_AMOUNTSTUDY_WORDS_STARTED,

} from './constants';

const initialState = {
  amountWords: [],
  error: null,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AMOUNTSTUDY_WORDS_STARTED:
      return {
        ...state,
        loading: payload,
      };

    case SET_AMOUNTSTUDY_WORDS_SUCCESS:
      return {
        ...state,
        amountWords: payload,
        loading: false,
      };
    case SET_AMOUNTSTUDY_WORDS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
