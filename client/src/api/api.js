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

export const setHardWord = async (wordId, userData) => {
  try {
    await axios.post(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userData.userId}/words/${wordId}`,
      {
        difficulty: 'hard',
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

export const setEasyWord = async (wordId, userData) => {
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

export const getWords = async (currentGroup, currentPage) => {
  try {
    const { data } = await axios.get(
      `https://react-learnwords-example.herokuapp.com/words?group=${currentGroup}&page=${currentPage}`,
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
