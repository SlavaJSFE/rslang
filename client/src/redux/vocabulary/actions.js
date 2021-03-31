/* eslint-disable no-console */
/* eslint-disable max-len */
import * as axios from 'axios';
import {
  SET_DIF_WORDS_SUCCESS,
  SET_DIF_WORDS_FAILURE,
  SET_DIF_WORDS_STARTED,
  // SET_DIF_PAGE,
  // SET_DIF_GROUP,
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

// export const setPage = (page) => ({
//   type: SET_DIF_PAGE,
//   payload: page,
// });

// export const setGroup = (group) => ({
//   type: SET_DIF_GROUP,
//   payload: group,
// });

// const token = useSelector((state) => state.user.user.token);
// console.log(token);
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjE3NGQ5NDMyMzhhMDAxNWMyMGFiYSIsImlhdCI6MTYxNzA5OTM0NywiZXhwIjoxNjE3MTEzNzQ3fQ.aKg3DUtiFjE7rR7WqkKhIv_8L3UEbhGVIXAshw7ZdH4';

export const fetchVocabularyWords = (userData) => async (dispatch) => {
  dispatch(setWordsStarted());
  const { userId } = userData;
  const { token } = userData;

  try {
    await axios.get(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userId}/aggregatedWords?wordsPerPage=3600&filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22hard%22%7D%5D%7D`,
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
