import * as axios from 'axios';
// import { setDifficulty } from '../redux/vocabulary/actions';
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

export const getDelWords = async (typeWords, delCurrentGroup, delCurrentPage, delUserData) => {
  try {
    const { data } = await axios.get(
      `${server}/users/${delUserData.userId
      }/aggregatedWords?group=${delCurrentGroup}&page=${delCurrentPage}&wordsPerPage=20&filter=
      ${JSON.stringify(getVocabularyFilter(typeWords))}`,
      {
        headers: {
          Authorization: `Bearer ${delUserData.token}`,
        },
      },
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDelWordsWithOutAuth = async (delCurrentGroup, delCurrentPage) => {
  try {
    const { data } = await axios.get(
      `${server}/words?group=${delCurrentGroup}&page=${delCurrentPage}`,
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
