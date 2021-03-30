import {
  SET_USER,
  LOGOUT,
  SET_MESSAGE,
  SET_ERROR,
} from './constants';

const initialState = {
  user: {},
  isAuth: false,
  message: null,
  error: null,
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

    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
