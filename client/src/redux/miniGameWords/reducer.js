import { SET_GAME_WORDS, SET_LEVEL_GAME } from './constants';

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
    default:
      return state;
  }
};

export default gameReducer;
