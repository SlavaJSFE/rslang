import * as axios from 'axios';
import { server } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const getStatistics = async (user) => {
  const todayId = new Date().toLocaleString().slice(0, 10).replaceAll('.', '_');
  const filter = {
    $and: [{ [`userWord.optional.stat.${todayId}`]: { $ne: null } }],
  };
  try {
    const { data } = await axios.get(
      `${server}/users/${
        user.userId
      }/aggregatedWords?wordsPerPage=3600&filter=${JSON.stringify(filter)}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    );
    return data[0].paginatedResults;
  } catch (error) {
    throw new Error(error);
  }
};
