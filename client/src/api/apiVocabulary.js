import * as axios from 'axios';
// import { setDifficulty } from '../redux/vocabulary/actions';

// eslint-disable-next-line import/prefer-default-export
export const restoreWord = async (wordId, userData) => {
  try {
    await axios.delete(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userData.userId}/words/${wordId}`,
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

export const getUserWord2 = (wordId, userData) => {
  const { token } = userData;

  try {
    return axios.get(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userData.userId}/words/${wordId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    console.log('error', error);
    if (error.response.status === 404) {
      return null;
    // eslint-disable-next-line no-else-return
    } else {
      throw new Error(error);
    }
  }
};

export const getUserWord = async (wordId, userData) => {
  try {
    const { data } = await axios.get(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userData.userId}/words/${wordId}`,
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
