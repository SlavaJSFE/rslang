import { SET_USER, LOGOUT } from './constants';

const initialState = {
  user: {},
  isAuth: false,
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
    default:
      return state;
  }
}
