import {
  SET_USER,
  LOGOUT, SET_LOADING,
  UNSET_LOADING,
} from './constants';

const initialState = {
  user: {},
  isAuth: false,
  loading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: {},
        isAuth: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case UNSET_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
