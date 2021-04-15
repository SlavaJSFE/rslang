import * as axios from 'axios';
import { server } from '../constants/constants';
import { getVocabularyFilter } from './utils';
// eslint-disable-next-line import/prefer-default-export
export const restoreWord = async (wordId, userData) => {
  try {
    await axios.delete(
      `${server}/users/${userData.userId}/words/${wordId}`,
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

export const getUserWord = async (wordId, userData) => {
  try {
    const { data } = await axios.get(
      `${server}/users/${userData.userId}/words/${wordId}`,
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      },
    );
    return data;
  } catch (error) {
    return null;
  }
};

export const getDelWords = async (typeWords, currentGroup, currentPage, userData) => {
  try {
    const { data } = await axios.get(
      `${server}/users/${userData.userId
      }/aggregatedWords?group=${currentGroup}&page=${currentPage}&wordsPerPage=20&filter=
      ${JSON.stringify(getVocabularyFilter(typeWords))}`,
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

export const getDelWordsWithOutAuth = async (currentGroup, currentPage) => {
  try {
    const { data } = await axios.get(
      `${server}/words?group=${currentGroup}&page=${currentPage}`,
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCountWord = async (userData, typeWords) => {
  try {
    const { data } = await axios.get(
      `${server}/users/${userData.userId}/aggregatedWords?wordsPerPage=3600&filter=${JSON.stringify(getVocabularyFilter(typeWords))}`,
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
