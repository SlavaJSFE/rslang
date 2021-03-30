import { SET_GAME_WORDS, SET_GRUP_WORDS, SET_LEVEL_GAME } from './constants';

const setGameWords = (words) => ({
  type: SET_GAME_WORDS,
  payload: words,
});

const setGrupWords = () => ({
  type: SET_GRUP_WORDS,
});

const setLevel = (value) => ({
  type: SET_LEVEL_GAME,
  payload: value,
});

export { setGameWords, setGrupWords, setLevel };
