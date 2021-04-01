import * as axios from 'axios';

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
