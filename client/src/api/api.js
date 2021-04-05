/* eslint-disable no-underscore-dangle */
import * as axios from 'axios';
import * as storage from '../localStorageApi/localStorageApi';

import { server } from '../constants/constants';
import generateReqBody from './utils';

export const updateSettings = async (optional, field, value, userData) => {
  const reqBody = generateReqBody(optional, field, value);
  try {
    const { data } = await axios.put(
      `${server}/users/${userData.userId}/settings`,
      reqBody,
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      },
    );
    return data.optional;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchSettings = async (userData) => {
  try {
    const { data } = await axios.get(
      `${server}/users/${userData.userId}/settings`,
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      },
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const setDifficulty = async (wordId, userData, typeDifficulty) => {
  try {
    await axios.post(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userData.userId}/words/${wordId}`,
      {
        difficulty: typeDifficulty,
        optional: {
          rightAnswers: 0,
          wrongAnswers: 0,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      },
    );
  } catch (error) {
    throw new Error(error);
  }
};

// export const setHardWord = async (wordId, userData) => {
export const setHardWord = async (word, userData) => {
  const headers = {
    Authorization: `Bearer ${userData.token}`,
  };
  try {
    await axios({
      method: word?.userWord ? 'put' : 'post',
      url: `${server}/users/${userData.userId}/words/${word.id}`,
      headers,
      data: {
        difficulty: 'hard',
        optional: {
          rightAnswers: 0,
          wrongAnswers: 0,
        },
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteWord = async (wordId, userData) => {
  try {
    await axios.post(
      `${server}/users/${userData.userId}/words/${wordId}`,
      {
        difficulty: 'easy',
      },
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      },
    );
  } catch (error) {
    throw new Error(error);
  }
};

export const getWords = async (currentGroup, currentPage, userData) => {
  const filter = {
    $and: [{ 'userWord.difficulty': { $ne: 'easy' } }],
  };
  try {
    const { data } = await axios.get(
      `${server}/users/${
        userData.userId
      }/aggregatedWords?group=${currentGroup}&page=${currentPage}&wordsPerPage=20&filter=${JSON.stringify(
        filter,
      )}`,
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      },
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getWordsWithOutAuth = async (currentGroup, currentPage) => {
  try {
    const { data } = await axios.get(
      `${server}/words?group=${currentGroup}&page=${currentPage}`,
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getGrupWords = async (currentGroup) => {
  try {
    const { data } = await axios.get(`${server}/words?group=${currentGroup}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const setRightAnswer = async (word, userData) => {
  const { userId, token } = userData;
  const reqBody = word?.userWord?.optional?.rightAnswers
    ? {
      optional: {
        ...word.userWord.optional,
        rightAnswers: word.userWord.optional.rightAnswers + 1,
      },
    }
    : {
      optional: { ...word.userWord?.optional, rightAnswers: 1 },
    };
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  storage.setRightAnswer(word, reqBody);
  try {
    const { data } = await axios({
      method: word?.userWord ? 'put' : 'post',
      url: `${server}/users/${userId}/words/${word.id}`,
      headers,
      data: reqBody,
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const setWrongAnswer = async (word, userData) => {
  const { userId, token } = userData;
  const reqBody = word?.userWord?.optional?.wrongAnswers
    ? {
      optional: {
        ...word.userWord.optional,
        wrongAnswers: word.userWord.optional.wrongAnswers + 1,
      },
    }
    : { optional: { ...word.userWord?.optional, wrongAnswers: 1 } };
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  storage.setWrongAnswer(word, reqBody);
  try {
    await axios({
      method: word?.userWord ? 'put' : 'post',
      url: `${server}/users/${userId}/words/${word.id}`,
      headers,
      data: reqBody,
    });
  } catch (error) {
    throw new Error(error);
  }
};
