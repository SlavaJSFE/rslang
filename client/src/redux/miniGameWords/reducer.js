import {
  SET_GAME_WORDS,
  SET_LEVEL_GAME,
  SET_GRUPWORDS_FAILURE,
  SET_GRUPWORDS_STARTED,
  SET_GRUPWORDS_SUCCESS,
} from './constants';

const initialState = {
  words: [],
  level: '0',
};

const gameReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_GAME_WORDS:
      return {
        ...state,
        words: payload,
      };
    case SET_LEVEL_GAME:
      return {
        ...state,
        level: payload,
      };
    case SET_GRUPWORDS_STARTED:
      return {
        ...state,
        loading: payload,
      };
    case SET_GRUPWORDS_SUCCESS:
      return {
        ...state,
        words: payload,
        loading: false,
      };
    case SET_GRUPWORDS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default gameReducer;
