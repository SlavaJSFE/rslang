/* eslint-disable no-underscore-dangle */
import * as axios from 'axios';
import generateReqBody from './utils';

export const updateSettings = async (optional, field, value, userData) => {
  const reqBody = generateReqBody(optional, field, value);
  try {
    const { data } = await axios.put(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userData.userId}/settings`,
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
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userData.userId}/settings`,
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

export const setHardWord = async (word, userData) => {
  const headers = {
    Authorization: `Bearer ${userData.token}`,
  };
  try {
    await axios({
      method: word?.userWord ? 'put' : 'post',
      url: `https://rslang-server-slavajsfe.herokuapp.com/users/${userData.userId}/words/${word.id}`,
      headers,
      data: {
        difficulty: 'hard',
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteWord = async (wordId, userData) => {
  try {
    await axios.post(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userData.userId}/words/${wordId}`,
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
      `https://rslang-server-slavajsfe.herokuapp.com/users/${
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

export const getGrupWords = async (currentGroup) => {
  try {
    const { data } = await axios.get(
      `https://rslang-server-slavajsfe.herokuapp.com/words?group=${currentGroup}`,
    );
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
  console.log(reqBody);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const { data } = await axios({
      method: word?.userWord ? 'put' : 'post',
      url: `https://rslang-server-slavajsfe.herokuapp.com/users/${userId}/words/${word.id}`,
      headers,
      data: reqBody,
    });
    // const words = JSON.parse(localStorage.getItem('words'));
    // localStorage.setItem(
    //   'words',
    //   JSON.stringify({
    //     ...words,
    //     [word.word]: { ...word, optional: reqBody.optional },
    //   }),
    // );
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
  try {
    await axios({
      method: word?.userWord ? 'put' : 'post',
      url: `https://rslang-server-slavajsfe.herokuapp.com/users/${userId}/words/${word.id}`,
      headers,
      data: reqBody,
    });
    // const words = JSON.parse(localStorage.getItem('words'));
    // localStorage.setItem(
    //   'words',
    //   JSON.stringify({
    //     ...words,
    //     [word.word]: { ...word, optional: reqBody.optional },
    //   }),
    // );
  } catch (error) {
    throw new Error(error);
  }
};
