/* eslint-disable max-len */
import * as axios from 'axios';
import {
  SET_DIF_WORDS_SUCCESS,
  SET_DIF_WORDS_FAILURE,
  SET_DIF_WORDS_STARTED,
  SET_DIF_PAGE,
  SET_DIF_GROUP,
} from './constants';

export const setWordsStarted = () => ({
  type: SET_DIF_WORDS_STARTED,
  payload: true,
});

export const setWordsSuccess = (words) => ({
  type: SET_DIF_WORDS_SUCCESS,
  payload: words,
});

export const setWordsFailure = (err) => ({
  type: SET_DIF_WORDS_FAILURE,
  payload: err,
});

export const setPage = (page) => ({
  type: SET_DIF_PAGE,
  payload: page,
});

export const setGroup = (group) => ({
  type: SET_DIF_GROUP,
  payload: group,
});

export const fetchVocabularyWords = () => async (dispatch) => {
  dispatch(setWordsStarted());
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjA2YjhlNTU0N2VhMDAxNWFlODkzYyIsImlhdCI6MTYxNjk0MDcwNSwiZXhwIjoxNjE2OTU1MTA1fQ.BNqGk-xn7QZe52AQJCzDDoOaPatWOLO55zmDCAS7qLQ';
  try {
    const { data } = await axios.get(
      'https://rslang-server-slavajsfe.herokuapp.com/users/60606b8e5547ea0015ae893c/aggregatedWords',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(setWordsSuccess(data));
  } catch (error) {
    dispatch(setWordsFailure(error.message));
  }
};

// const getHardWord = () => {
//   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjA2YjhlNTU0N2VhMDAxNWFlODkzYyIsImlhdCI6MTYxNjk0MDcwNSwiZXhwIjoxNjE2OTU1MTA1fQ.BNqGk-xn7QZe52AQJCzDDoOaPatWOLO55zmDCAS7qLQ';
//   axios
//     .post(
//       `https://rslang-server-slavajsfe.herokuapp.com/users/60606b8e5547ea0015ae893c/words/${word.id}`,
//       {
//         difficulty: 'hard',
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     )
//     .then((res) => console.log(res));
// };
