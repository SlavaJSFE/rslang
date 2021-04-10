import { SET_STATISTICS } from './constants';
import * as api from '../../api/statisticsApi';

const setStatistics = (statistics) => ({
  type: SET_STATISTICS,
  payload: statistics,
});

const getStatistics = () => async (dispatch, getState) => {
  const { user } = getState().user;
  try {
    const statistics = await api.getStatistics(user);
    dispatch(setStatistics(statistics));
  } catch (error) {
    throw new Error(error);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getStatistics };
