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

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjE3NGQ5NDMyMzhhMDAxNWMyMGFiYSIsImlhdCI6MTYxNzAxOTE0NiwiZXhwIjoxNjE3MDMzNTQ2fQ.pg_swrIbRxtKX6XDphfzx3qUk6Jbmit9lgsHwsTj6Gs';

export const fetchVocabularyWords = () => async (dispatch) => {
  dispatch(setWordsStarted());
  const idUser = '606174d943238a0015c20aba';

  try {
    await axios.get(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${idUser}/aggregatedWords?wordsPerPage=20&filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22hard%22%7D%5D%7D`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((data) => dispatch(setWordsSuccess(data.data[0].paginatedResults)));
    // .then((data) => console.log(data.data[0].paginatedResults));
  } catch (error) {
    dispatch(setWordsFailure(error.message));
  }
};
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjE3NGQ5NDMyMzhhMDAxNWMyMGFiYSIsImlhdCI6MTYxNzAwMTg0OCwiZXhwIjoxNjE3MDE2MjQ4fQ.G1SmeLph4xLMhk0nzLd_sN7-RNDzRcvnsMq9LZxeMVM';

// export const fetchVocabularyWords = () => async (dispatch) => {
//   dispatch(setWordsStarted());
//   const idUser = '606174d943238a0015c20aba';
//   try {
//     const { data } = await axios.get(
//       `https://rslang-server-slavajsfe.herokuapp.com/users/${idUser}/aggregatedWords?wordsPerPage=20&filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22hard%22%7D%5D%7D`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     );
//     dispatch(setWordsSuccess(data));
//   } catch (error) {
//     dispatch(setWordsFailure(error.message));
//   }
// };

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
