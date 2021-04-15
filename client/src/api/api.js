/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
import * as axios from 'axios';
// import * as storage from '../localStorageApi/localStorageApi';

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
      `${server}/words?group=${currentGroup}&page=${currentPage || 0}`,
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getGrupWords = async (currentGroup, userData) => {
  try {
    if (!userData.id) {
      return await getWordsWithOutAuth(currentGroup);
    }
    const url = `${server}/users/${userData.userId}/aggregatedWords?group=${currentGroup}&wordsPerPage=20&}`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });
    return data[0].paginatedResults;
  } catch (error) {
    throw new Error(error);
  }
};

export const setRightAnswer = async (word, gameName, userData) => {
  const { userId, token } = userData;
  const statId = new Date().toLocaleString().slice(0, 10).replaceAll('.', '_');
  const difficulty = word?.userWord?.difficulty === 'hard' ? 'hard' : 'medium';
  const statistics = word?.userWord?.optional?.stat[statId]
    ? {
      stat: {
        ...word?.userWord?.optional?.stat,
        [statId]: {
          ...word?.userWord?.optional?.stat[statId],
          [gameName]: {
            ...word?.userWord?.optional?.stat[statId][gameName],
            rightAnswers:
                word?.userWord?.optional?.stat[statId][gameName]?.rightAnswers
                  + 1 || 1,
          },
        },
      },
    }
    : {
      stat: {
        [statId]: {
          [gameName]: {
            rightAnswers: 1,
          },
        },
      },
    };

  const data = { difficulty, optional: statistics };

  if (userId) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      await axios({
        method: word?.userWord ? 'put' : 'post',
        url: `${server}/users/${userId}/words/${word.id}`,
        headers,
        data,
      });
    } catch (error) {
      throw new Error(error);
    }
  } else {
    // storage.setRightAnswer(word, reqBody);
  }
};

export const setWrongAnswer = async (word, gameName, userData) => {
  const { userId, token } = userData;
  const statId = new Date().toLocaleString().slice(0, 10).replaceAll('.', '_');
  const difficulty = word?.userWord?.difficulty === 'hard' ? 'hard' : 'medium';
  const statistics = word?.userWord?.optional?.stat[statId]
    ? {
      stat: {
        ...word?.userWord?.optional?.stat,
        [statId]: {
          ...word?.userWord?.optional?.stat[statId],
          [gameName]: {
            ...word?.userWord?.optional?.stat[statId][gameName],
            wrongAnswers:
                word?.userWord?.optional?.stat[statId][gameName]?.wrongAnswer
                  + 1 || 1,
          },
        },
      },
    }
    : {
      stat: {
        [statId]: {
          [gameName]: {
            wrongAnswers: 1,
          },
        },
      },
    };

  const data = { difficulty, optional: statistics };

  if (userId) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      await axios({
        method: word?.userWord ? 'put' : 'post',
        url: `${server}/users/${userId}/words/${word.id}`,
        headers,
        data,
      });
    } catch (error) {
      throw new Error(error);
    }
  } else {
    // storage.setRightAnswer(word, reqBody);
  }
};
