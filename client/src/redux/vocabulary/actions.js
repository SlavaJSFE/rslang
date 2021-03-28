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

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjBlMzdlMzNiM2M4MDAxNTAwZWYzZiIsImlhdCI6MTYxNjk2MjQ1NSwiZXhwIjoxNjE2OTc2ODU1fQ.Sv1roL2te5DRUsWi9ZjvLsc5ldmGJEVhwX_8wE_WFEs';
const refreshToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjA2YjhlNTU0N2VhMDAxNWFlODkzYyIsInRva2VuSWQiOiI1ZjAwMmI0NS0zZWIyLTRjOGItYjRlYi0zZjhkZTdhNTU3ZTAiLCJpYXQiOjE2MTY5NjA1MzUsImV4cCI6MTYxNjk3NjczNX0.KTum2b70yFk4OxhZzg2_NzP_7KTd71SEm4soODNMpT8';

export const fetchVocabularyWords = () => async (dispatch) => {
  dispatch(setWordsStarted());
  const idUser = '6060e37e33b3c8001500ef3f';
  try {
    const { data } = await axios.get(
      // 'https://rslang-server-slavajsfe.herokuapp.com/users/60606b8e5547ea0015ae893c/aggregatedWords',
      `https://rslang-server-slavajsfe.herokuapp.com/users/${idUser}/aggregatedWords?wordsPerPage=20&filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22hard%22%7D%5D%7D`,
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
