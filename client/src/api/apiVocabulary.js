import * as axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const restoreWord = async (wordId, userData) => {
  console.log('hi');
  try {
    await axios.post(
      `https://rslang-server-slavajsfe.herokuapp.com/users/${userData.userId}/words/${wordId}`,
      {
        difficulty: '12345678',
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

// export default restoreWord;
