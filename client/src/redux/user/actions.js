import { LOGOUT, SET_USER } from './constants';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const reduxLogout = () => ({
  type: LOGOUT,
});
