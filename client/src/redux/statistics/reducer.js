/* eslint-disable no-underscore-dangle */
import {
  SET_STATISTICS,
} from './constants';

const initialState = {
  statistics: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_STATISTICS:
      return {
        ...state,
        statistics: payload,
      };

    default:
      return state;
  }
};
