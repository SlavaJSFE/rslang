/* eslint-disable no-underscore-dangle */
import {
  SET_GAME_WORDS,
  SET_LEVEL_GAME,
  SET_GRUPWORDS_FAILURE,
  SET_GRUPWORDS_STARTED,
  SET_GRUPWORDS_SUCCESS,
  // UPDATE_WORD,
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
        words: payload.reduce((prev, cur) => {
          if (cur._id) {
            cur.id = cur._id;
            return [...prev, cur];
          }
          return [...prev, cur];
        }, []),
        loading: false,
      };
    case SET_GRUPWORDS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    // case UPDATE_WORD:
    //   return {
    //     ...state,
    //     words: state.words.map((word) => {
    //       if (word.id !== payload.id) {
    //         return word;
    //       }
    //       if (word?.word?.userWord?.optional?.stat) {
    //         const updatedWord = {
    //           ...word,
    //           stat: [
    //             ...word?.userWord?.optional?.stat,
    //             {
    //               date: new Date(),
    //               gameName: 'savannah',
    //               rightAnswers: word?.userWord?.optional?.stat.rightAnswers + 1,
    //             },
    //           ],
    //         };
    //         return updatedWord;
    //       }
    //       const updatedWord = {
    //         ...word,
    //         stat: [
    //           {
    //             date: new Date(),
    //             gameName: 'savannah',
    //             rightAnswers: 1,
    //           },
    //         ],
    //       };
    //       return updatedWord;
    //     }),
    //   };
    default:
      return state;
  }
};

export default gameReducer;
